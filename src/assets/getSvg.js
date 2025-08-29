// getSvg-enhanced.js
const fs = require('fs').promises;
const path = require('path');
const { optimize } = require('svgo'); // 需要安装: npm install svgo

const svgDir = path.resolve(__dirname, './svgs');
const outputFile = path.resolve(__dirname, './svgs.tsx');

// SVG 优化配置
const svgoConfig = {
    plugins: [
        {
            name: 'preset-default',
            params: {
                overrides: {
                    removeViewBox: false, // 保留 viewBox
                    cleanupIDs: {
                        remove: true,
                        minify: true
                    }
                }
            }
        },
        'removeXMLProcInst',
        'removeComments',
        'removeMetadata',
        'removeEditorsNSData',
        'removeTitle',
        'removeDesc',
        'removeUselessDefs',
        'removeUnknownsAndDefaults',
        'removeUnusedNS',
        'removeEmptyText',
        'removeEmptyContainers'
    ]
};

async function optimizeSvg(svgContent) {
    try {
        const result = optimize(svgContent, svgoConfig);
        return result.data;
    } catch (error) {
        console.warn('SVG optimization failed, using original:', error);
        return svgContent;
    }
}

async function readSvgFile(filename) {
    if (!filename.endsWith('.svg')) return null;

    try {
        const filePath = path.join(svgDir, filename);
        let svgContent = await fs.readFile(filePath, 'utf8');

        // 优化 SVG
        svgContent = await optimizeSvg(svgContent);

        const key = path.basename(filename, '.svg')
            .replace(/\s+/g, '_')
            .replace(/[^a-zA-Z0-9_]/g, '');

        return { [key]: svgContent };
    } catch (error) {
        console.error(`Error processing ${filename}:`, error);
        return null;
    }
}

async function generateEnhancedSvgModule() {
    try {
        const files = await fs.readdir(svgDir);
        const results = await Promise.all(files.map(readSvgFile));

        const svgData = Object.assign({}, ...results.filter(Boolean));

        const jsContent = `
// Auto-generated SVG module
// Generated: ${new Date().toLocaleString()}
// Files: ${Object.keys(svgData).length}

const svgIcons:any = ${JSON.stringify(svgData, null, 2)};

// Utility functions
export const getSvg = (name:any) => {
    if (!svgIcons[name]) {
        console.warn(\`SVG icon "\${name}" not found. Available icons: \${Object.keys(svgIcons).join(', ')}\`);
        return null;
    }
    return svgIcons[name];
};

export const getSvgNames = () => Object.keys(svgIcons);
export const hasSvg = (name:any) => name in svgIcons;

export default svgIcons;

// TypeScript support
/**
 * @typedef {Object} SvgIcons
 * ${Object.keys(svgData).map(name => ` * @property {string} ${name}`).join('\n')}
 */

/**
 * @type {SvgIcons}
 */
export const Icons = svgIcons;
`.trim();

        await fs.writeFile(outputFile, jsContent, 'utf8');
        console.log(`✅ Generated ${Object.keys(svgData).length} optimized SVG icons`);

    } catch (error) {
        console.error('❌ Error:', error);
    }
}

generateEnhancedSvgModule();
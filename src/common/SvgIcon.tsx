import React from 'react';
import { SvgXml } from 'react-native-svg';
import svgIcons from '../assets/svgs';

const SvgIcon = ({ name = '', size = 24, color = '#000', ...props }) => {
    const svgXml = svgIcons[name];

    if (!svgXml) {
        console.warn(`SVG icon "${name}" not found`);
        return null;
    }

    // 动态替换颜色
    const coloredSvg = svgXml.replace(/currentColor|#000000|black/gi, color);

    return (
        <SvgXml
            xml={coloredSvg}
            width={size}
            height={size}
            {...props}
        />
    );
};

export default SvgIcon;
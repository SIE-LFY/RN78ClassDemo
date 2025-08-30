import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    StatusBar,
    Animated
} from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

class GuideScreen extends Component {
    swiperRef:any = null;

    constructor(props:any) {
        super(props);
        this.state = {
            currentIndex: 0,
            fadeAnim: new Animated.Value(0)
        };
        this.swiperRef = React.createRef();
    }

    componentDidMount() {
        this.animateEntrance();
    }

    animateEntrance = () => {
        Animated.timing(this.state.fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true
        }).start();
    }

    guideData = [
        {
            id: 1,
            image: require('../../../assets/images/guide1.png'),
            title: '欢迎使用 UniApp',
            description: '发现更多精彩内容，体验全新功能',
            color: ['#667eea', '#764ba2']
        },
        {
            id: 2,
            image: require('../../../assets/images/guide1.png'),
            title: '个性化推荐',
            description: '根据您的喜好智能推荐内容',
            color: ['#f093fb', '#f5576c']
        },
        {
            id: 3,
            image: require('../../../assets/images/guide1.png'),
            title: '开始探索',
            description: '立即开始您的精彩旅程',
            color: ['#4facfe', '#00f2fe']
        }
    ];

    handleIndexChanged = (index) => {
        this.setState({ currentIndex: index });
    }

    handleFinish = () => {
        const { onFinish } = this.props;
        onFinish && onFinish();
    }

    renderPagination = () => {
        const { currentIndex } = this.state;

        return (
            <View style={styles.paginationContainer}>
                {this.guideData.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.paginationDot,
                            index === currentIndex ? styles.paginationDotActive : styles.paginationDotInactive
                        ]}
                    />
                ))}
            </View>
        );
    }

    renderItem = (item, index) => {
        return (
            <View key={item.id} style={styles.slide}>
                <Image source={item.image} style={styles.image} resizeMode="contain" />
                <LinearGradient
                    colors={item.color}
                    style={styles.gradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </LinearGradient>
            </View>
        );
    }

    render() {
        const { currentIndex, fadeAnim } = this.state;
        const isLastPage = currentIndex === this.guideData.length - 1;

        return (
            <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

                <Swiper
                    ref={this.swiperRef}
                    loop={false}
                    showsPagination={false}
                    onIndexChanged={this.handleIndexChanged}
                    removeClippedSubviews={false}
                >
                    {this.guideData.map(this.renderItem)}
                </Swiper>

                {this.renderPagination()}

                {isLastPage ? (
                    <TouchableOpacity
                        style={styles.startButton}
                        onPress={this.handleFinish}
                        activeOpacity={0.8}
                    >
                        <LinearGradient
                            colors={['#FF6B6B', '#FF8E53']}
                            style={styles.gradientButton}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.startButtonText}>立即体验</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.skipButton}
                        onPress={this.handleFinish}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.skipButtonText}>跳过</Text>
                    </TouchableOpacity>
                )}
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    image: {
        width: width * 0.8,
        height: height * 0.5,
        marginBottom: 40
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: height * 0.35,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 15,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2
    },
    description: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.9)',
        textAlign: 'center',
        lineHeight: 22
    },
    paginationContainer: {
        position: 'absolute',
        bottom: 120,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 6,
        transition: 'all 0.3s ease-in-out'
    },
    paginationDotActive: {
        backgroundColor: '#FF6B6B',
        width: 20
    },
    paginationDotInactive: {
        backgroundColor: 'rgba(255, 107, 107, 0.4)'
    },
    startButton: {
        position: 'absolute',
        bottom: 60,
        alignSelf: 'center',
        width: width * 0.7,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    gradientButton: {
        paddingVertical: 16,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    startButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    skipButton: {
        position: 'absolute',
        top: 60,
        right: 25,
        padding: 12,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 20
    },
    skipButtonText: {
        color: '#666',
        fontSize: 16,
        fontWeight: '500'
    }
});

export default GuideScreen;
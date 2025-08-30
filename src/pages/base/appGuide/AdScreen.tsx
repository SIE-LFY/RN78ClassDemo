import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Animated,
    Easing
} from 'react-native';

const { width, height } = Dimensions.get('window');

// interface Props {
//     userInfo: any,
//     navigation: any,
// }
// interface State {
//     appList: any,
// }

class AdScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countdown: props.adDuration || 5,
            scaleAnim: new Animated.Value(0.8),
            fadeAnim: new Animated.Value(0)
        };
        this.timer = null;
    }

    componentDidMount() {
        this.startAnimations();
        this.startCountdown();
    }

    componentWillUnmount() {
        this.clearTimer();
    }

    startAnimations = () => {
        const { scaleAnim, fadeAnim } = this.state;

        // 缩放动画
        Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 8,
            tension: 40,
            useNativeDriver: true
        }).start();

        // 淡入动画
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true
        }).start();
    }

    startCountdown = () => {
        this.timer = setInterval(() => {
            this.setState(prevState => {
                const newCountdown = prevState.countdown - 1;

                if (newCountdown <= 0) {
                    this.clearTimer();
                    this.handleFinish();
                    return { countdown: 0 };
                }

                return { countdown: newCountdown };
            });
        }, 1000);
    }

    clearTimer = () => {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    handleFinish = () => {
        const { onFinish } = this.props;
        onFinish && onFinish();
    }

    handleSkip = () => {
        this.clearTimer();
        this.handleFinish();
    }

    handleAdPress = () => {
        // 处理广告点击事件
        console.log('Ad clicked');
        // 可以添加跳转逻辑或统计代码
    }

    render() {
        const { countdown, scaleAnim, fadeAnim } = this.state;

        return (
            <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
                <TouchableOpacity
                    style={styles.adContainer}
                    onPress={this.handleAdPress}
                    activeOpacity={0.9}
                >
                    <Animated.Image
                        source={require('../../../assets/images/guide1.png')}
                        style={[
                            styles.adImage,
                            {
                                transform: [{ scale: scaleAnim }],
                                opacity: fadeAnim
                            }
                        ]}
                        resizeMode="cover"
                    />
                </TouchableOpacity>

                {/* 跳过按钮 */}
                <TouchableOpacity
                    style={styles.skipButton}
                    onPress={this.handleSkip}
                    activeOpacity={0.7}
                >
                    <View style={styles.skipBackground}>
                        <Text style={styles.skipText}>跳过 {countdown}s</Text>
                    </View>
                </TouchableOpacity>

                {/* 品牌标识 */}
                <Animated.View
                    style={[
                        styles.brandContainer,
                        {
                            opacity: fadeAnim, transform: [{
                                translateY: fadeAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [50, 0]
                                })
                            }]
                        }
                    ]}
                >
                    <Text style={styles.brandText}>Uni</Text>
                    <Text style={styles.brandSubText}>999sdahfjf</Text>
                </Animated.View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    adContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    adImage: {
        width: width,
        height: height,
        position: 'absolute'
    },
    skipButton: {
        position: 'absolute',
        top: 60,
        right: 20,
        zIndex: 10
    },
    skipBackground: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)'
    },
    skipText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600'
    },
    brandContainer: {
        position: 'absolute',
        bottom: 60,
        left: 0,
        right: 0,
        alignItems: 'center'
    },
    brandText: {
        color: '#fff',
        fontSize: 42,
        fontWeight: 'bold',
        marginBottom: 8,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4
    },
    brandSubText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 16,
        letterSpacing: 2
    }
});

export default AdScreen;
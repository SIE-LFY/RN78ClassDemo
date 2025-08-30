import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import GuideScreen from './GuideScreen';
import AdScreen from './AdScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

class AppGuideManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showGuide: null,
            showAd: false,
            isLoading: true,
            isFirstLaunch: false
        };
    }

    async componentDidMount() {
        await this.checkFirstLaunch();
    }

    checkFirstLaunch = async () => {
        try {
            const hasLaunched = await AsyncStorage.getItem('@app_has_launched');
            const isFirstLaunch = !hasLaunched;

            this.setState({
                showGuide: isFirstLaunch,
                showAd: true, // 每次启动都显示广告
                isLoading: false,
                isFirstLaunch
            });

        } catch (error) {
            console.error('Error checking first launch:', error);
            this.setState({
                showGuide: true,
                showAd: true,
                isLoading: false,
                isFirstLaunch: true
            });
        }
    }

    handleGuideFinish = async () => {
        try {
            if (this.state.isFirstLaunch) {
                await AsyncStorage.setItem('@app_has_launched', 'true');
            }
            this.setState({ showGuide: false });
        } catch (error) {
            console.error('Error saving launch status:', error);
            this.setState({ showGuide: false });
        }
    }

    handleAdFinish = () => {
        this.setState({ showAd: false });
    }

    renderContent() {
        const { showGuide, showAd, isLoading, children } = this.props;

        if (isLoading) {
            return (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#007AFF" />
                </View>
            );
        }

        if (showGuide) {
            return <GuideScreen onFinish={this.handleGuideFinish} />;
        }

        if (showAd) {
            return <AdScreen onFinish={this.handleAdFinish} adDuration={5} />;
        }

        return children;
    }

    render() {
        return this.renderContent();
    }
}

const styles = {
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
};

export default AppGuideManager;
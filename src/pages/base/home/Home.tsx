import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Home extends Component {
    handleResetGuide = async () => {
        try {
            await AsyncStorage.removeItem('@app_has_launched');
        } catch (error) {
            console.error('Failed to reset guide:', error);
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>欢迎来到主页面！</Text>
                <Button title="重置引导页" onPress={this.handleResetGuide} />
            </View>
        );
    }
}

export default Home;
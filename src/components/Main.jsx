import React from 'react';
import { View, Text } from 'react-native';
import Constants from 'expo-constants'
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';


const Main = () => {
    return (
        <View style={{  flexGrow: 1}}>
            <AppBar></AppBar>
            <RepositoryList></RepositoryList>
        </View>
    );
};

export default Main;
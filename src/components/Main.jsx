import React from 'react';
import { View, Text } from 'react-native';
import Constants from 'expo-constants'
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Routes } from 'react-router-native';


const Main = () => {
    return (
        <View style={{ flexGrow: 1 }}>
            <AppBar></AppBar>
            <Routes>
                <Route path="/" element={<RepositoryList />} exact/>
                <Route path="/signin" element={<Text>Hola</Text>} exact/>
            </Routes>
        </View>
    );
};

export default Main;
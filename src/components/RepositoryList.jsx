import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import repositories from '../data/repositories.js'
import RepositoryItem from './RepositoryItem.jsx';

const RepositoryList = () => {

    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem={item => (
                <RepositoryItem repo={item.item}></RepositoryItem>
            )}
        >
        </FlatList>
    );
};

export default RepositoryList;
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import StyledText from './StyledText';

const RepositoryItem = ({ repo }) => {

    const RepositoryStats = ({repo}) => {
        return (
            <View>
                <StyledText colorPrimary >language: {repo.language}</StyledText>
                <StyledText colorPrimary >forksCount: {repo.forksCount}</StyledText>
                <StyledText colorPrimary >reviesCount: {repo.reviesCount}</StyledText>
                <StyledText colorSecondary >ratingAverage: {repo.ratingAverage}</StyledText>
            </View>
        )
    }


    return (
        <View key={repo.id} style={styles.container}>
            <StyledText bold subheading >fullName: {repo.fullName}</StyledText>
            <StyledText bold >description: {repo.description}</StyledText>
            <RepositoryStats repo></RepositoryStats>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 0,
    }
})

export default RepositoryItem;
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import StyledText from './StyledText';

// const parseThousands = value => {
//     return value >= 1000 ?
//     `${Match.round(value/100) / 10}k`
//     :
//     String(value)
// }

const RepositoryItem = ({ repo }) => {


    const RepositoryStats = ({ repo }) => {
        return (
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <View>
                    <StyledText alignCenter colorPrimary bold >language</StyledText>
                    <StyledText alignCenter colorPrimary >{repo.language}</StyledText>
                </View>
                <View>
                    <StyledText alignCenter colorPrimary bold >forksCount</StyledText>
                    <StyledText alignCenter colorPrimary >{repo.forksCount}</StyledText>
                </View>
                <View>
                    <StyledText alignCenter colorPrimary bold >reviesCount</StyledText>
                    <StyledText alignCenter colorPrimary >{repo.reviesCount}</StyledText>
                </View>
                <View>
                    <StyledText alignCenter colorSecondary bold >ratingAverage</StyledText>
                    <StyledText alignCenter colorSecondary >{repo.ratingAverage}</StyledText>
                </View>
            </View>
        )
    }


    return (
        <View key={repo.id} style={styles.container}>
            <StyledText bold subheading >fullName: {repo.fullName}</StyledText>
            <StyledText bold >description: {repo.description}</StyledText>
            <RepositoryStats repo={repo}></RepositoryStats>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 0,
    }
})

export default RepositoryItem;
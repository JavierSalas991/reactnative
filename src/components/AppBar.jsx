import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import StyledText from './StyledText';
import theme from '../theme';
import Constants from "expo-constants"
import { Link, useLocation } from 'react-router-native';

const AppBarTab = ({ children, to }) => {

    const {pathname} = useLocation()
    const active = pathname === to

    const textStyle = [
        styles.text,
        active && styles.active
    ]

    return (
        <Link active={active} to={to}>
            <StyledText bold style={textStyle}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {



    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab to="/">Repositories</AppBarTab>
                <AppBarTab to="/signin">Sign in</AppBarTab>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10,

    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10
    },
    active: {
        color: theme.appBar.textPrimary
    }
})

export default AppBar;
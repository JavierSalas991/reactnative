import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from "../theme"

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    bold: { fontWeight: theme.fontWeights.bold },
    subheading: { fontSize: theme.fontSizes.subheading },
    colorPrimary: { color: theme.colors.textPrimary },
    colorSecondary: { color: theme.colors.textSecondary },
    textAlignCenter: {
        textAlign: "center"
    }

})

export default function StyledText(props) {

    const textStyles = [styles.text].concat(
        Object.keys(styles).map(word => {
            if (props[word]) {

                return styles[word]
            }
        })
    )

    return (
        <Text style={textStyles} props>
            {props.children}
        </Text>
    )

}
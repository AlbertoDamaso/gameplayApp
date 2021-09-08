import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
     width: 104,
     height: 120,
     marginRight: 8, 
     borderRadius: 8,
     justifyContent: 'center',
     alignItems: 'center'
    },
    content: {
        width: 100,
        height: 116,
        backgroundColor: theme.colors.secondary40,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7
    },
    checked: {
        width: 10,
        height: 10,
        marginRight: 7,
        alignSelf: 'flex-end',
        borderRadius: 3,
        backgroundColor: theme.colors.primary
    },
    check: {
        width: 12,
        height: 12,
        marginRight: 7,
        alignSelf: 'flex-end',
        borderWidth: 2,
        borderRadius: 3,
        borderColor: theme.colors.secondary50,
        backgroundColor: theme.colors.secondary100
    },
    title: {
        fontFamily: theme.fonts.title500,
        color: theme.colors.heading,
        fontSize: 15
    }


})

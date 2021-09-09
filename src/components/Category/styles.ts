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
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20
    },
    checked: {
        position: "absolute",
        top: 7,
        right: 7,        
        width: 10,
        height: 10,
        borderRadius: 3,
        backgroundColor: theme.colors.primary
    },
    check: {
        position: "absolute",
        top: 7,
        right: 7,        
        width: 12,
        height: 12,
        borderWidth: 2,
        borderRadius: 3,
        borderColor: theme.colors.secondary50,
        backgroundColor: theme.colors.secondary100
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 15
    }


})

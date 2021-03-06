import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32
    },
    select: {
        width: '100%',
        height: 68,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 25,
        borderWidth: 1,
        borderColor: theme.colors.secondary50,
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: 64,
        height: 68,
        borderWidth: 1,
        backgroundColor: theme.colors.secondary40,
        borderColor: theme.colors.secondary50,
        borderRadius: 8
    },
    selectBody: {
        flex: 1,
        alignItems: 'center'
    },
    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    divider: {
        fontSize: 15,
        marginRight: 4,
        fontFamily: theme.fonts.text500,
        color: theme.colors.highlight
    },
    caracteresLimit: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight
    },
    footer: {
        marginVertical: 20,
        marginBottom: 56
    }
})
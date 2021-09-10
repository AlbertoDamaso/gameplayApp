import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
submitButton:{
    width: '100%',
    height: 56,
    borderWidth:1,    
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary
  },
  textButton: {
    flex: 1,
    fontSize: 15,
    textAlign: "center",
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500
  }
});
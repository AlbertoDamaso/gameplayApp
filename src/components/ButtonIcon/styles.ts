import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
submitButton:{
    width: '73%',
    height: 56,
    borderWidth:1,    
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary
  },
  iconWrapper:{
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,  
    borderRightColor: '#991F36',
  },
  imageButton: {
    width: 24,
    height: 18
  },
  textButton: {
    flex: 1,
    fontSize: 15,
    textAlign: "center",
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500
  }
});
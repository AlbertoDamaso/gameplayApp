import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
  },
  content: {
    paddingHorizontal: 50,
    marginTop: -45
  },
  title: {
    fontSize: 40,
    marginBottom: 16,
    textAlign: 'center',
    lineHeight: 40,
    color: theme.colors.heading, 
    fontFamily: theme.fonts.title700
  },
  text: {
    fontSize: 15,
    marginBottom: 48,
    textAlign:'center',
    lineHeight: 25,
    color: theme.colors.heading,
    fontFamily: theme.fonts.title500
  },


})
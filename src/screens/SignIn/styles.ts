import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background
  },
  image: {
    width: '100%',
  },
  content: {
    width: '63%',
    marginTop: -45
  },
  title: {
    fontSize: 40,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.colors.heading, 
    fontFamily: 'sans-serif-condensed'
  },
  text: {
    fontSize: 15,
    marginBottom: 48,
    textAlign:'center',
    color: theme.colors.heading
  },


})
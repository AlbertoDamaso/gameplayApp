import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d133e'
  },
  image: {
    width: '100%',
  },
  content: {
    width: '63%',
  },
  title: {
    fontSize: 40,
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff', 
    fontFamily: 'sans-serif-condensed'
  },
  text: {
    fontSize: 15,
    marginBottom: 48,
    textAlign:'center',
    color: '#fff'
  },
  submitButton:{
    width: '73%',
    height: 56,
    borderWidth:1,    
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 8,
    borderColor: '#E51C44',
    backgroundColor: '#E51C44'
  },
  imageButton: {
    marginTop:19,
    marginRight: 56,
    marginBottom: 19,
    marginLeft: 16
  },
  textButton: {
    fontSize: 15,
    textAlign: "center",
    marginTop:16,
    marginRight: 40,
    marginBottom: 16,
    color: '#fff'
  }

})
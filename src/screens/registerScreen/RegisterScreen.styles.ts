import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F9FC',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 40,
  },
  inputField : {
    width : 300,
    marginBottom : 20
  },
  inputLabel :{
    fontSize :14,
    color : '#333',
    marginBottom : 5,
    marginTop : 10,
    fontWeight : '500'
  },

  textInput: {
    height: 50,
    width: '100%', 
    borderColor: '#050000ff',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15, 
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
    justifyContent : 'space-evenly'
  },
  buttons: {
    width: 300,
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  textPrompt: {
    color: '#666',
    fontSize: 15,
    marginTop: 20,
  },
  signInButton: {
    marginTop: 5,
    padding: 5,
  },
  signInText: {
    color: '#007AFF',
    fontSize: 15,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },

  dropdown: {
  width: '100%',
  height: 50,
  borderColor: '#050000ff',
  borderWidth: 1,
  borderRadius: 8,
  paddingHorizontal: 10,
  backgroundColor: '#fff',
},
})
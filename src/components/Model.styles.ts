import { StyleSheet } from "react-native";

export default StyleSheet.create({
    modelPage : {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    },

    modalContainer : {
        width : '90%',
        backgroundColor : 'white',
        padding : 20,
        borderRadius : 10,
        borderWidth : 1,
        borderColor : '#010101ff'
        
        
    },
    title : {
        fontSize : 20,
        fontWeight : `700`,
        textAlign : 'center',
        marginBottom : 10
    },

    inputField : {
        borderWidth : 1,
        borderColor : '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginBottom: 10,
        gap :15
    },
    buttonContainer : {
        flexDirection : 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    addButton: {
    backgroundColor: '#0a84ff',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: '#ff0000ff',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  }




})
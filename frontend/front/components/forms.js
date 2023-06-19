import React, { useRef } from "react";

import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
const Form=({onEdit})=>{
    const ref=useRef();
    return(
        <View  style={styles.container}>
            <Text>Cadastro</Text>
            <TextInput style={styles.input} placeholder="Nome"></TextInput>
            <TextInput style={styles.input} placeholder="Email"></TextInput>
            <TextInput style={styles.input} placeholder="Telefone"></TextInput>
            <TextInput style={styles.input} placeholder="Data"></TextInput>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Inserir</Text></TouchableOpacity>
            

        </View>
    );
};

export default Form

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: "20px",
    },

    input:{
        
        height: 40,
        borderColor: '#76044F',
        paddingLeft: 30,
        borderWidth: 3,
        marginBottom: 10,
        
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#990673',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 20,
        },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFF',
            },
  });
  

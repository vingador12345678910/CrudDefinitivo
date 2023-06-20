import React, { useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ToastAndroid } from 'react-native';
import axios from 'axios';

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const nomeRef = useRef(null);
  const emailRef = useRef(null);
  const foneRef = useRef(null);
  const dataRef = useRef(null);

  useEffect(() => {
    if (onEdit) {
      const { nome, email, fone, data_nasc } = onEdit;

      nomeRef.current.setNativeProps({ text: nome });
      emailRef.current.setNativeProps({ text: email });
      foneRef.current.setNativeProps({ text: fone });
      dataRef.current.setNativeProps({ text: data_nasc });
    }
  }, [onEdit]);

  const handleSubmit = async () => {
    const nome = nomeRef.current.value;
    const email = emailRef.current.value;
    const fone = foneRef.current.value;
    const data_nasc= dataRef.current.value;
    

    if (!nome || !email || !fone || !data_nasc) {
      return ToastAndroid.show('Preencha todos os campos!', ToastAndroid.SHORT);
      alert("Insira todos os campos")
    }

    try {
      if (onEdit) {
        
        await axios.put(`http://localhost:8800/${onEdit.id}`, {
          nome,
          email,
          fone,
          data_nasc,
        });
        
      } else {
       

        await axios.post('http://localhost:8800', {
          nome,
          email,
          fone,
          data_nasc,
         
        });
        alert(data_nasc)
      }
      nomeRef.current.clear();
      emailRef.current.clear();
      foneRef.current.clear();
      dataRef.current.clear();

      setOnEdit(null);
      getUsers();
    } catch (error) {
      alert(error)
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <Text>Nome</Text>
        <TextInput ref={nomeRef} style={styles.input} />
      </View>
      <View style={styles.inputArea}>
        <Text>E-mail</Text>
        <TextInput ref={emailRef} style={styles.input} />
      </View>
      <View style={styles.inputArea}>
        <Text>Telefone</Text>
        <TextInput ref={foneRef} style={styles.input} />
      </View>
      <View style={styles.inputArea}>
        <Text>Data de Nascimento</Text>
        <TextInput ref={dataRef} style={styles.input}  />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>SALVAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "20px",
   
   
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 5,
  },
  inputArea: {
    marginBottom: 10,
  },
  input: {
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


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ToastAndroid } from 'react-native';
import axios from 'axios';

const Grid = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    try {
      
      await axios.delete("http://localhost:8800/" + id);
      const newArray = users.filter((user) => user.id !== id);
      setUsers(newArray);
      alert("Excluiu")
      
    } catch (error) {
      alert(error)
      
    }
    setOnEdit(null);
  };

  return (
    <View style={styles.container }>
      {users.map((item, i) => (
        <View key={i} style={styles.row }>
          <View>
            <Text style={styles.cell}>{item.nome}</Text>
            <Text style={styles.cell}>{item.email}</Text>
            {item.fone && <Text style={styles.cell}>{item.fone}</Text>}
            <Text style={styles.cell}>{item.data_nasc}</Text>
          </View>
          <TouchableOpacity onPress={() => handleEdit(item)}>
            <MaterialIcons name="edit" size={24} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item.id)}>
            <MaterialIcons name="delete" size={24} color="red" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};


export default Grid;

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "20px",

  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#76044F',
  },
  cell: {
    flex: 1,
    padding: 10,
  },




});



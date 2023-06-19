import React from "react";
import { StyleSheet, Text, View} from 'react-native';


const Grid=({user})=>{
    return(<View style={styles.table}>
    <View style={styles.row}>
      <Text style={styles.cell}>Nome</Text>
      <Text style={styles.cell}>Email</Text>
      <Text style={styles.cell}>Telefone</Text>
      <Text style={styles.cell}>Data</Text>
      </View>
      <View style={styles.row}>
        
        {user.map((item,i)=>(
          <View style={styles.row} key={i}>
          <Text style={styles.cell}>{item.nome}</Text>
          <Text style={styles.cell}>{item.email}</Text>
          <Text style={styles.cell}>{item.telefone}</Text>


          </View>



        ))}
      </View>

      
  </View>
    );
};
const styles = StyleSheet.create({
    table: {
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 20,
    },
    row: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: 'black',
    },
    cell: {
      flex: 1,
      padding: 10,
    },
  });
export default Grid;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Form from './components/forms';
import Grid from './components/Grid';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';



export default function App() {
  const[users,setUsers]=useState([])
  const[onEdit,setOnEdit]=useState(null)

  const getUsers=async()=>{
    try{
      const res=await axios.get("http://localhost:8800/");
      setUsers(res.data.sort((a,b)=>(a.nome>b.nome ? 1:-1)));

    }catch(error){
      toast.error(error);
    }
  };

  useEffect(()=>{
    getUsers();
  },[setUsers]);
  
  
  
  return (
    <View style={styles.container}>
      <Text>CRUD</Text>
      <Grid users={users}/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, unstable_batchedUpdates} from "react-native";
//import styles from './style';

const Register =()=> {

   const [list, setList] = useState([]);
   const [loading, setLoading] = useState(true);

   const url = "https://63ece03cbe929df00cb41370.mockapi.io/api/v1/user";

   useEffect(()=>{
      getListKid();
   }, [])

   const getListKid = () => {
         fetch(url, {
         method : "GET"
         }) 
         .then((response)=>response.json())
         .then((response)=>setList(response.json))
         .catch((error)=>console.error(error))
         .finally(()=> setLoading(false));
   }

   const hadleRemove = (item) => {
      fetch(url, {
         method: "DELETE"
         body : JSON.stringify({
         user_id : item.id_user
         })
      })
      
      .then((response)=>response.json())
      .then((response)=>getListKid())
      .catch((error)=>console.error(error))
      .finally(()=> setLoading(false));
   }

   return (
      <View style={styles.head}>
         <Text style={styles.title}>  Criaças Cadastradas </Text>
         <ScrollView>
         { loading ? ( <Text> Loading .... </Text>) : (
            list.map((item, index)=>(
               <View style={styles.rowBetwee} key={index}>
               <View>
                  <Text>{item.name}</Text>
                  <Text>{item.age}</Text>
                  <Text>{item.weight}</Text>
                  <Text>{item.height}</Text>
                  <Text>{item.cephalic_perimeter}</Text>
               </View>
               <View>
                  <TouchableOpacity onPress={()=>hadleRemove(item)}>
                     <Text style={styles.buttonDelete}>Deletar</Text>
                  </TouchableOpacity>
               </View>
               </View>
            ))
         )}
         </ScrollView>
      </View>
 )
}
export default Register;

const styles = StyleSheet.create({

   head: {
      backgroundColor: 'white'
   },
   title: {
      fontSize: 32,
      color: 'white',
      backgroundColor: '#4b0082',
      alignItems: 'flex-start'
   },
   buttonDelete: {
      color:"red"
   },
   rowBetwee: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 20,
      fontWeight: 'bold',
      backgroundColor: '#b0c4de',
      marginVertical: 10,
      marginHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#888"
   },

 });

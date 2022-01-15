import { StatusBar } from 'expo-status-bar';
import React,{ useEffect,useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import Axios from 'react-native-axios/lib/core/Axios';
import ListItem from './components/ListItem';

export default function App() {
  const [listing, setListing]= useState([''])

//getting data from API
  const getData = async()=>{
    await axios.get("https://data.cityofnewyork.us/resource/23z9-6uk9.json").then((res)=>{
      console.log(JSON.stringify(res.data))
      setListing(res.data)
    }).catch((e)=>{
      console.log(e)
    })
  }
  useEffect(()=>{
       getData();
  },[])
  return (
    <View style={styles.container}>

    {listing&& <ListItem data={listing}/>}
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

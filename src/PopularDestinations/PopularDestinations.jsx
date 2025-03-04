import React from 'react'
import { ScrollView, View,Text,Image } from 'react-native'
import styles from '../Header/Headerstyle'
import { UseZustand } from '../../Store/UseZustand'
import Data from './DesData'
export default function PopularDestinations() {

const DarkMode = UseZustand((state)=>state.Mode);
  return (<>
  <View style={[styles.body,{backgroundColor:DarkMode?"rgb(59, 59, 59)":"rgb(255, 255, 255)"}]}>
    <Text style={[styles.destitle,{color:DarkMode?"rgb(255, 255, 255)":"rgb(0, 0, 0)"}]}>Popular Destinations</Text>
    <ScrollView  horizontal={true} style={styles.scrollbody}>
    {Data.PlaceAndImg.map((d,i)=>(
      <View key={i}>
      <Image source={d.img} style={styles.images}/>
      <Text style={[styles.placename,{color:DarkMode?"rgb(255, 255, 255)":"rgb(0, 0, 0)"}]}>{d.name}</Text>
    </View>
      ))
    }
    </ScrollView>
  </View>
  

</>)}

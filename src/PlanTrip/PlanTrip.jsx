import React, { useState,useEffect } from 'react'
import { ActivityIndicator, Button, Modal, Pressable, Text, View,Alert, Image } from 'react-native'
import styles from '../Header/Headerstyle'
import { UseZustand } from '../../Store/UseZustand';
import { TickImage } from '../../assets/TickImage';

// import { Image } from 'react-native';

export default function PlanTrip() {
  const [clicked,Setclicked] = useState(false);
  const [ModalOpen,SetModalOpen] = useState(false);
  const SelectedCount = UseZustand((state)=>state.SelectedCount);
  const PlaceName = UseZustand((state)=>state.Place);
  const Date = UseZustand((state)=>state.Date)
  const SetDate = UseZustand((state)=>state.SetDate);
  const SetPlaceName = UseZustand((state)=>state.SetPlace)
  const ResetCount = UseZustand((state)=>state.ResetArr);
  const DarkMode = UseZustand((state)=>state.Mode);
  const HandlePress = () =>{
    Setclicked(p=>!p);
    setTimeout(() => {
    Setclicked(p=>!p);
    if(SelectedCount && PlaceName && Date){
      SetModalOpen(true);
      
    }
    else{
      Alert.alert("Please Fill all the Fields")
    }
    }, 2000);
  }

  const CloseModal =()=>{
    SetDate("");
    SetPlaceName("");
    ResetCount();
    SetModalOpen(!ModalOpen);
  }
  return (
  <>
<View style={styles.btn}>
    <Pressable 
    android_ripple={{color:'rgb(189, 143, 254)',borderless:true}}
    onPress={HandlePress}
    >
        <Text style={styles.buttontext}>{clicked?<ActivityIndicator 
        size={'large'} 
        style={styles.loader}
        color={'rgb(255,255,255)'}/> 
        :'Plan My Trip'}</Text>
    </Pressable>
</View>


    <Text style={[styles.footer,{color:DarkMode?"rgb(255, 255, 255)":"rgb(0, 0, 0)"}]}>Your dream vacation is just a click away </Text>
    <Modal 
    animationType='slide'
    transparent={true}
    visible={ModalOpen}
    onRequestClose={()=>SetModalOpen(!ModalOpen)}>
      
      <View style={styles.modaloutterbody}>

        <View style={styles.modelbody}>
          <TickImage />
          <Text style={[styles.h2Text,{color:'rgb(0, 0, 0)'}]}>Trip Saved Successfully!</Text>
          <Text style={styles.bodytext}>Your trip to {PlaceName} on {Date}</Text>
          <Text style={styles.bodytext}>has been saved. with {SelectedCount} planned </Text>
          <Text style={styles.bodytext}>activities</Text>
          <View style={styles.buttonholder}>

          <Button title='Continue'
            color={'rgb(104, 0, 255)'}
            style={styles.button}
            onPress={()=>{SetModalOpen(!ModalOpen);CloseModal()}}/>
            </View>
        </View>
      </View>
    </Modal>
    </>
  )
}

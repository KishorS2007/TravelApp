import React, { useEffect, useState } from 'react'
import { TextInput, View,Text,KeyboardAvoidingView } from 'react-native'
import styles from '../Header/Headerstyle'
import { UseZustand } from '../../Store/UseZustand';
export default function Traveldetails() {
    const PlaceName = UseZustand((state)=>state.Place);
    const SetPlaceName = UseZustand((state)=>state.SetPlace)
    const Date = UseZustand((state)=>state.Date)
    const SetDate = UseZustand((state)=>state.SetDate);
    const DarkMode = UseZustand((state)=>state.Mode);
    const pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    const [Iscorrect,Setiscorrect] = useState(true)
  return (
    <View style={[styles.traveldetailsbody,{backgroundColor:DarkMode?"rgb(59, 59, 59)":"rgb(255, 255, 255)"}]}>
        <Text style={[styles.destitle,{color:DarkMode?"rgb(255, 255, 255)":"rgb(0, 0, 0)"}]}>Travel Details</Text>

        {/* input-1 */}
        <KeyboardAvoidingView behavior='padding'>
        <View style={[styles.inputholder,{backgroundColor:DarkMode?"rgb(93, 93, 93)":"rgb(255, 255, 255)"}]}>
        <Text style={styles.label}>{"Destination"}</Text>
        <TextInput 
         style={[styles.input1,{color:DarkMode?"rgb(255, 255, 255)":"rgb(0, 0, 0)"}]}
         placeholder='Where do you want to go?'
         placeholderTextColor={'rgb(160, 159, 159)'}
         value={PlaceName}
         onChangeText={(text)=>{SetPlaceName(text)}}
         ></TextInput>
        </View>

        {/* input-2 */}
        <View style={[styles.inputholder,{backgroundColor:DarkMode?"rgb(93, 93, 93)":"rgb(255, 255, 255)",
          borderColor:Date.length>0 && !Iscorrect?"red":"rgb(206, 206, 206)"}]}>
        <Text  style={styles.label}>Travel Date</Text>
        <TextInput style={[styles.input1,{color:DarkMode?"rgb(255, 255, 255)":"rgb(0, 0, 0)"
        }]} 
        placeholder='MM/DD/YYYY'
        placeholderTextColor={'rgb(160, 159, 159)'}
        value={Date}
        onChangeText={(text)=>{SetDate(text);
          const isValid = text.length > 0 ? pattern.test(text) : true;
          Setiscorrect(isValid)}}
        ></TextInput>
        </View>
        </KeyboardAvoidingView>


        </View>
  )
}

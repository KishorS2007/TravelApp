import React, { useState } from 'react'
import { View,Text, SectionList, Pressable, TouchableOpacity } from 'react-native'
import styles from '../Header/Headerstyle'
import { UseZustand } from '../../Store/UseZustand'
import Data from './TripData.json'
export default function TripTypes() {
  const DarkMode = UseZustand((state)=>state.Mode);
  return (
      <View style={[styles.body,{height:'auto',backgroundColor:DarkMode?"rgb(59, 59, 59)":"rgb(255, 255, 255)"}]}>
      <Text style={[styles.destitle,{marginBottom:15,marginLeft:0,color:DarkMode?"rgb(255, 255, 255)":"rgb(0, 0, 0)"}]}>Explore Trip Types</Text>
      <SectionList 
      sections={Data.Trip}
      keyExtractor={(item,index)=>item+index}
      renderItem={({item})=>(
/*         <Pressable unstable_pressDelay={2}
        android_ripple={{color:'rgb(212, 212, 212)',borderless:false}} 
         style={({pressed})=>[{
          backgroundColor:pressed? 'white' : 'transparent'
        }]} 
        onPress={()=>setpressed(!pressed)}
 </Pressable>
 */
        
        <TouchableOpacity >
          <View>
            <Text style={[styles.pressabletext,{color:DarkMode?"rgb(255, 255, 255)":"rgb(0, 0, 0)"}]}>{item}</Text>
          </View>
        </TouchableOpacity>
      )}
      renderSectionHeader={({section})=>(<Text style={styles.pressableheader}>{section.Title}</Text>)}
      SectionSeparatorComponent={()=>(<View style={{height:20}}></View>)}
      ItemSeparatorComponent={()=>(<View style={{height:10}}></View>)}
      />
      </View>
  )
}


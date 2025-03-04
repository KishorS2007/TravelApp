import { Switch,View,Text} from 'react-native'
import styles from '../Header/Headerstyle'
import { useEffect, useState } from 'react'
import { UseZustand } from '../../Store/UseZustand'

export default function Mode() {
    const on = UseZustand((state)=>state.Mode);
    const Seton = UseZustand((state)=>state.SetMode)

  return (<>

<View style={styles.mode}>
    <Text style={[styles.modetext,{color:on?"rgb(255, 255, 255)":"rgb(0, 0, 0)"}]}>Dark Mode </Text>
    <Switch trackColor={{false:'rgb(207, 204, 204)',true:'rgb(129, 27, 255)'}}
    onValueChange={()=>{Seton(!on);}}
    value={on}
    thumbColor={on?'rgb(79, 18, 154)':'rgb(255, 255, 255)'}/>
    
</View>

</>)};

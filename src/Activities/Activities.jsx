import React, { useState,useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../Header/Headerstyle'
import { UseZustand } from '../../Store/UseZustand';
import Data from './ActivityData.json'

function MyButton(props){
    const DarkMode = UseZustand((state)=>state.Mode);
    let arr = UseZustand((state)=>state.arr);
    const SelectedCount = UseZustand((state)=>state.SelectedCount);
    const SetSelectedCount = UseZustand((state)=>state.SetSelectedCount)    
    const [IsPush,SetIspush] = useState(false);
    return(
        <>
            <TouchableOpacity 
            style={[styles.tbutton,{backgroundColor: arr[props.id] 
                ? 'rgb(85, 54, 189)' 
                : DarkMode 
                ? 'rgb(152, 152, 152)' 
                : 'rgb(234, 234, 234)',}]}
            onPress={()=>{SetIspush(!IsPush);   
                arr[props.id]=!IsPush;
                // console.log(arr);
                SetSelectedCount(arr.filter(Boolean).length);
            }}>
                <View style={styles.tview}>
                    <Text style={[styles.btntext,{
                        color:DarkMode?'rgb(255, 255, 255)':arr[props.id]?'rgb(255, 255, 255)':'rgb(0, 0, 0)',
                    }]}>{props.name}</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}
export default function Activities() {
    const DarkMode = UseZustand((state)=>state.Mode);
    const dataset = Data.Places.map((d,i)=>(
        <MyButton name={d.name} key={i} id={i}/>
    ))



  return (
    <View style={[styles.traveldetailsbody,{height:220,backgroundColor:DarkMode?"rgb(59, 59, 59)":"rgb(255, 255, 255)"}]}>
        <Text style={[styles.destitle,{color:DarkMode?'rgb(255, 255, 255)':'rgb(0, 0, 0)',}]}>Suggested Activities</Text>
        <View style={styles.btnbody}>
        {dataset}
           {/*  <FlatList 
            data={data}
            renderItem={({item})=>(<MyButton name={item}/>)}
            keyExtractor={(_item,key)=>key.toString()}
            // ListHeaderComponent={()=>(<Text style={styles.destitle}>Suggested Activities</Text>)}  // this is heading
            numColumns={2}    
            scrollEnabled={false}
            /> */}
        </View> 
    </View>
  )
}

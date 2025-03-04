import React from 'react'
import styles from './Headerstyle'
import { View,Text, ImageBackground } from 'react-native'
export default function Head() {
  const bg = {uri:'https://assets.thehansindia.com/h-upload/2019/12/27/248830-worldtour.jpg'} 

  return (
    <ImageBackground style={styles.bgimage} source={bg} resizeMode='cover' edges={['left','right']}>
    <View style={styles.header}>
        <Text style={styles.h4}>Adventure awaits you</Text>
        <Text style={styles.h2}>Discover Your Dream Trip</Text>
    </View>
    </ImageBackground>
  )
}

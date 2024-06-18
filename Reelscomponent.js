import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import {SwiperFlatList} from 'react-native-swiper-flatlist'
import { videoData } from './Database'
import SingleReel from './Suspeciousfol/SingleReel'
import { useSafeAreaFrame } from 'react-native-safe-area-context'
const Reelscomponent = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const handleChangeIndexValue = ({index})=>{
        setCurrentIndex(index);
    }
 
 
    return (
    <View>
      <SwiperFlatList 
      data = {videoData}
      vertical = {true}
      renderItem={(item, index)=>(
        <SingleReel item = {item} index = {index} currentIndex = {currentIndex}/>
    )}
    keyExtractor={(item, index)=> index}/>
    </View>
  )
}

export default Reelscomponent

const styles = StyleSheet.create({})
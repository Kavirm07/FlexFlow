import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useState} from 'react'
import Video from 'react-native-video';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Abadvance = () => {

    const [videos, setVideos] = useState([
    
       
        require('../Video/abadvance.mp4'),
       
    
      ]);
  return (
    <View>


      
      <FlatList
        horizontal={true}
        repeat={true}
        showsHorizontalScrollIndicator={false}
        data={videos}
        renderItem={({ item, index }) => (
          <Video
            source={item}
            key={index}
            style={{
              width: wp(100),
              height: hp(90),
            //   borderWidth: 3,
              borderColor: 'gray',
              resizeMode: 'repeat',
              marginBottom:20,
              backgroundColor: '#f4f0ec',
             


            }}
            controls={true}
          />
        )}
      />

    </View>
  )
}

export default Abadvance

const styles = StyleSheet.create({})
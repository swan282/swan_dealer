import { View, Text, ScrollView, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';


export default function Items({index, cat, image,btnClass, textClass, onSelect}) {
  return(
    <View key={index} className="flex justify-center items-center mr-5">
      <TouchableOpacity onPress={onSelect} className={"p-1 rounded-full shadow" + btnClass}>
        <Image style={{width:30, height:30}} className="mx-2" source={image} />
      </TouchableOpacity>
      <Text className={"text-sm ml-1 mr-1"+textClass}>{cat}</Text>
    </View>
  )
}
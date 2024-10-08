import { View, Text ,TouchableOpacity } from 'react-native'
import React from 'react'

export default function FeaturedRow({data, index}) {
  return (
    <View key={index} className="flex justify-center items-center mr-5">
      <TouchableOpacity className="p-1 rounded-full shadow " style={{backgroundColor:"#522258"}}>
        <Text className="text-sm text-center mx-4 text-white">{data.name + ": " + data.count}</Text>
      </TouchableOpacity>
    </View>
  )
}
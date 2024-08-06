import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React, {useState} from 'react'
import * as Icon from "react-native-feather";
import { StatusBar } from 'expo-status-bar';
import { themeColors } from '../theme';
import Items from '../components/Items/Items';
import { useNavigation } from '@react-navigation/native';
import { category, products } from '../constances';
import Products from '../components/Items/Products';

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleSelect = (catId) => {
    setSelectedCategory(catId);
  }
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content"/>
      <View className="flex-row item-center px-6 pt-11 pb-6 mt-5">
        <View className="flex-row flex-1 item-center p-4 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Search" className="ml-2 flex-1" />
          <View className="flex-row item-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
              <Icon.MapPin height="25" width="25" stroke="gray" />
              <Text className="text-gray-600 mt-1">Silchar</Text>
          </View>
        </View>
        <View className="p-5 rounded-full w-5 h-3 mt-3 ml-2 flex items-center justify-center border border-gray-300">
          <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="gray" />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:20}}>
        <View className="mt-1 ml-2">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible" contentContainerStyle={{paddingHorizontal: 15}}>
            {
              category.map((cat, index) => {
                let isActive = cat.id === selectedCategory;
                let btnClass = isActive ? ' bg-gray-200' : '';
                let textClass = isActive ? ' font-semibold text-gray-800' : ' text-gray-500';
                return(
                  <Items key={index} index={cat.id} cat={cat.ca_type} image={cat.image} btnClass={btnClass} textClass={textClass} onSelect={() => handleSelect(cat.id)}  /> 
                )
              })
            }
          </ScrollView>
        </View>
        <View className='mt-5'>
          <Products prodID={selectedCategory} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
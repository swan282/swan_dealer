import { StyleSheet, View, Text, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SIcon from "../assets/stat_2.png";
import userIcon from "../assets/user_1.png";

import { tw } from 'nativewind';
import * as Icon from "react-native-feather";
import FeaturedRow from '../components/featured/FeaturedRow';
import { details, LatestProduct } from '../constants/sales';
import Card from '../components/Card/Card';


export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white flex-1 mt-4">
      <StatusBar barStyle="dark-content"/>
        <Icon.User style={{marginTop: 60, position:'absolute', marginLeft:40}} width="30" height="30" stroke="black" />
        <Text className="text-lg font-bold text-left mt-14 pt-8 ml-10">Welcome</Text>
        <Text className="text-3xl font-bold text-left ml-10">Bishal Deb</Text>
        <Text className="text-sm font-normal text-left ml-10">Your Complete Business Details Done from Swann</Text>
        
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:2}} className="mt-1 ml-2 overflow-visible" >
          <View className="mt-4 ml-5">
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible" contentContainerStyle={{paddingHorizontal: 15}}>
                {
                  details.map((data, index) =>{
                    return (
                      <FeaturedRow key={index} data={data}/>
                    )
                  })
                }
            </ScrollView>
            <ScrollView vertical className="">
                {
                  LatestProduct.map((data, index) => {
                    return (
                      <Card key={index} data={data}/>
                    )
                  })
                }
            </ScrollView>
          </View>
        </ScrollView>
        
      {/* <View className="flex-row item-center mb-14">
          <Image style={{width:100, height:100}} className="mb-3" source={SIcon}/>
      </View> */}
    </SafeAreaView>
  )
}
import React, {useState} from 'react'
import SIcon from "../assets/sign_up_5.png";
import { StatusBar } from 'expo-status-bar';

import {View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignIn() {
  const navigator = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(null);

  const handleLogIn = async () => {
    try {
      setLoading(true);
      const data = { d_email: email, d_password: password}
      const res = await axios.post('http://192.168.1.7:8800/api/dist/reg/dealer-login', data);
      if(res.data.status){
        await AsyncStorage.setItem('userToken', res.data.token)
        navigator.navigate('Dashboard')
      }
    } catch (error) {
      alert('Sign In Error TC 1');
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView className="bg-white flex-1">
       <StatusBar barStyle="dark-content"/>
        <View className="flex-row item-center px-6 pt-3 mt-5">
          <Image style={{width:340, height:250}} className="mx-9 mt-3" source={SIcon}/>
        </View>
        <Text className="text-3xl ml-9 font-bold text-left mr-1">Log In</Text>
        <Text className="text-left mt-3 ml-9 mr-1">If You have already Joined Us.</Text>
        <Text className="text-left ml-9 mr-1">Then you can Login using your email and password</Text>
        <View className="w-full">
          <TextInput
            placeholder="Enter your Email Address"
            placeholderTextColor="#9CA3AF"
            className="p-4 ml-6 mt-9 mb-5 border border-gray-300 rounded-md"
            style={{ marginRight: 25 }}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Enter your Password"
            placeholderTextColor="#9CA3AF"
            className="p-4 ml-6 border border-gray-300 rounded-md"
            style={{ marginRight: 25 }}
            keyboardType="password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity 
            className="p-4 ml-6 mr-6 mt-2 rounded-md" 
            style={{ backgroundColor: '#522258' }}
            onPress={handleLogIn}
          >
            {
              loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text className="text-white text-center text-lg">Log In</Text>
              )
            }
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}
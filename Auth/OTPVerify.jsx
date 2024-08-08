import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import axios from "axios";
import SIcon from "../assets/otp_2.png";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, TouchableOpacity,KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';

export default function OTPVerify({ route }) {
  const { email } = route.params;
  const navigation = useNavigation();
  const [otp, setOtp] = useState();
  const [loading, setLoading] = useState(false);

  const handleOTP = async () =>{
    setLoading(true);
    try {
      const response = await axios.get('http://192.168.1.4:8800/api/dist/reg/otp-verify', {
        params: {
            otp: otp,
            email: email
        }
      }); 

      if(response.data.status){
          navigation.navigate('Register', {email});
      }else{
          console.log(response.data);   
      }
    } catch (error) {
        console.log('OTP test',error.message);
    }finally{
      setLoading(false);
    }
  }
  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar barStyle="dark-content"/>
      <View className="flex-row item-center mt-5 mr-9">
        <Image style={{width:390, height:270}} className="mt-8 mx-auto ml-4" source={SIcon} />
      </View>

      <Text className="text-3xl mt-10 font-bold text-center mr-1">Enter O.T.P</Text>
      <Text className="mt-2 text-center mr-1">We have Sent an OTP To your email address</Text>
      <View className="w-full">
        <TextInput 
        placeholder='Enter Your 4 Digit OTP'
        placeholderTextColor="#9CA3AF"
        className="p-4 ml-6 mt-9 mb-5 border border-gray-300 rounded-md"
        style={{ marginRight: 25 }}
        value={otp}
        onChangeText={setOtp}
        keyboardType="number"
        />
        <TouchableOpacity 
            className="p-4 ml-6 mr-6 rounded-md"
            onPress={handleOTP}
            style={{ backgroundColor: '#522258' }}
          >
          {loading ? (
            <ActivityIndicator color="#fff" /> // Show loading indicator
          ) : (
            <Text className="text-white text-center text-lg">Verify OTP</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text className="mt-5 mb-11 text-sm text-center">
            Joined Us Before?{' '}
            <Text className="text-blue-500">Log In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
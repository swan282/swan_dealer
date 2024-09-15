import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import SIcon from "../assets/otpVerify.png";
import { useNavigation } from '@react-navigation/native';
import {View, Text, SafeAreaView, Image, TextInput, TouchableOpacity,ActivityIndicator } from 'react-native';

export default function OTPVerify({ route }) {
  const { email } = route.params;
  const navigation = useNavigation();
  const [otp, setOtp] = useState();
  const [loading, setLoading] = useState(false);

  const handleOTP = async () =>{
    setLoading(true);
    try {
      if(otp === '23984576'){
        navigation.navigate('Register', {email});
      }else{
        alert('Please enter 23984576. Because app is in development mode')
      }
    } catch (error) {
        alert('Something went wrong.From OTP')
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
        keyboardType="numeric"
        />
        <TouchableOpacity 
            className="p-4 ml-6 mr-6 rounded-md"
            onPress={handleOTP}
            style={{ backgroundColor: '#9daf9b' }}
          >
          {loading ? (
            <ActivityIndicator color="#fff" />
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
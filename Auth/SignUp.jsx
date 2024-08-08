import axios from "axios";
import SIcon from "../assets/tree.png";
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, TouchableOpacity,KeyboardAvoidingView, Platform,ActivityIndicator } from 'react-native';

const SignUp = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleEmail = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://192.168.1.4:8800/api/dist/reg/dealer-send-otp', {email})
            if(response.data.status){
                navigation.navigate('OTP', {email});
            }else{
                console.log(response.data);   
            }
        } catch (error) {
            console.log('OTP test',error.message);
        } finally {
            setLoading(false)
        }
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <SafeAreaView className="bg-white flex-1">
                <StatusBar barStyle="dark-content"/>
                <View className="flex-row item-center px-6 pt-11 pb-6 mt-6 ml-7">
                    <Image style={{width:340, height:250}} className="mx-2" source={SIcon}/>
                </View>
                {/* <Text className="text-3xl mt-2 mb-14 text-center font-bold mr-1">Welcome To Swann</Text> */}
                <Text className="text-3xl ml-9 font-bold text-left mr-1">Sign Up as Dealer</Text>
                <Text className="text-left mt-3 ml-9 mr-1">Signing Up as a Distributor allows you to sell and </Text>
                <Text className="text-left ml-9 mr-1">get more offers on your products and gain more customers </Text>

                {/* sign in process start */}
                <View className="w-full">
                    <TextInput
                        placeholder="Enter your Email Address"
                        placeholderTextColor="#9CA3AF"
                        className="p-4 ml-6 mt-7 mb-2 border border-gray-300 rounded-md"
                        style={{ marginRight: 25 }}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                     <TouchableOpacity
                        className="p-4 ml-6 mr-6 rounded-md"
                        style={{ backgroundColor: '#522258' }}
                        onPress={handleEmail}
                        disabled={loading} // Disable button while loading
                    >
                        {loading ? (
                            <ActivityIndicator color="#fff" /> // Show loading indicator
                        ) : (
                            <Text className="text-white text-center text-lg">Get OTP</Text>
                        )}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Text className="mt-5 mb-11 text-sm text-center">Joined Us Before? LogIn</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({})

export default SignUp;

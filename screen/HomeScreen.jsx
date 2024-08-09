import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import avatar from "../assets/avatar.jpeg";
import * as Icon from "react-native-feather";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';


export default function HomeScreen() {
  const [user, setUser] = useState(null);
  const fetchUser = async () => {
    const token = await AsyncStorage.getItem('userToken');
    try {
      const response = await axios.get('http://192.168.1.4:8800/api/dist/login-user', {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      setUser(response.data.data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };
  
  useEffect(() => {
    fetchUser();
  }, []);
  
  return (
    <View className="">
      <StatusBar barStyle="dark-content"/>
        <View style={styles.profileContainer}>
          <View style={styles.profileContent}>
            <Image
              source={avatar}
              style={styles.avatar}
            />
            <View style={styles.textContainer}>
              <Text style={styles.userName}>Hello, {user?.d_name}</Text>
              <Text style={styles.userEmail}>{user?.d_email}</Text>
            </View>
          </View>
        </View>
        <View style={styles.textContainer2}>
          <Text className="mt-3" style={styles.userName}>Business Name: {user?.d_s_name}</Text>
          <Text className="" style={styles.userEmail}>Location: {user?.d_location}, Pin: {user?.d_zip}</Text>
        </View>
        <View style={styles.search} className="flex-row">
          <Icon.Search width="25" height="25" className="ml-2" stroke="black" />
          <TextInput className="ml-5">Search Your Products</TextInput>
        </View>
        <View className="flex-row">
          <View style={styles.statContainer}>

          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  shopRow: {
    flexDirection: 'row',   // Align items in a row
    alignItems: 'center',   // Center items vertically
    marginTop: -40,          // Adjust spacing as needed
  },
  shopName: {
    marginTop: -65,
    marginLeft: 60,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffff',
    textAlign: 'center',
  },
  search: {
    padding: 10,
    marginTop: 284,
    marginLeft: 29,
    marginRight: 35,
    marginHorizontal: 6,
    borderRadius: 15,
    backgroundColor: '#f5f5ed',
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // X and Y offset
    shadowOpacity: 0.25, // Shadow transparency
    shadowRadius: 3.84, // Blur radius
    elevation: 5, // Required for Android shadow
    width: 370,
    position: "absolute"
  },
  profileContainer: {
    borderRadius: 40,
    backgroundColor: '#9daf9b',
    height: 300,
    width: 430
  },
  statContainer: {
    marginTop: 80,
    marginLeft: 30,
    borderRadius: 40,
    backgroundColor: '#E0E5B6',
    opacity: 0.5,
    height: 200,
    width: 370
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 60, // Adjusted for circle
    borderColor: 'black',
    borderWidth: 2,
    marginLeft: 50,
  },
  textContainer: {
    marginLeft: 20,
  },
  textContainer2: {
    marginLeft: 40,
    marginTop: -90,
  },
  userName: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  userEmail: {
    marginLeft: 10,
    fontSize: 16,
    color: 'white', // Color for email
    marginTop: 4,
  },
});
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import avatar from "../assets/avatar.jpeg";
import * as Icon from "react-native-feather";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const [user, setUser] = useState();

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

      {/* New Section for Circles with Icons */}
      <View style={styles.circlesContainer}>
        <View style={styles.circleItem}>
          <View style={styles.circle}>
            {/* <Icon.PieChart stroke="black" width={20} height={20} /> */}
            <Text>2000</Text>
          </View>
          <Text style={styles.circleText}>Total Sales</Text>
        </View>
        
        <View style={styles.circleItem}>
          <View style={styles.circle}>
            {/* <Icon.ShoppingBag stroke="black" width={20} height={20} /> */}
            <Text>20</Text>
          </View>
          <Text style={styles.circleText}>Total Orders</Text>
        </View>
        
        <View style={styles.circleItem}>
          <View style={styles.circle}>
            {/* <Icon.ShoppingCart stroke="black" width={20} height={20} /> */}
            <Text>20</Text>
          </View>
          <Text style={styles.circleText}>Pending</Text>
        </View>
        
        <View style={styles.circleItem}>
          <View style={styles.circle}>
            <Text>30</Text>
          </View>
          <Text style={styles.circleText}>All Products</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View className="">
        <Text style={styles.topList}>Top Rated Products</Text>
      </View>
      <View style={styles.buttomContainer}>
        <Text style={styles.productName}>Product Name: Hair Colour</Text>
        <Text style={styles.productPrice}>Price: 200</Text>
        <Text style={styles.productPrice}>Rating: 5</Text>
        <Text style={styles.productPrice}>Qty: 20</Text>
        <Text style={styles.productPrice}>Brand: Lorial Paris</Text>
        <Text style={styles.comments}>Comments</Text>
        <Text style={styles.productPrice}>1. Nice Product</Text>
        <Text style={styles.productPrice}>2. Good Product</Text>
        <Text style={styles.productPrice}>3. Quality Product From Shop</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  comments: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    marginBottom: 20
  },
  topList:{
    marginLeft: 40,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  productName: {
    marginTop: 15,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  productPrice: {
    marginLeft: 20,
    fontSize: 15,
    // fontWeight: 'bold',
    color: 'white',
  },
  profileContainer: {
    borderRadius: 40,
    backgroundColor: '#9daf9b',
    height: 300,
    width: 430
  },
  buttomContainer: {
    marginLeft: 30,
    marginTop: 15,
    borderRadius: 16,
    backgroundColor: '#9daf9b',
    height: 240,
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
    marginTop: -50,
  },
  textContainer: {
    marginLeft: 20,
    marginTop: -50,
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
    color: 'white',
    marginTop: 4,
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
  circlesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 90, 
    paddingHorizontal: 20,
  },
  circleItem: {
    alignItems: 'center', // Center icon and text horizontally
  },
  circle: {
    width: 55,
    height: 55,
    borderRadius: 27,
    borderColor: '#9daf9b',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  circleText: {
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

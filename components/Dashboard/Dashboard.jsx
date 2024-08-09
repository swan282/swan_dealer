import React from 'react'
import { View, Text,StyleSheet, TouchableOpacity, Image  } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../screen/HomeScreen';
import UploadProduct from '../../screen/UploadProduct';
import Profile from '../../screen/Profile';
import * as Icon from "react-native-feather";

const Tab = createBottomTabNavigator();

const CustomTabBtn = ({children, onPress}) => (
  <TouchableOpacity style={[style.customButton, style.shadow]} onPress={onPress}>
    <View style={style.buttonContent}>
      {children}
    </View>
  </TouchableOpacity>
);

const active_style = {backgroundColor: "#ffff", width: 55, height: 55, borderRadius: 60, marginRight: 10, justifyContent: 'center', alignItems: 'center'};

export default function Dashboard() {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          // bottom: 20,
          // left: 100,
          // right: 100,
          // elevation: 20, // For Android
          backgroundColor: '#9daf9b',
          // borderRadius: 60,
          height: 110,
          shadowColor: '#522258', // For iOS
          shadowOffset: { width: 10, height: 5 }, // For iOS
          // shadowOpacity: 1, // For iOS
          // shadowRadius: 6.27, // For iOS
        },
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} options={{
        tabBarIcon: ({focused}) => (
          <View style={focused ? active_style : ""} className="mt-5">
            <Icon.Home height="35" width="35" stroke={focused? "#522258" : "white" } />
          </View>
        )
      }}/>
      <Tab.Screen name='UploadProd' component={UploadProduct} options={{
        tabBarIcon: ({focused}) => (
          <View style={focused ? active_style : ""} className="mt-5">
            {/* <Icon.PlusCircle height="35" width="35" style={{marginTop: 4.5, marginLeft: 4.5}}  stroke={focused ? 'white' : '#522258'} /> */}
            <Icon.PlusCircle height="35" width="35" stroke={focused? "#522258" : "white" } />
          </View>
        ),
      }} />
      <Tab.Screen name='Profile' component={Profile} options={{
        tabBarIcon: ({focused}) => (
          <View style={focused ? active_style : ""} className="mt-5">
            <Icon.User height="34" width="34" stroke={focused? "#522258" : "white" } />
          </View>
        )
      }}/>
    </Tab.Navigator>
  )
}

const style = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#7F5D',
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 1,
    shadowRadius: 3.5,
    elevation: 5
  },
  customButton: {
    top: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#8C3061',
  },
  shadow: {
    shadowColor: '#fffff', // Shadow color for iOS
    shadowOffset: { width: 0, height: 10 }, // Shadow offset for iOS
    shadowOpacity: 0.9, // Shadow opacity for iOS
    shadowRadius: 10, // Shadow radius for iOS
    elevation: 10, // Shadow elevation for Android
  },
})
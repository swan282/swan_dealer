import { StyleSheet, View, Text, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SIcon from "../assets/stat_2.png";
import userIcon from "../assets/user_1.png";
import avatar from "../assets/avatar.jpeg";
import { tw } from 'nativewind';
import * as Icon from "react-native-feather";
import FeaturedRow from '../components/featured/FeaturedRow';
import { details, LatestProduct } from '../constants/sales';
import Card from '../components/Card/Card';


export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white flex-1 mt-4">
      <StatusBar barStyle="dark-content"/>
        {/* <Icon.User style={{marginTop: 60, position:'absolute', marginLeft:40}} width="30" height="30" stroke="black" />
        <Text className="text-lg font-bold text-left mt-14 pt-8 ml-10">Welcome</Text>
        <Text className="text-3xl font-bold text-left ml-10">Bishal Deb</Text>
        <Text className="text-sm font-normal text-left ml-10">Your Complete Business Details Done from Swann</Text> */}
        <View style={styles.profileContainer}>
          <View style={styles.profileContent}>
            <Image
              source={avatar}
              style={styles.avatar}
            />
            <View style={styles.textContainer}>
              <Text style={styles.userName}>John Doe</Text>
              <Text style={styles.userEmail}>john.doe@example.com</Text>
            </View>
          </View>
        </View>
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 80,
    marginLeft: 40,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 75
  },
  profileContainer: {
    padding: 10,
    marginLeft: 15,
    marginRight: 35,
    marginHorizontal: 6,
    marginTop: 50,
    borderRadius: 20,
    // backgroundColor: '#f0f0f0',
    height: 140, // Increased height to accommodate email
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30, // Adjusted for circle
    borderColor: 'black',
    borderWidth: 2,
    marginLeft: 20,
  },
  textContainer: {
    marginLeft: 20,
  },
  userName: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  userEmail: {
    marginLeft: 10,
    fontSize: 16,
    color: 'gray', // Color for email
    marginTop: 4,
  },
});
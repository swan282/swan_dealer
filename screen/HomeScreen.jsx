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
    <View className="">
      <StatusBar barStyle="dark-content"/>
        <View style={styles.profileContainer}>
          <View style={styles.profileContent}>
            <Image
              source={avatar}
              style={styles.avatar}
            />
            <View style={styles.textContainer}>
              <Text style={styles.userName}>Hello, John Doe</Text>
              <Text style={styles.userEmail}>john.doe@example.com</Text>
            </View>
          </View>
        </View>
        <View style={styles.textContainer2}>
              <Text className="mt-3" style={styles.userName}>My Dealer Shop</Text>
              <Text className="" style={styles.userEmail}>Udharband, Hospital Road, Pin: 788030</Text>
        </View>
        <View style={styles.search} className="flex-row">
          <Icon.Search width="25" height="25" className="ml-2" stroke="black" />
          <TextInput className="ml-5">Search Your Products</TextInput>
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
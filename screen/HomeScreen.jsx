import { StatusBar } from 'expo-status-bar';
import avatar from "../assets/avatar.jpeg";
import * as Icon from "react-native-feather";
import { StyleSheet, View, Text,Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigator = useNavigation();
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
            <Text style={styles.userName}>Hello, Swan Developer</Text>
            <Text style={styles.userEmail}>swan.dev@theswann.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.textContainer2}>
        <Text className="mt-3" style={styles.userName}>Business Name: Bishal Deb</Text>
        <Text className="" style={styles.userEmail}>Location: Udharband, Pin:788030</Text>
      </View>
      <TouchableOpacity style={styles.search} className="flex-row" onPress={() =>  navigator.navigate('Upload')}>
        <Icon.Upload width="20" height="20" className="ml-20" stroke="black" />
        <TextInput className="ml-2 mx-uto">Upload A New Product</TextInput>
      </TouchableOpacity>

      {/* Circles with Icons */}
      <View style={styles.circlesContainer}>
        <TouchableOpacity style={styles.circleItem} onPress={()=> navigator.navigate('Sales')}>
          <View style={styles.circle}>
            <Text>2000</Text>
          </View>
          <Text style={styles.circleText}>Total Sales</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.circleItem} onPress={()=> navigator.navigate('Orders')}>
          <View style={styles.circle}>
            <Text>20</Text>
          </View>
          <Text style={styles.circleText}>Total Orders</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.circleItem} onPress={()=> navigator.navigate('Pending')}>
          <View style={styles.circle}>
            <Text>20</Text>
          </View>
          <Text style={styles.circleText}>Pending</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.circleItem} onPress={()=> navigator.navigate('AllProducts')}>
          <View style={styles.circle}>
            <Text>30</Text>
          </View>
          <Text style={styles.circleText}>All Products</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />
      <View className="">
        <Text style={styles.topList}>Top Rated Products</Text>
      </View>
      <View style={styles.lastContainerContainer}>
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
  lastContainerContainer: {
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
    position: "absolute",
    alignItems: "center",
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

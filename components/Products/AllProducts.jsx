import { StyleSheet, View, Text, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import avatar from "../../assets/avatar.jpeg";
import { products } from '../../constances';
import HairProd from "../../assets/hair_prod.jpg";

export default function AllProducts() {
  return (
    <ScrollView style={{marginTop: -2}}>
      <View style={styles.profileContainer}>
        <View style={styles.profileContent}>
          <Image
            source={avatar}
            style={styles.avatar}
          />
          <View style={styles.textContainer}>
            <Text style={styles.userName}>Hello, Bishal Deb</Text>
            <Text style={styles.userEmail}>swan.dev@theswann.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.textContainer2}>
        <Text className="mt-3" style={styles.userName}>Business Name: Bishal Deb</Text>
        <Text className="" style={styles.userEmail}>Location: Udharband, Pin:788030</Text>
      </View>
      <ScrollView className="mt-10 pt-3">
      <Text className="mb-2 ml-10 font-bold text-2xl">Your Products</Text>
        {
          products.map((prod, index) => {
            return (
              <ScrollView key={index} style={styles.productContainer}>
                <View className="flex-row">
                  <Text className="mt-4 ml-3">Product: {prod?.p_name}</Text>
                  <Text className="mt-4 ml-3">Brand Name: {prod?.p_brand}</Text>
                </View>
                <View className="flex-row">
                  <Text className="mt-2 ml-3">Price: {prod?.p_price}</Text>
                  <Text className="mt-2 ml-20 pl-10">Rating: {prod?.p_rating}</Text>
                </View>
                <Text className="mt-2 ml-3">Order Status: False</Text>
                <Image source={prod?.p_image} style={{width:360, marginTop: 32, height: 100, borderRadius: 7}} />
              </ScrollView>
            )
          })
        }
      </ScrollView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    productContainer: {
      marginTop: 10,
      marginBottom: 15,
      marginLeft: 30,
      borderRadius: 7,
      width:360,
      height: 220,
      backgroundColor: "#9daf9b",
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 }, // X and Y offset
      shadowOpacity: 0.25, // Shadow transparency
      shadowRadius: 3.84, // Blur radius
      elevation: 5, // Required for Android shadow
    },
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
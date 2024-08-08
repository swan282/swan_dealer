import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import * as Icon from "react-native-feather";
import avatar from "../assets/avatar.jpeg";
import General from '../components/General/General';

export default function Profile() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content"/>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Icon.ArrowLeft stroke="black" />
        </View>
        <Text style={styles.headerText}>My Account</Text>
      </View>
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
      <View>
        <View style={styles.headerContainer}>
          <Text className="font-bold text-xl ml-10 mt-5">General</Text>
        </View>
        <General/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
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
    marginLeft: 35,
    marginRight: 35,
    marginHorizontal: 6,
    marginTop: 50,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  userEmail: {
    fontSize: 16,
    color: 'gray', // Color for email
    marginTop: 4,
  },
});

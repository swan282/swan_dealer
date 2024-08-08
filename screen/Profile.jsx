import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';


export default function Profile() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar barStyle="dark-content"/>
      <View>
        <Text className="text-lg font-bold text-left mt-14 pt-8 ml-10"></Text>
      </View>
    </SafeAreaView>
  )
}
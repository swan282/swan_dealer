import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';

export default function Setting() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar barStyle="dark-content"/>
      <View>
        <Text>Upload</Text>
      </View>
    </SafeAreaView>
  )
}
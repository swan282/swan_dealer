import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

export default function UploadProduct() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar barStyle="dark-content"/>
      <View>
        <Text className="text-lg font-bold text-left mt-14 pt-8 ml-10">Upload A New Product</Text>
      </View>
    </SafeAreaView>
  )
}
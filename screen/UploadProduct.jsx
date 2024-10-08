import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import * as Icon from "react-native-feather";
import * as ImagePicker from 'expo-image-picker';
import {useState} from 'react';
import { products as initialProducts } from '../constances';

export default function UploadProduct() {
  const [products, setProducts] = useState(initialProducts);
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [brandName, setBrandName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const UploadImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      alert('Error Upload TC 1')
    }
  };

  const handleSubmit = async() => {
    const pData = {
      id: products.length + 1,
      p_name: productName,
      p_price: productPrice,
      p_brand: brandName,
      p_rating: 0,
      p_image: image,
      p_qty: quantity
    }
    setProducts([...products, pData]);
    alert('Image Upload Successful');
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar barStyle="dark-content"/>
      <View>
        <Text className="text-lg font-bold text-left mt-14 pt-8 ml-10">Upload A New Product</Text>
      </View>
      <Text className="text-lg font-bold ml-10 mb-3 mt-10">Enter Your Product Details</Text>
      <View className="flex-row mt-1 ml-4">
        <TextInput
          placeholder="Product Name"
          placeholderTextColor="#9CA3AF"
          className="p-4 ml-6 border border-gray-300 rounded-md"
          style={{ marginRight: 2, width: 200 }}
          keyboardType="text"
          autoCapitalize="none"
          value={productName}
          onChangeText={setProductName}
        />
        <TextInput
          placeholder="Product Price"
          placeholderTextColor="#9CA3AF"
          className="p-4 ml-6 border border-gray-300 rounded-md"
          style={{ marginRight: 25 }}
          keyboardType="numeric"
          autoCapitalize="none"
          value={productPrice}
          onChangeText={setProductPrice}
        />
      </View>
      
      <View className="flex-row mt-3 ml-4">
        <TextInput
          placeholder="Product Brand Name"
          placeholderTextColor="#9CA3AF"
          className="p-4 ml-6 border border-gray-300 rounded-md"
          style={{ marginRight: 2, width: 200 }}
          keyboardType="text"
          autoCapitalize="none"
          value={brandName}
          onChangeText={setBrandName}
        />
        <TextInput
          placeholder="Quantity"
          placeholderTextColor="#9CA3AF"
          className="p-4 ml-6 border border-gray-300 rounded-md"
          style={{ marginRight: 25, width: 114 }}
          keyboardType="numeric"
          autoCapitalize="none"
          value={quantity}
          onChangeText={setQuantity}
        />
      </View>
      <View className="mt-3 ml-4">
        <TextInput
          placeholder="Product Descriptions. Max 50 Characters Allowed"
          placeholderTextColor="#9CA3AF"
          className="p-4 ml-6 border border-gray-300 rounded-md"
          style={{ marginRight: 2, width: 340 }}
          keyboardType="text"
          autoCapitalize="none"
          value={description}
          onChangeText={setDescription}
        />
      </View>
      <View className="flex-row">
        <TouchableOpacity
          onPress={UploadImage}
          className="ml-10 mt-7 mb-4"
          style={{
            backgroundColor: '#9daf9b',
            width: 340,
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Icon.Upload stroke="white" style={{ marginRight: 10 }} />
          <Text style={{ color: 'white', textAlign: 'center' }}>Upload Your Product Image</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
        onPress={handleSubmit}
        className="p-4 ml-10 mr-10 rounded-md" 
        style={{ backgroundColor: '#9daf9b' }}
      >
        <Text className="text-white text-center text-lg">Upload Product</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

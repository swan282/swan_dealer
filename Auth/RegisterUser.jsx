import React, { useState } from 'react';
import SIcon from "../assets/regis.png";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';

export default function RegisterUser({route}) {
    const {email} = route.params;
    const navigation = useNavigation();
    const [userData, setUserData] = useState({
        d_name: "",
        d_email: email,
        d_phone: "",
        d_s_name: "",
        d_zip: "",
        d_password: "",
        d_location: "",
    });
    const [loading, setLoading] = useState(false);
    const handleSignUp = async () => {
        try {
            navigation.navigate('Dashboard');
        } catch (error) {
            alert('Register Issue');
        }finally {
            setLoading(false);
        }
        
    };

    const handleInputChange = (name, value) => {
        setUserData({
            ...userData,
            [name]: value
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* <StatusBar barStyle="dark-content"/> */}
            <Text style={styles.title}>Business Details</Text>
            <Text style={styles.subtitle}>These details will help us to increase your business</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="User Name"
                    placeholderTextColor="#9CA3AF"
                    style={styles.input}
                    value={userData.d_name}
                    onChangeText={(text) => handleInputChange('d_name', text)}
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder="Business Name"
                    placeholderTextColor="#9CA3AF"
                    style={styles.input}
                    value={userData.d_s_name}
                    onChangeText={(text) => handleInputChange('d_s_name', text)}
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder="Business Location"
                    placeholderTextColor="#9CA3AF"
                    style={styles.input}
                    value={userData.d_location}
                    onChangeText={(text) => handleInputChange('d_location', text)}
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder="Phone Number"
                    placeholderTextColor="#9CA3AF"
                    style={styles.input}
                    value={userData.d_phone}
                    onChangeText={(text) => handleInputChange('d_phone', text)}
                    keyboardType="numeric"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder="Zip Code"
                    placeholderTextColor="#9CA3AF"
                    style={styles.input}
                    value={userData.d_zip}
                    onChangeText={(text) => handleInputChange('d_zip', text)}
                    keyboardType="numeric"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder="Enter your Password"
                    placeholderTextColor="#9CA3AF"
                    style={styles.input}
                    value={userData.d_password}
                    onChangeText={(text) => handleInputChange('d_password', text)}
                    secureTextEntry
                    autoCapitalize="none"
                />
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleSignUp}
                >
                    {loading ? (
                        <ActivityIndicator color="#fff" /> // Show loading indicator
                    ) : (
                        <Text className="text-white text-center text-lg">Register</Text>
                    )}
                </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={SIcon}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 20,
        marginTop: 90,
        textAlign: 'center',
        marginRight: 1,
    },
    subtitle: {
        marginTop: 2,
        textAlign: 'center',
        marginRight: 1,
    },
    inputContainer: {
        width: '100%',
        marginTop: 10
    },
    input: {
        padding: 16,
        marginLeft: 24,
        marginTop: 9,
        marginBottom: 2,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        marginRight: 25,
    },
    button: {
        padding: 16,
        marginLeft: 24,
        marginRight: 24,
        marginTop: 10,
        borderRadius: 8,
        backgroundColor: '#9daf9b',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 3,
        marginTop: 65,
    },
    image: {
        width: 340,
        height: 250,
        marginHorizontal: 9,
        marginTop: 3,
    },
});

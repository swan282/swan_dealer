import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import SIcon from "../assets/regis.png";
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

export default function RegisterUser() {

    const navigation = useNavigation();
    const [userData, setUserData] = useState({
        d_name: "",
        d_email: "",
        d_s_name: "",
        d_zip: "",
        d_password: "",
        d_location: "",
        d_cnf_password: "",
    });

    const handleSignUp = () => {
        console.log(userData);
        navigation.navigate('Dashboard');
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
                    <Text style={styles.buttonText}>Register</Text>
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
        backgroundColor: '#522258',
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

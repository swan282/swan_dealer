import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import ExploreScreen from './screen/ExploreScreen';
import Profile from './screen/Profile';
import Products from './components/Items/Products';
import SignUp from './Auth/SignUp';
import { LogIn } from 'react-native-feather';
import SignIn from './Auth/SignIn';
import OTPVerify from './Auth/OTPVerify';
import RegisterUser from './Auth/RegisterUser';
import Dashboard from './components/Dashboard/Dashboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import UploadProduct from './screen/UploadProduct';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [initialRoute, setInitialRoute] =useState('SignUp')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if(token){
        setInitialRoute('Dashboard')
      }
      setLoading(false)
    }
    checkToken()
  }, [])

  if(loading){
    return null;
  }

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }} initialRouteName={initialRoute}>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="OTP" component={OTPVerify} />
            <Stack.Screen name="Register" component={RegisterUser} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Upload" component={UploadProduct} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
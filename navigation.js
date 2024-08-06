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
const Stack = createNativeStackNavigator();

export default function Navigation() {
  const token = "testTokenJW";
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name={token === "testTokenJWT" ? "Home" : "SignUp"} component={token == "testTokenJWT" ? HomeScreen : SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="OTP" component={OTPVerify} />
            <Stack.Screen name="Register" component={RegisterUser} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
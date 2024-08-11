import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './Auth/SignUp';
import SignIn from './Auth/SignIn';
import OTPVerify from './Auth/OTPVerify';
import RegisterUser from './Auth/RegisterUser';
import Dashboard from './components/Dashboard/Dashboard';
import UploadProduct from './screen/UploadProduct';
import Sales from './components/Sales/Sales';
import Orders from './components/orders/Orders';
import PendingOrders from './components/pending/PendingOrders';
import AllProducts from './components/Products/AllProducts';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  const initialRoute = "SignUp";

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
            <Stack.Screen name="Sales" component={Sales} />
            <Stack.Screen name="Orders" component={Orders} />
            <Stack.Screen name="Pending" component={PendingOrders} />
            <Stack.Screen name="AllProducts" component={AllProducts} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
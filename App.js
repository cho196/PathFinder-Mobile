import Home from "./screens/Home";
import Library from "./screens/Library";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="App">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Library" component={Library} />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Library" component={Library} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

import Home from "./screens/Home";
import User from "./screens/User";
import Library from "./screens/Library";
import Assignment from "./screens/Assignment";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// export function Tabs() {
//   return (
//     <Tab.Navigator initialRouteName="Library">
//       <Tab.Screen name="User" component={User} />
//       <Tab.Screen name="Library" component={Library} />
//       <Tab.Screen name="Assignment" component={Assignment} />
//     </Tab.Navigator>
//   );
// }
export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="Assignment" component={Assignment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

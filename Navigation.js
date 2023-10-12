import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./screens/tabScreens/Feed";
import Settings from "./screens/tabScreens/Settings";
import Notifications from "./screens/tabScreens/Notifications";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import TweetDetailsScreen from "./screens/homeStack/TweetDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Payments from "./screens/drawerScreens/Payments";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Image, Pressable, StatusBar, useColorScheme } from "react-native";
import Messages from "./screens/tabScreens/Messages";

//top tabs
const TopTabs = createMaterialTopTabNavigator();

function TopTabsGroup({ navigation }) {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: { textTransform: "capitalize", fontWeight: "bold" },
        tabBarIndicatorStyle: {
          height: 5,
          borderRadius: 5,
          backgroundColor: "black",
        },
      }}
    >
      <TopTabs.Screen name="For you" component={Feed} options={{}} />
      <TopTabs.Screen name="Following" component={Feed} />
    </TopTabs.Navigator>
  );
}
//stack
const HomeStack = createStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="TabGroup"
        component={TabGroup}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="TweetDetailsScreen"
        component={TweetDetailsScreen}
        options={{ presentation: "modal" }}
      />
    </HomeStack.Navigator>
  );
}

//bottom tab
const Tab = createBottomTabNavigator();

function TabGroup({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === "Messages") {
            iconName = focused ? "ios-chatbubble" : "ios-chatbubble-outline";
          } else if (route.name === "Notifications") {
            iconName = focused
              ? "ios-notifications"
              : "ios-notifications-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Feed"
        component={TopTabsGroup}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                source={require("./assets/pfp.jpeg")}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  marginLeft: 15,
                }}
              />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

//drawer
const Drawer = createDrawerNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Profile" component={HomeStackGroup} />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  const currentTheme = useColorScheme();

  return (
    <NavigationContainer
      theme={currentTheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <StatusBar style="auto" />
      <DrawerGroup />
      {/*<HomeStackGroup />*/}
    </NavigationContainer>
  );
}

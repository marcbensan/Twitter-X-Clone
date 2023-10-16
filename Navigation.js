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

const CustomTabIcon = ({ iconSource }) => (
  <Image source={iconSource} style={{ width: 24, height: 24 }} />
);

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
          tabBarLabel: false,
          headerTitle: null,
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                source={require("./assets/pfp.jpeg")}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  marginLeft: 15,
                }}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Image
              source={require("./assets/icon.png")}
              style={{
                width: 20,
                height: 20,
                marginRight: 15,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: false,
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                source={require("./assets/pfp.jpeg")}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  marginLeft: 15,
                }}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Image
              source={require("./assets/icon.png")}
              style={{
                width: 20,
                height: 20,
                marginRight: 15,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: false,
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                source={require("./assets/pfp.jpeg")}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  marginLeft: 15,
                }}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Image
              source={require("./assets/icon.png")}
              style={{
                width: 20,
                height: 20,
                marginRight: 15,
              }}
            />
          ),
        }}
      />
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
    <NavigationContainer>
      <StatusBar backgroundColor="#000000" />
      <DrawerGroup />
      {/*<HomeStackGroup />*/}
    </NavigationContainer>
  );
}

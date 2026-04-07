import { NavigationContainer, Theme } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChapterVersesScreen } from "../screens/ChapterVersesScreen";
import { ChaptersScreen } from "../screens/ChaptersScreen";
import { DailyShlokaScreen } from "../screens/DailyShlokaScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { colors } from "../theme/colors";
import { ChapterStackParamList, RootTabParamList } from "./types";

const Tab = createMaterialTopTabNavigator<RootTabParamList>();
const ChapterStack = createNativeStackNavigator<ChapterStackParamList>();

function ChaptersStack() {
  return (
    <ChapterStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.bg },
        headerTintColor: colors.text,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: colors.bg },
      }}
    >
      <ChapterStack.Screen name="ChaptersHome" component={ChaptersScreen} options={{ title: "Chapters" }} />
      <ChapterStack.Screen name="ChapterVerses" component={ChapterVersesScreen} options={{ title: "Verses" }} />
    </ChapterStack.Navigator>
  );
}

const navTheme: Theme = {
  dark: false,
  colors: {
    primary: colors.accent,
    background: colors.bg,
    card: colors.card,
    text: colors.text,
    border: colors.border,
    notification: colors.accent,
  },
  fonts: {
    regular: { fontFamily: "System", fontWeight: "400" },
    medium: { fontFamily: "System", fontWeight: "500" },
    bold: { fontFamily: "System", fontWeight: "700" },
    heavy: { fontFamily: "System", fontWeight: "800" },
  },
};

export function AppNavigator() {
  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.surface,
            borderBottomColor: colors.border,
            borderBottomWidth: 1,
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarItemStyle: {
            width: "auto",
          },
          tabBarScrollEnabled: true,
          tabBarLabelStyle: {
            textTransform: "none",
            fontSize: 14,
            fontWeight: "700",
          },
          tabBarActiveTintColor: colors.accent,
          tabBarInactiveTintColor: colors.muted,
          tabBarIndicatorStyle: {
            backgroundColor: colors.accent,
            height: 3,
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
        <Tab.Screen name="Chapters" component={ChaptersStack} options={{ title: "Chapters" }} />
        <Tab.Screen name="Daily" component={DailyShlokaScreen} options={{ title: "Daily Shloka" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

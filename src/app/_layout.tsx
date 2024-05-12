import { Stack } from "expo-router";
import React from "react";
import { useFonts } from "expo-font";
import { AuthProvider } from "@/src/context/AuthProvider";
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <PaperProvider>
      <Stack>
        <Stack.Screen
          name="(app)"
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="other"
          options={{
            title: "",
            headerShown: true,
            headerTransparent: Platform.OS === "ios",
            headerBlurEffect: "regular",
          }}
        /> */}
      </Stack>
      </PaperProvider>
    </AuthProvider>
  );
}

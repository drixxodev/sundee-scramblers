import { Stack } from "expo-router";
import React from "react";
import { AuthProvider } from "@/src/context/AuthProvider";

export default function RootLayout() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

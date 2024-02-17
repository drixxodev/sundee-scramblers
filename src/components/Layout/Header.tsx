import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton}>
        {/* Hamburger Icon */}
        <View style={styles.hamburgerIcon}>
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>Sundee Scramblers</Text>
      <TouchableOpacity style={styles.labsButton}>
        <Text style={styles.profileText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white", // Replace with the color of your header
  },
  menuButton: {
    // Style as needed
  },
  hamburgerIcon: {
    // Just an example, style as needed
    width: 30,
    justifyContent: "space-around",
    flexDirection: "column",
  },
  hamburgerLine: {
    height: 2,
    backgroundColor: "black", // Replace with your color
    marginBottom: 4,
    width: 20, // Width of the hamburger icon lines
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    // Additional styling for the title
  },
  labsButton: {
    backgroundColor: "green", // Replace with the button's background color
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    // Any additional styling for the button
  },
  profileText: {
    color: "white", // Replace with the text color of the button
    // Additional styling for the button text
  },
});

export default Header;

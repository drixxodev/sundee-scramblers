import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styles from "./header.style";
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

export default Header;

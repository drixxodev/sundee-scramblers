import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../constants";
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
    fontSize: SIZES.large,
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

export default styles;

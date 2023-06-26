import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Menu = () => {
  return (
    <View style={styles.container}>
      {/* Add your other menu items here */}
      <View style={styles.menuItem}>
        <Ionicons name="mail" size={24} color="black" />
        <Text style={styles.menuItemText}>Contact Us</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  menuItemText: {
    marginLeft: 12,
    fontSize: 16,
  },
});

export default Menu;

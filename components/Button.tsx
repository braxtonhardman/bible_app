import React from "react";
import { StyleSheet, Pressable, Text, View} from "react-native";
import { useRouter } from "expo-router";

export default function Button() {
  const router = useRouter();

  return (
    <View style={styles.button}>
      <Pressable
        onPress={() => {
          router.navigate("/connectdevice");
          console.log("Get Started!");
        }}
      >
        <Text style={styles.text}>Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    backgroundColor: "black",
    padding: 5,
    marginBottom: 0,

    // iOS shadow
    shadowColor: "#000", // shadow color
    shadowOffset: { width: 0, height: 2 }, // position of shadow
    shadowOpacity: 0.3, // transparency
    shadowRadius: 3, // blur

    // Android shadow
    elevation: 5, // makes shadow visible on Android
  },
  text: {
    color: "white",
    fontSize: 20,
    margin: 5,
    fontFamily: "Lato",
  },
});

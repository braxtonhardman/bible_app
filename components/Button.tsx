import React from "react";
import {Pressable, View, ViewStyle} from "react-native";
import { useRouter, RelativePathString } from "expo-router";
import {styles} from "../assets/styles";

type ButtonProps = { 
  children: React.ReactElement, 
  path: RelativePathString, 
  style?: ViewStyle, 
}

export default function Button({ children, path, style}: ButtonProps) {
  const router = useRouter();

  return (
    <View style={style}>
      <Pressable
        onPress={() => { 
          router.navigate(path);
        }}
      >
        {children}
      </Pressable>
    </View>
  );
}

import { Image } from 'expo-image';
import { Pressable, Text, StyleSheet, View} from 'react-native';
import { useRouter } from 'expo-router';

import Animated, { 
  useSharedValue, 
  interpolateColor,
  useAnimatedStyle, 
  withSpring 
} from 'react-native-reanimated';

export default function Index() {
  const router = useRouter();

  const scale = useSharedValue(1);
  const pressed = useSharedValue(0);

  
  // Animated style for the button
  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      pressed.value,
      [0, 1],            // input range
      ['#000000', '#333333'] // normal black to lighter black
    );

    return {
      transform: [{ scale: scale.value }],
      backgroundColor,
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(0.9);
    pressed.value = 1;
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
    pressed.value = 0;
  };

  return (
    <View
      style={styles.pageContainer}
    >
      <Image 
        source={require('../assets/images/logo.png')}
        style={styles.imageContainer}
        />
      <Animated.View style={[styles.button, animatedStyle]}>
        <Pressable 
          onPressIn={handlePressIn} 
          onPressOut={handlePressOut}
          onPress={() => {
            router.navigate('/connectdevice')
            console.log("Get Started!");
          }}
        >
          <Text style={styles.text}>
            Get Started
          </Text>
        </Pressable>
      </Animated.View>

    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: { 
    alignItems: 'center', 
    width: "100%",
    height: "100%",
    backgroundColor: 'white',
  },
  imageContainer: { 
    marginTop: 150, 
    width: 400,
    height: 400,
    marginBottom: 0, 

    shadowColor: '#000',       // shadow color
    shadowOffset: { width: 0, height: 2 }, // position of shadow
    shadowOpacity: 0.3,        // transparency
    shadowRadius: 3,           // blur

    // Android shadow
    elevation: 5,              // makes shadow visible on Android'
  },
  button: { 
    borderRadius: 5, 
    backgroundColor: 'black',
    padding: 5, 
    marginBottom: 0,
   
    // iOS shadow
    shadowColor: '#000',       // shadow color
    shadowOffset: { width: 0, height: 2 }, // position of shadow
    shadowOpacity: 0.3,        // transparency
    shadowRadius: 3,           // blur

    // Android shadow
    elevation: 5,              // makes shadow visible on Android
  },
  text: { 
    color: 'white',
    fontSize: 20, 
    margin: 5,  
    fontFamily: 'Lato',
  },
});

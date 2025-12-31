import { Image } from 'expo-image';
import { StyleSheet, View} from 'react-native';
import Button from '../components/Button';
import { 
  requestPermissions
} from "../hooks/use-ble";

export default function Index() {

  const handleRequestPermissions = async () => {
    const isPermissionsGranted = await requestPermissions();
    console.log("Permissions granted:", isPermissionsGranted);
  }
  handleRequestPermissions();
  return (
    <View
      style={styles.pageContainer}
    >
      <Image 
        source={require('../assets/images/logo.png')}
        style={styles.imageContainer}
        />
      <Button />
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
});

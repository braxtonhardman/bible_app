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
});

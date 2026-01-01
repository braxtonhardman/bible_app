import { Text, FlatList, Pressable} from 'react-native';
import { BLEService } from '../hooks/ble-manager';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from "../components/Button";
import {RelativePathString} from "expo-router"; 
import {styles} from "../assets/styles";
import { 
  scanAndConnect,
  requestPermissions
} from "../hooks/use-ble";

export default function ConnectDevice() {

  const manager = BLEService.manager
  const [error, setError] = useState("");

  const permission = async() => { 
    const permission = await requestPermissions();
    if(!permission) { 
      setError("You must enable bluetooth");
    }
  }
  permission(); 

  const [devices, setDevices] = useState([""]); 
  
  useEffect(() => {
    const subscription = manager.onStateChange(state => {
      if (state === 'PoweredOn') {

        setDevices(scanAndConnect(manager));
        subscription.remove()
      }
    }, true)
    return () => subscription.remove()
  }, [manager])

  return (
    <SafeAreaView>
      <FlatList
        data={devices}
        renderItem={({item}) => 
          <Pressable style={{justifyContent: "center", alignItems: "center", padding: 10}}> 
            <Text style={{fontFamily: "Roboto", fontSize: 25, color: "Black"}}>
              {item}
            </Text>
          </Pressable>
        }
      />

      <Button path={"/sets" as RelativePathString} style={styles.DefaultButton}>
        <Text style={styles.DefaultText}>Next Page</Text>
      </Button>
    </SafeAreaView>
  );
}
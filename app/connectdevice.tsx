import { Text, View } from 'react-native'
import { BLEService } from '../hooks/ble-manager'
import { useEffect } from 'react'

export default function ConnectDevice() {

  const manager = BLEService.manager; 
  
  useEffect(() => {
    const subscription = manager.onStateChange(state => {
      if (state === 'PoweredOn') {
        //scanAndConnect()
        subscription.remove()
      }
    }, true)
    return () => subscription.remove()
  }, [manager])

  return (
    <View>
      <Text>Hello this is the connect device page</Text>
    </View>
    
  );
}
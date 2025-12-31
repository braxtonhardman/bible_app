import { BleManager } from 'react-native-ble-plx'

// Called a moudle pattern singleton 
// to ensure only one instance of BleManager exists
// All files that import BLEService will use the const export defined here .
class BLEServiceInstance {
  manager: BleManager

  constructor() {
    this.manager = new BleManager()
  }
}

export const BLEService = new BLEServiceInstance()
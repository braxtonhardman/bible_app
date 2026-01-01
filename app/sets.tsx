import {View, Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../components/Button';
import {RelativePathString} from "expo-router";
import {styles} from "../assets/styles";

export default function Sets() { 

    return (
        <SafeAreaView>
            <View>
                <Button path={"/connectdevice" as RelativePathString} style={styles.DefaultButton}>
                    <Text style={styles.DefaultText}>+</Text>
                </Button>
            </View> 
        </SafeAreaView>

    ); 
}


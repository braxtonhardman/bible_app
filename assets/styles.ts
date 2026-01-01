import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    DefaultText : { 
        color: "white",
        fontFamily: "Roboto",
        fontSize: 25, 
        zIndex: 20,
    },
    LargeText : { 

    },
    SmallText : { 

    }, 
    DefaultButton : { 
        justifyContent: "center", 
        zIndex: 20, 
        alignItems: "center", 
        borderRadius: 25,
        backgroundColor: "black",
        padding: 10,
        margin: 5, 
        marginBottom: 0,

        // iOS shadow
        shadowColor: "#000", // shadow color
        shadowOffset: { width: 0, height: 2 }, // position of shadow
        shadowOpacity: 0.3, // transparency
        shadowRadius: 3, // blur

        // Android shadow
        elevation: 5, // makes shadow visible on Android
    }, 
    SmallButton : { 

    }, 
    MediumButton : { 

    }, 
    CircleButton : { 

    }
})
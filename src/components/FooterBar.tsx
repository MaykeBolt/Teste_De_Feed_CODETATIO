import { Button, View, StyleSheet, Pressable } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const FooterBar = () => {
    return (
        <View style={style.footer}>
            <Pressable style={style.button}> Home </Pressable>
            <Pressable style={style.button}> Feed </Pressable>
            <Pressable style={style.button}> Chat </Pressable>
        </View>
    )
}

const style = StyleSheet.create ({
    footer: {
        // flex: 2,
        backgroundColor: "#ffadad",
        flexDirection: "row",
        width: wp(100),
        height: hp(100),
        justifyContent: "space-evenly"
        

    },
    button: {
        backgroundColor: "blue",
        width: wp(30),
        height: hp(5),
        marginTop: hp(1),
        marginBottom: hp(4),
        borderRadius: 5,
        textAlign: "center",
        justifyContent: "center"
        
    }
})

export default FooterBar
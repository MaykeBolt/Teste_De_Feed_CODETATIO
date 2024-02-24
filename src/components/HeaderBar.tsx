import { StyleSheet, Image, View, Pressable } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const HeaderBar = () => {
    return (
        <View style={style.header}>
            <Image source={require('../../assets/icons/icons8-sheep-100.png')} style={style.img}/>
            <Pressable style={style.button}> Drop </Pressable>
        </View>
    )
}

const style = StyleSheet.create ({
    header: {
        // flex: 2,
        backgroundColor: "#caffad",
        height: hp(10),
        width: wp(102),
        
        flexDirection: "row",
        alignItems: "center"
        
    },
    button: {
        backgroundColor: "slateblue",
        width: wp(30),
        height: hp(5),
        marginHorizontal: hp(2),
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        width: wp(10),
        height: hp(10),
        marginLeft: wp(2)
    }
})

export default HeaderBar
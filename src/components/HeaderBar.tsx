import { StyleSheet, Image, View, Pressable } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const HeaderBar = () => {
    return (
        <View style={style.header}>
            <Image source={require('../../assets/icons/BooPeep2.jpg')} style={style.icon}/>
            <Pressable style={style.button}><Image source={require('../../assets/icons/icons8-pesquisar-64.png')} style={style.img} /></Pressable>
        </View>
    )
}

const style = StyleSheet.create ({
    header: {
        backgroundColor: "#d4d7ff",
        height: hp(10),
        width: wp(102),
        
        flexDirection: "row",
        alignItems: "center",

        borderBottomColor: "#0000001a",
        borderBottomWidth: wp(0.9),
        
    },
    button: {
        //backgroundColor: "slateblue",
        width: wp(2),
        height: hp(2),
        borderRadius: 5,
        marginHorizontal: wp(10),
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 0
    },
    img: {
        width: 50,
        height: 50,
        marginLeft: wp(2)
    },
    icon: {
        width: 140,
        height: 50,
        marginLeft: wp(1),
    }
})

export default HeaderBar
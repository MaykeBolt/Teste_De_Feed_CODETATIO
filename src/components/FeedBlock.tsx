import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const FeedBlock = () => {
    return (
        <View style={style.feedblock}>
        {/* --------------------------------------------- */}
          <View style={style.firstline}>
            <Image source={require('../../assets/icons/icons8-usuário-homem-com-círculo-100_Feed.png')} style={style.user}/>
            <Text style={style.usertext}> User </Text>
            <Pressable style={style.options}>
                <Image source={require('../../assets/icons/icons8-menu-2-24.png')}/>
            </Pressable>
          </View>
        {/* --------------------------------------------- */}
            <Text style={style.infotext}> 
                Lorem amogus sussy baki is the new rizz skibiritoiler ohmagad big smoke i'll have 2 number 9s a number
                9 large a number 6 with extra dip 2 number 45s one with MAC AND cheese and a large soda AND NOBODY IS STOPPING
                ME! HihehiHA! *Bad to the Bone Riff*
            </Text>
          <View style={style.middleline}>
            <Image source={require('../../assets/pictures/riff.jpg')} style={style.missingpic}/>
            <Image source={require('../../assets/pictures/riff.jpg')} style={style.missingpic}/>
          </View>
        {/* --------------------------------------------- */}
          <View style={style.endline}>
            <View style={style.status}/>
            <Text style={style.statustext}>Status: RAPAIZ</Text>
            <Image source={require('../../assets/icons/icons8-mensagens-100_Feed.png')} style={style.chaticon} />
          </View>
            <Text style={style.time}>Há: 25 horas atrás</Text>
        {/* --------------------------------------------- */}
        </View>
    )
}

const style = StyleSheet.create ({
    feedblock: {
        backgroundColor: "#ffffff",
        marginHorizontal: wp(5),
        marginVertical: hp(2),
        padding: 6,
        borderRadius: 10
    },
    firstline: {
        flexDirection: "row",
    },
    user: {
        width: 30,
        height: 30,
        marginLeft: 10,
    },
    usertext: {
        fontWeight: "bold",
    },
    options: {
        position: "absolute",
        right: 0,  
        marginRight: 10,
    },
    infotext: {
        paddingHorizontal: wp(5)
    },
    missingpic: {
        width: 140,
        height: 140,
        marginTop: hp(2),
        marginBottom: hp(2),
        paddingHorizontal: wp(5),
        
    },
    middleline: {
        flexDirection: "row",
        justifyContent: "center"
    },
    status: {
        borderWidth: wp(2),
        borderRadius: 50,
        width: wp(1),
        height: hp(1),
        borderColor: "#ce1e1e",
        marginRight: wp(1),
    },
    statustext: {
        
    },
    time: {
        marginLeft: 10,
    },
    chaticon: {
        width: 35,
        height: 35,        
        position: "absolute",
        right: 0,
        paddingBottom: 10,
        marginRight: 10,
    },
    endline: {
        flexDirection: "row",
        marginLeft: 10,
    },
})




export default FeedBlock;
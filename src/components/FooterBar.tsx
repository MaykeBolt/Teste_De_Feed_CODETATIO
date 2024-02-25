import { View, Pressable, Image} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import StyleSheet from 'react-native-media-query';

const FooterBar = () => {
    return (
        <View style={styles.footer} dataSet={{ media: ids.footer }}>
            <Pressable style={styles.button} dataSet={{ media: ids.button }}>
                <Image source={require('../../assets/icons/icons8-usuário-homem-com-círculo-100.png')} style={styles.img1}/>
            </Pressable>
            <Pressable style={styles.button} dataSet={{ media: ids.button }}>  
                <Image source={require('../../assets/icons/icons8-casa-100.png')} style={styles.img2}/>
            </Pressable>
            <Pressable style={styles.button} dataSet={{ media: ids.button }}> 
                <Image source={require('../../assets/icons/icons8-mensagens-100.png')} style={styles.img3}/>
            </Pressable>
        </View>
    )
}

const {ids, styles} = StyleSheet.create ({
    footer: {
        position: "absolute",
        backgroundColor: "#d4d7ff",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: wp(2),
        alignItems: "center",
        shadowOffset: {height: hp(1.3), width: wp(1.3)},
        shadowRadius: 20,
        bottom: 0,
        

        width: wp(102),
        height: hp(100),

        '@media (min-width: 280px) and (max-width: 359px)': {
            width: wp(102),
            height: hp(8),
        },

        '@media (min-width: 360px) and (max-width: 374px)': {
            width: wp(100),
            height: hp(8),
        },

        '@media (min-width: 375px) and (max-width: 389px)': {
            width: wp(102),
            height: hp(10),
        },

        '@media (min-width: 390px) and (max-width: 411px)': {
            width: wp(96.5),
            height: hp(8),
        },

        '@media (min-width: 412px) and (max-width: 414px)': {
            width: wp(95),
            height: hp(8.5),
        },

        '@media (min-width: 414px) and (max-width: 429px)': {
            width: wp(102),
            height: hp(8.5),
        },

        '@media (min-width: 430px) and (max-width: 539px)': {
            width: wp(100),
            height: hp(8.5),
        },

        '@media (min-width: 540px) and (max-width: 767px)': {
            width: wp(65.5),
            height: hp(6),
        },

        '@media (min-width: 768px) and (max-width: 819px)': {
            width: wp(64),
            height: hp(6),
        },

        '@media (min-width: 820px) and (max-width: 852px)': {
            width: wp(100),
            height: hp(8),
        },

        '@media (min-width: 853px) and (max-width: 911px)': {
            width: wp(100),
            height: hp(8.5)
        },

        '@media (min-width: 912px) and (max-width: 1023px)': {
            width: wp(98.3),
            height: hp(8.2),
        },

        '@media (min-width: 1024px) and (max-width: 1279px)': {
            width: wp(100),
            height: hp(8.2),
        },

        '@media (min-width: 1280px)': {
            width: wp(98),
            height: hp(8),
        },

        
    },
    button: {
        //backgroundColor: "blue",
        width: wp(30),
        height: hp(5),
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",

        '@media (min-width: 414px)': {
            width: wp(27),
            height: hp(4),
        },

        '@media (min-width: 540px) and (max-width: 819px)': {
            width: wp(12),
            height: hp(4),
        }, //YOU NEED ALSO TO DO THE SAME WITH HEADERBAR.TSX

        '@media (min-width: 1280px)': {
            width: wp(10),
            height: hp(5),
        },
        
    },
    img1: {
        width: 40,
        height: 40,
    },
    img2: {
        width: 35,
        height: 35,
    },
    img3: {
        width: 40,
        height: 40,
    },
})

export default FooterBar
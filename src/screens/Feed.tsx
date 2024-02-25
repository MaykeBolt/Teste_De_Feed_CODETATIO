import { View, Text } from "react-native";
import StyleSheet from 'react-native-media-query';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import FeedBlock from "../components/FeedBlock";



const Feed = () => {
    return (
    <View style={styles.feed} dataSet={{ media: ids.feed }}>
        <FeedBlock />
        <FeedBlock />
        <FeedBlock />
    </View>
    )
}

const {ids, styles} = StyleSheet.create ({
    feed: {
        backgroundColor: "#d4d7ff",
        width: wp(102),
        height: hp(100),

        '@media (min-width: 280px) and (max-width: 374px)': {
            width: wp(102),
            height: hp(85),
        },
        
        '@media (min-width: 360px) and (max-width: 374px)': {
            width: wp(100),
            height: hp(82),
        },

        '@media (min-width: 375px) and (max-width: 389px)': {
            width: wp(102),
            height: hp(82),
        },

        '@media (min-width: 390px) and (max-width: 411px)': {
            width: wp(97),
            height: hp(78.5),
        },

        '@media (min-width: 412px) and (max-width: 414px)': {
            width: wp(95),
            height: hp(76),
        },

        '@media (min-width: 414px) and (max-width: 429px)': {
            width: wp(102),
            height: hp(83),
        },

        '@media (min-width: 430px) and (max-width: 539px)': {
            width: wp(100),
            height: hp(81),
        },

        '@media (min-width: 540px) and (max-width: 767px)': {
            width: wp(65.5),
            height: hp(49.5),
        },

        '@media (min-width: 768px) and (max-width: 819px)': {
            width: wp(64),
            height: hp(48),
        },

        '@media (min-width: 820px) and (max-width: 852px)': {
            width: wp(100),
            height: hp(82),
        },

        '@media (min-width: 853px) and (max-width: 911px)': {
            width: wp(100),
            height: hp(82),
        },

        '@media (min-width: 912px) and (max-width: 1023px)': {
            width: wp(98.3),
            height: hp(80),
        },

        '@media (min-width: 1024px) and (max-width: 1279px)': {
            width: wp(100),
            height: hp(10),
        },

        '@media (min-width: 1280px)': {
            width: wp(98),
            height: hp(80),
        },

        /*'@media (max-width: &px) and (min-width: &px)': {
        
        },

        '@media (max-width: &px) and (min-width: &px)': {
        
        },

        '@media (max-width: &px) and (min-width: &px)': {
        
        },

        '@media (max-width: &px) and (min-width: &px)': {
        
        },*/
    }
})

export default Feed;
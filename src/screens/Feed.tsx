import { View, StyleSheet, Text, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import FeedBlock from "../components/FeedBlock";

const {height, width} = Dimensions.get('window');

const Feed = () => {
    return (
    <View style={style.feed}>
        <Text>Cacatua Gamer</Text>
        <FeedBlock />
        <FeedBlock />
        <FeedBlock />
    </View>
    )
}

const style = StyleSheet.create ({
    feed: {
        backgroundColor: "#ffb370",
        width: wp(102),
        height: hp(75)
    }
})

export default Feed;
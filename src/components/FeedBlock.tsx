import { Text, View, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const FeedBlock = () => {
    return (
        <View style={style.feedblock}>
            <Text> Amogus é tipo sussy baki mas mais sus. </Text>
            <Text> Mas quem matou o baki? </Text>
        </View>
    )
}

const style = StyleSheet.create ({
    feedblock: {
        backgroundColor: "#ff7700",
        marginHorizontal: wp(10),
        marginVertical: hp(2),
        padding: 6,
        borderRadius: 4
    }
})




export default FeedBlock;
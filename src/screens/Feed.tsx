import { View } from "react-native";
import HeaderBar from "../components/HeaderBar";
import FeedArea from "../components/FeedArea";
import FooterBar from "../components/FooterBar";



const Feed = () => {
    return (
    <View>
        <HeaderBar />
        <FeedArea />
        <FooterBar />
    </View>
    )
}


export default Feed;
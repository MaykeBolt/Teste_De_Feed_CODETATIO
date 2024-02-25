import { Dimensions, SafeAreaView, StyleSheet, Text } from "react-native";
import Feed from "./src/screens/Feed";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import HeaderBar from "./src/components/HeaderBar";
import FooterBar from "./src/components/FooterBar";

const {height, width} = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView style={style.root}>
      {/*<Text>Raiz do projeto.</Text>*/}
      <HeaderBar />
      <Feed />
      <FooterBar />
    </SafeAreaView>
  );
}

const style = StyleSheet.create ({
  root: {
    flex: 1,
    backgroundColor: "#ffd4ad",
  }
});


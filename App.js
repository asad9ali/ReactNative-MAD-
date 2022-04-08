import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{ width: 300, height: 300, backgroundColor: "pink", borderRadius: 30 }} source={require("./assets/Saly-1intro-image.png")}></Image>

      <h1 styles={{ fontFamily: "sans-serif", width: 300 }}>Discover Your</h1>
      <h1 >Own Dream House</h1>
      <View style={{justifyContent:"center",alignContent:"center"}}>
        <Text style={{justifyContent:"center",alignContent:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Button style={{borderRadius: 30,}}
          title='sign in'
          color="pink"
        ></Button>
        <Button
          title='Register'
          color='lightgrey'
        ></Button>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    fontSize: 30,

  }
});

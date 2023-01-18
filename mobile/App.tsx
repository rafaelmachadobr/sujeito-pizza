import { StyleSheet, Text, View, StatusBar } from "react-native";
import SingIn from "./src/pages/SingIn";

export default function App() {
  return (
    <View>
      <StatusBar backgroundColor="#1d1d2e" barStyle="light-content" translucent={false} />
      <SingIn />
    </View>
  );
}

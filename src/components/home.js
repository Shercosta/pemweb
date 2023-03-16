import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import styles from "../utils/StyleHomePage";
import Entypo from "react-native-vector-icons/Entypo";

const Home = ({ navigation }) => {
  const [startPortList, startPortFind] = React.useState("");
  const [endPortList, endPortFind] = React.useState("");
  const [timeList, timeFind] = React.useState("");

  const cari = () => {
    navigation.navigate("nextpage", {
      keberangkatan: startPortList,
      tujuan: endPortList,
      waktu: timeList,
    });
  };

  return (
    <SafeAreaView color={"#FCF6B1"}>
      <View style={styles.row}>
        <Entypo name="menu" size={24} color="#2D1E2F" />
        <Entypo name="user" size={24} color="#2D1E2F" />
      </View>
      <View style={styles.centerView}>
        <View style={styles.marginV}>
          <Text>FLIGHT APP SCT</Text>
        </View>
        <View style={styles.boxmain}>
          <View style={styles.margins}>
            <Text style={styles.textSubtittle}>From Port</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => startPortFind(text)}
              value={startPortList}
              placeholder="Indonesia / Croatia"
            />
            <Text style={styles.textSubtittle}>To Port</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => endPortFind(text)}
              value={endPortList}
              placeholder="Indonesia / Croatia"
            />
            <Text style={styles.textSubtittle}>Waktu Keberangkatan</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => timeFind(text)}
              value={timeList}
              placeholder="14 / 15"
            />
            <Button color={"#E3170A"} title="Cari" onPress={cari} />
          </View>
        </View>
      </View>
      <View style={styles.copyright}>
        <Text>Geizka Rozilia Ruicosta 119140114</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

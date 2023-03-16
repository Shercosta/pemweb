import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { Icon, Card } from "react-native-elements";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "../utils/StyleCheckOut";
import { useRoute } from "@react-navigation/native";
import { MASKAPAI, BANDARA, JADWAL } from "../utils/Data";

const Detail = ({ navigation }) => {
  const route = useRoute();

  return (
    <SafeAreaView>
      <View style={styles.row}>
        <Entypo
          name="arrow-with-circle-left"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Entypo name="user" size={24} color="#2D1E2F" />
      </View>
      <View style={styles.upper}>
        <Text style={styles.textTitle}>FLIGHT APP SCT</Text>
        <Text style={styles.textSubtittle}>Results</Text>
      </View>
      <View style={styles.marginMain}>
        <FindData />
      </View>
    </SafeAreaView>
  );

  function NoHaveData() {
    return (
      <Card>
        <View style={styles.viewCard}>
          <Text style={styles.textSubtittle}>
            No flight scheduled at the given time
          </Text>
        </View>
      </Card>
    );
  }

  function DataGet(hasil) {
    return (
      <FlatList
        data={hasil}
        renderItem={({ item }) => (
          <Card>
            <View style={styles.viewCard}>
              <View style={styles.viewImage}>
                <Text>
                  {
                    BANDARA.find(
                      (sub) => sub.bandara_id == item.bandara_id_keberangkatan
                    ).bandara_nama
                  }
                </Text>
              </View>
              <Text>
                {
                  BANDARA.find(
                    (sub) => sub.bandara_id === item.bandara_id_kedatangan
                  ).bandara_nama
                }
              </Text>
            </View>
            <View style={styles.viewCard}>
              <View style={styles.viewImage}>
                <Image
                  source={
                    MASKAPAI.find((sub) => sub.maskapai_id === item.maskapai_id)
                      .maskapai_logo
                  }
                  style={{ width: 40, height: 40 }}
                />
              </View>
              <Text>
                {
                  MASKAPAI.find((sub) => sub.maskapai_id === item.maskapai_id)
                    .maskapai_nama
                }
              </Text>
            </View>
          </Card>
        )}
        keyExtractor={(item) => item.jadwal_id}
      />
    );
  }

  function FindData() {
    if (
      !route.params.keberangkatan ||
      !route.params.tujuan ||
      !route.params.waktu
    )
      return NoHaveData();
    if (
      route.params.keberangkatan.trim() === "" ||
      route.params.tujuan.trim() === "" ||
      route.params.waktu.trim() === ""
    ) {
      return NoHaveData();
    } else {
      const keberangkatanID = BANDARA.find(
        (id) =>
          id.bandara_nama.toLowerCase() ===
          route.params.keberangkatan.toLowerCase()
      )?.bandara_id;
      const tujuanID = BANDARA.find(
        (id) =>
          id.bandara_nama.toLowerCase() === route.params.tujuan.toLowerCase()
      )?.bandara_id;
      const hasil = JADWAL.filter(
        (id) =>
          id.bandara_id_keberangkatan.toLowerCase() ===
            keberangkatanID.toLowerCase() &&
          id.bandara_id_kedatangan.toLowerCase() === tujuanID.toLowerCase() &&
          id.tanggal === route.params.waktu.toLowerCase()
      );

      let findAll = hasil.length >= 1 ? DataGet(hasil) : NoHaveData();

      return findAll;
    }
  }
};

export default Detail;

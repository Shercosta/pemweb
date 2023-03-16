import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bacgroundSaveArea: {
    backgroundColor: "green",
  },
  centerView: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 550,
    backgroundColor: "#FCF6B1",
    borderBottomLeftRadius: 30,
    borderBottomEndRadius: 30,
  },
  boxmain: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: 350,
    width: "70%",
    borderRadius: 10,
  },
  margins: {
    margin: 20,
  },

  textInput: {
    height: 40,
    width: 250,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "powderblue",
    padding: 10,
    borderRadius: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FCF6B1",
  },
  marginV: {
    marginVertical: 30,
  },
  copyright: {
    alignItems: "center",
    justifyContent: "center",
    margin: 40,
  },
});

export default styles;

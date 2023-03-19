import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ForgotPasswordContainer = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.rectangleParent, styles.groupLayout]}>
        <View style={styles.groupChild} />
        <Text style={[styles.text, styles.textTypo]}>4</Text>
      </View>
      <View
        style={[styles.rectangleGroup, styles.groupLayout, styles.groupLayout1]}
      >
        <View style={styles.groupChild} />
        <Text style={[styles.text, styles.textTypo]}>6</Text>
      </View>
      <View
        style={[
          styles.rectangleContainer,
          styles.groupLayout,
          styles.groupLayout1,
        ]}
      >
        <View style={styles.groupChild} />
        <Text style={[styles.text2, styles.textTypo]}>2</Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout, styles.groupLayout1]}>
        <View style={styles.groupChild} />
        <Text style={[styles.text, styles.textTypo]}>5</Text>
      </View>
      <Text style={styles.digitsNumber}>4 Digit’s number</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 42,
    width: 42,
    top: 40,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    color: Color.darkslateblue_100,
    top: 11,
    fontFamily: FontFamily.akayaKanadakaRegular,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  groupLayout1: {
    width: 42,
    top: 40,
  },
  groupChild: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.darkslateblue_300,
    borderStyle: "solid",
    borderColor: "#545c9b",
    borderWidth: 1,
    top: 0,
    height: 42,
    width: 42,
    left: 0,
    position: "absolute",
  },
  text: {
    left: 16,
  },
  rectangleParent: {
    left: 0,
    width: 42,
    top: 40,
  },
  rectangleGroup: {
    left: 62,
  },
  text2: {
    left: 17,
  },
  rectangleContainer: {
    left: 124,
  },
  groupView: {
    left: 186,
  },
  digitsNumber: {
    textTransform: "uppercase",
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.akayaKanadakaRegular,
    fontSize: FontSize.size_mid,
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupParent: {
    top: 141,
    left: 20,
    width: 228,
    height: 82,
    position: "absolute",
  },
});

export default ForgotPasswordContainer;

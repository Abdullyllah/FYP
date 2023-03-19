import React, { useMemo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const PasswordFormContainer = ({ newPassword, propTop, propLeft }) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View
      style={[styles.rectangleParent, styles.groupChildLayout, groupViewStyle]}
    >
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Image
        style={styles.eye1Icon}
        resizeMode="cover"
        source={require("../assets/eye-1.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>**********</Text>
      <Text style={[styles.interNewPassword, styles.textTypo]}>
        {newPassword}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    width: 335,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.akayaKanadakaRegular,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  groupChild: {
    top: 40,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.darkslateblue_300,
    borderStyle: "solid",
    borderColor: "#545c9b",
    borderWidth: 1,
    height: 42,
    left: 0,
  },
  eye1Icon: {
    top: 53,
    left: 303,
    width: 16,
    height: 16,
    overflow: "hidden",
    position: "absolute",
  },
  text: {
    top: 54,
    left: 16,
    color: Color.darkslateblue_100,
  },
  interNewPassword: {
    top: 0,
    textTransform: "uppercase",
    color: Color.white,
    left: 0,
  },
  rectangleParent: {
    top: 253,
    left: 20,
    height: 82,
  },
});

export default PasswordFormContainer;

import * as React from "react";
import { TextInput as RNPTextInput } from "react-native-paper";
import { StyleSheet, Pressable, Image, Text, View } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ConfirmPasswordCard = () => {
  return (
    <View style={styles.rectangleParent}>
      <RNPTextInput
        style={[styles.groupChild, styles.groupChildPosition]}
        placeholder="Type something"
        label="cpassword"
        mode="flat"
        theme={{
          fonts: { regular: { fontFamily: "Allison" } },
          colors: { background: "#fff" },
        }}
      />
      <Image
        style={styles.eye1Icon}
        resizeMode="cover"
        source={require("../assets/eye-1.png")}
      />
      <Text style={[styles.confirmPassword, styles.groupChildPosition]}>
        Confirm Password
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    position: "absolute",
  },
  groupChild: {
    top: 40,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#545c9b",
    borderWidth: 1,
    height: 42,
    width: 335,
  },
  eye1Icon: {
    top: 53,
    left: 303,
    width: 16,
    height: 16,
    overflow: "hidden",
    position: "absolute",
  },
  confirmPassword: {
    top: 0,
    fontSize: FontSize.size_mid,
    textTransform: "uppercase",
    fontFamily: FontFamily.akayaKanadakaRegular,
    color: Color.white,
    textAlign: "left",
  },
  rectangleParent: {
    top: 420,
    left: 20,
    height: 82,
    width: 335,
    position: "absolute",
  },
});

export default ConfirmPasswordCard;

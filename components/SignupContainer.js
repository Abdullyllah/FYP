import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const SignupContainer = ({ onGroupPressablePress }) => {
  return (
    <View style={styles.groupParent}>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={onGroupPressablePress}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.singUp, styles.singUpTypo]}>Sing up</Text>
      </Pressable>
      <Text style={[styles.createAnAccount, styles.singUpTypo]}>
        Create an account?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 42,
    left: 0,
    width: 335,
    position: "absolute",
  },
  singUpTypo: {
    textAlign: "left",
    fontFamily: FontFamily.akayaKanadakaRegular,
    textTransform: "uppercase",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.ghostwhite,
    borderStyle: "solid",
    borderColor: "#b9bcdd",
    borderWidth: 1,
    top: 0,
  },
  singUp: {
    top: 11,
    left: 135,
    fontSize: FontSize.size_mid,
    color: Color.darkslateblue_100,
  },
  rectangleParent: {
    top: 37,
  },
  createAnAccount: {
    left: 86,
    fontSize: FontSize.size_sm,
    color: Color.darkslateblue_200,
    top: 0,
  },
  groupParent: {
    top: 719,
    left: 12,
    height: 79,
    width: 335,
    position: "absolute",
  },
});

export default SignupContainer;

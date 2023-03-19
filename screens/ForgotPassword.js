import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ContainerBar from "../components/ContainerBar";
import ForgotPasswordContainer from "../components/ForgotPasswordContainer";
import PasswordFormContainer from "../components/PasswordFormContainer";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ForgotPassword = () => {
  return (
    <View style={styles.forgotPassword}>
      <Image
        style={styles.forgotPasswordChild}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <ContainerBar />
      <Text style={[styles.forgotPassword1, styles.singUpTypo]}>
        Forgot Password
      </Text>
      <ForgotPasswordContainer />
      <PasswordFormContainer newPassword="inter new Password" />
      <PasswordFormContainer
        newPassword="Confirm Password"
        propTop={365}
        propLeft={21}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.singUp, styles.singUpTypo]}>Sing up</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  singUpTypo: {
    fontFamily: FontFamily.akayaKanadakaRegular,
    position: "absolute",
  },
  groupChildLayout: {
    height: 44,
    width: 335,
    position: "absolute",
  },
  forgotPasswordChild: {
    height: "11.21%",
    top: "0%",
    right: "0%",
    bottom: "88.79%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  forgotPassword1: {
    top: 74,
    fontSize: FontSize.size_9xl,
    color: Color.white,
    textAlign: "left",
    left: 20,
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.white,
  },
  singUp: {
    top: 11,
    left: 138,
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    textTransform: "uppercase",
    color: Color.darkslateblue_200,
    textAlign: "center",
  },
  rectangleParent: {
    top: 487,
    left: 20,
  },
  forgotPassword: {
    backgroundColor: Color.darkslateblue_200,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ForgotPassword;

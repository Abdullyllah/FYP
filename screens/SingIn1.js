import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ContainerBar from "../components/ContainerBar";
import SignupContainer from "../components/SignupContainer";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SingIn1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.singIn}>
      <ContainerBar />
      <Text style={[styles.letsGetStarted, styles.singIn1Typo]}>
        Let’s Get Started
      </Text>
      <RNPTextInput
        style={[styles.singInChild, styles.singLayout]}
        placeholder="Enter Username/Email"
        label="Username"
        mode="flat"
        placeholderTextColor="#fff"
        theme={{
          fonts: { regular: { fontFamily: "Allison" } },
          colors: { text: "#fff" },
        }}
      />
      <RNPTextInput
        style={[styles.singInItem, styles.singLayout]}
        placeholder="Enter Password"
        label="Password"
        mode="flat"
        placeholderTextColor="#fff"
        theme={{
          fonts: { regular: { fontFamily: "Allison" } },
          colors: { text: "#fff" },
        }}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View
          style={[
            styles.groupChild,
            styles.groupChildPosition,
            styles.groupChildLayout,
          ]}
        />
        <Text style={[styles.singIn1, styles.singIn1Typo]}>Sing In</Text>
      </View>
      <Image
        style={[styles.singInInner, styles.groupChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-21.png")}
      />
      <SignupContainer
        onGroupPressablePress={() => navigation.navigate("SingUp1")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  singIn1Typo: {
    fontFamily: FontFamily.akayaKanadakaRegular,
    position: "absolute",
  },
  singLayout: {
    height: 42,
    width: 335,
    position: "absolute",
  },
  groupChildLayout: {
    height: 44,
    width: 335,
  },
  groupChildPosition: {
    left: 0,
    position: "absolute",
  },
  letsGetStarted: {
    top: 164,
    left: 30,
    fontSize: FontSize.size_9xl,
    color: Color.white,
    textAlign: "left",
  },
  singInChild: {
    top: 317,
    left: 20,
  },
  singInItem: {
    top: 433,
    left: 13,
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.white,
  },
  singIn1: {
    top: 11,
    left: 140,
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    textTransform: "uppercase",
    color: Color.darkslateblue_200,
    textAlign: "center",
  },
  rectangleParent: {
    top: 523,
    left: 21,
    position: "absolute",
    height: 44,
  },
  singInInner: {
    top: 706,
    width: 375,
    height: 106,
  },
  singIn: {
    backgroundColor: Color.darkslateblue_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SingIn1;

import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import SignupContainer from "../components/SignupContainer";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SingIn = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.singIn}
      onPress={() => navigation.navigate("SingUp")}
    >
      <StatusBar barStyle="default" />
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
      <TouchableOpacity
        style={[styles.rectangleParent, styles.groupChildLayout]}
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.singIn1, styles.singIn1Typo]}>Sing In</Text>
      </TouchableOpacity>
      <Image
        style={styles.singInInner}
        resizeMode="cover"
        source={require("../assets/rectangle-21.png")}
      />
      <SignupContainer
        onGroupPressablePress={() => navigation.navigate("SingUp")}
      />
    </Pressable>
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
    width: 335,
    height: 44,
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
    borderRadius: Border.br_11xs,
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    width: 335,
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
  },
  singInInner: {
    top: 706,
    height: 106,
    width: 375,
    position: "absolute",
    left: 0,
  },
  singIn: {
    backgroundColor: Color.darkslateblue_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SingIn;

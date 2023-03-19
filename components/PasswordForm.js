import * as React from "react";
import { TextInput as RNPTextInput } from "react-native-paper";
import {
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const PasswordForm = ({ onEye1Press }) => {
  return (
    <View style={styles.rectangleParent}>
      <RNPTextInput
        style={[styles.groupChild, styles.groupChildPosition]}
        placeholder="Type something"
        label="password"
        mode="flat"
        theme={{
          fonts: { regular: { fontFamily: "Allison" } },
          colors: { background: "#fefeff" },
        }}
      />
      <TouchableOpacity
        style={styles.eye1}
        activeOpacity={0.2}
        onPress={onEye1Press}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/eye-1.png")}
        />
      </TouchableOpacity>
      <Text style={[styles.enterNewPassword, styles.groupChildPosition]}>
        Enter new Password
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
    backgroundColor: Color.gray_300,
    borderStyle: "solid",
    borderColor: "#545c9b",
    borderWidth: 1,
    height: 42,
    width: 335,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  eye1: {
    left: 303,
    top: 53,
    width: 16,
    height: 16,
    position: "absolute",
  },
  enterNewPassword: {
    top: 0,
    fontSize: FontSize.size_mid,
    textTransform: "uppercase",
    fontFamily: FontFamily.akayaKanadakaRegular,
    color: Color.white,
    textAlign: "left",
  },
  rectangleParent: {
    top: 324,
    left: 20,
    height: 82,
    width: 335,
    position: "absolute",
  },
});

export default PasswordForm;

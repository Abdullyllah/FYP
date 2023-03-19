import * as React from "react";
import {
  Image,
  StyleSheet,
  StatusBar,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import PasswordForm from "../components/PasswordForm";
import ConfirmPasswordCard from "../components/ConfirmPasswordCard";
import SignInContainer from "../components/SignInContainer";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SingUp = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.singUp, styles.singLayout]}>
      <Image
        style={[styles.singUpChild, styles.singLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <StatusBar style={styles.barsPosition} barStyle="default" />
      <Image
        style={[styles.singUpItem, styles.barsPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-211.png")}
      />
      <Text style={styles.createAnAccount}>{`Create An Account `}</Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <RNPTextInput
          style={[styles.groupChild, styles.groupLayout]}
          placeholder="Type something"
          label="name"
          mode="flat"
          theme={{
            fonts: {
              regular: { fontFamily: "Allison", fontWeight: "Regular" },
            },
            colors: { background: "#fff" },
          }}
        />
        <Text style={styles.name}>Name</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <RNPTextInput
          style={[styles.groupChild, styles.groupLayout]}
          placeholder="Type something"
          label="email"
          mode="flat"
          theme={{
            fonts: { regular: { fontFamily: "Allison" } },
            colors: { background: "#fff" },
          }}
        />
        <Text style={styles.name}>Email Address</Text>
      </View>
      <PasswordForm onEye1Press={() => {}} />
      <ConfirmPasswordCard />
      <SignInContainer
        onGroupTouchableOpacityPress={() => navigation.navigate("SingIn")}
      />
      <TouchableOpacity
        style={styles.rectangleContainer}
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <View style={[styles.groupLayout, styles.barsLayout]} />
        <Text style={[styles.singUp1, styles.singUp1Typo]}>Sing up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icons8Image481}
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8image48-1.png")}
        />
      </TouchableOpacity>
      <Text style={[styles.selectAfflictionCard, styles.singUp1Typo]}>
        Select Affliction Card
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  singLayout: {
    overflow: "hidden",
    width: "100%",
  },
  barsPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 82,
    width: 335,
    left: 20,
    position: "absolute",
  },
  groupLayout: {
    backgroundColor: Color.white,
    borderRadius: Border.br_11xs,
    width: 335,
    left: 0,
    position: "absolute",
  },
  barsLayout: {
    height: 44,
    top: 0,
  },
  singUp1Typo: {
    lineHeight: 22,
    textTransform: "uppercase",
    fontFamily: FontFamily.akayaKanadakaRegular,
    position: "absolute",
  },
  singUpChild: {
    height: "11.21%",
    top: "0%",
    right: "0%",
    bottom: "88.79%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  singUpItem: {
    top: 673,
    height: 139,
  },
  createAnAccount: {
    top: 74,
    fontSize: FontSize.size_9xl,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.akayaKanadakaRegular,
    left: 20,
    position: "absolute",
  },
  groupChild: {
    top: 40,
    borderStyle: "solid",
    borderColor: "#545c9b",
    borderWidth: 1,
    height: 42,
  },
  name: {
    textTransform: "uppercase",
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.akayaKanadakaRegular,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 121,
  },
  rectangleGroup: {
    top: 219,
  },
  singUp1: {
    top: 11,
    left: 138,
    color: Color.darkslateblue_200,
    textAlign: "center",
    fontSize: FontSize.size_mid,
    lineHeight: 22,
  },
  rectangleContainer: {
    top: 599,
    width: 335,
    left: 20,
    height: 44,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Image481: {
    left: 215,
    top: 531,
    width: 79,
    height: 48,
    position: "absolute",
  },
  selectAfflictionCard: {
    top: 516,
    left: 42,
    fontSize: FontSize.size_13xl,
    color: Color.black,
    width: 175,
    height: 64,
    textAlign: "left",
  },
  singUp: {
    backgroundColor: Color.darkslateblue_200,
    flex: 1,
    height: 812,
  },
});

export default SingUp;

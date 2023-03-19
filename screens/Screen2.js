import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Screen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <StatusBar barStyle="default" />
      <Image
        style={styles.child}
        resizeMode="cover"
        source={require("../assets/group-1418.png")}
      />
      <View style={styles.chooseYourRideParent}>
        <Text style={[styles.chooseYourRide, styles.yourFlexBox]}>
          Choose your Ride
        </Text>
        <Text
          style={[
            styles.selectYourComfortable,
            styles.skip1Clr,
            styles.yourFlexBox,
          ]}
        >
          Select your comfortable and customized ride with variety of choices.
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.skipParent, styles.wrapperLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Screen2")}
      >
        <TouchableOpacity
          style={styles.skip}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("SingIn")}
        >
          <Text style={[styles.skip1, styles.skip1Clr]}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={styles.groupItem} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
        <TouchableOpacity
          style={[styles.wrapper, styles.wrapperLayout]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Screen2")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/group-1408.png")}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  yourFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  skip1Clr: {
    color: Color.gray_100,
    fontFamily: FontFamily.poppinsRegular,
  },
  wrapperLayout: {
    height: 26,
    position: "absolute",
  },
  groupLayout: {
    opacity: 0.4,
    width: 8,
    backgroundColor: Color.limegreen,
    borderRadius: Border.br_5xs,
    height: 8,
    top: 0,
    position: "absolute",
  },
  child: {
    height: "46.76%",
    width: "110.5%",
    top: "11.08%",
    right: "-10.5%",
    bottom: "42.16%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  chooseYourRide: {
    left: 65,
    fontSize: FontSize.size_2xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.gray_200,
    top: 0,
  },
  selectYourComfortable: {
    top: 65,
    fontSize: FontSize.size_base,
    width: 316,
    left: 0,
  },
  chooseYourRideParent: {
    top: 470,
    left: 29,
    height: 113,
    width: 316,
    position: "absolute",
  },
  skip1: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  skip: {
    top: 1,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    left: 0,
  },
  groupItem: {
    left: 15,
    width: 16,
    backgroundColor: Color.limegreen,
    borderRadius: Border.br_5xs,
    height: 8,
    top: 0,
    position: "absolute",
  },
  groupInner: {
    left: 39,
  },
  rectangleParent: {
    top: 10,
    left: 101,
    width: 47,
    height: 8,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 218,
    width: 50,
    top: 0,
  },
  skipParent: {
    top: 700,
    left: 63,
    width: 268,
  },
  view: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Screen2;

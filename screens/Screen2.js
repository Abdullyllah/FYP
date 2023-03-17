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
        <Text style={styles.chooseYourRide}>Choose your Ride</Text>
        <Text style={[styles.selectYourComfortable, styles.skipPosition]}>
          Select your comfortable and customized ride with variety of choices.
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.skipParent, styles.groupIconLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Screen2")}
      >
        <Text style={[styles.skip, styles.skipPosition]}>Skip</Text>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={styles.groupItem} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group-1408.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  skipPosition: {
    color: Color.gray_100,
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
    position: "absolute",
  },
  groupIconLayout: {
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
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  selectYourComfortable: {
    top: 65,
    fontSize: FontSize.size_base,
    textAlign: "center",
    width: 316,
  },
  chooseYourRideParent: {
    top: 470,
    left: 29,
    height: 113,
    width: 316,
    position: "absolute",
  },
  skip: {
    top: 1,
    fontSize: FontSize.size_mini,
    textAlign: "left",
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
  groupIcon: {
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
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Screen2;

import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Pressable,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Screen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <StatusBar barStyle="default" />
      <TouchableOpacity
        style={[styles.skipParent, styles.groupIconLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Screen1")}
      >
        <Text style={[styles.skip, styles.skipClr]}>Skip</Text>
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
      <View style={styles.selectLocationParent}>
        <Text style={[styles.selectLocation, styles.getEasyAccessFlexBox]}>
          Select Location
        </Text>
        <Text
          style={[
            styles.getEasyAccess,
            styles.getEasyAccessFlexBox,
            styles.skipClr,
          ]}
        >
          Within the University of Quaid-i-Azam University Islamabad, get easy access to a wide range of locations with ease.
        </Text>
      </View>
      <Image
        style={styles.child}
        resizeMode="cover"
        source={require("../assets/group-1417.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    height: 26,
    position: "absolute",
  },
  skipClr: {
    color: Color.gray_100,
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
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
  getEasyAccessFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  skip: {
    top: 1,
    fontSize: FontSize.size_mini,
    textAlign: "left",
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
  selectLocation: {
    left: 40,
    fontSize: FontSize.size_2xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.gray_200,
    top: 0,
  },
  getEasyAccess: {
    top: 65,
    fontSize: FontSize.size_base,
    width: 243,
  },
  selectLocationParent: {
    top: 470,
    left: 66,
    height: 113,
    width: 243,
    position: "absolute",
  },
  child: {
    height: "46.76%",
    width: "110.5%",
    top: "13.92%",
    right: "-10.5%",
    bottom: "39.33%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  view: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Screen1;

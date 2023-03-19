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

const Screen3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <StatusBar barStyle="default" />
      <Image
        style={styles.child}
        resizeMode="cover"
        source={require("../assets/group-1419.png")}
      />
      <View style={styles.enjoyYourRideParent}>
        <Text style={[styles.enjoyYourRide, styles.yourFlexBox]}>
          Enjoy your Ride
        </Text>
        <Text style={[styles.bookYourCab, styles.skip1Clr, styles.yourFlexBox]}>
          Book your cab and enjoy always available and safe ride with loved
          ones.
        </Text>
      </View>
      <View style={[styles.skipParent, styles.wrapperLayout]}>
        <Pressable
          style={styles.skip}
          onPress={() => navigation.navigate("SingIn")}
        >
          <Text style={[styles.skip1, styles.skip1Clr]}>Skip</Text>
        </Pressable>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={styles.groupItem} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
        <TouchableOpacity
          style={[styles.wrapper, styles.wrapperLayout]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("SingIn")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/group-1408.png")}
          />
        </TouchableOpacity>
      </View>
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
  enjoyYourRide: {
    left: 81,
    fontSize: FontSize.size_2xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.gray_200,
    top: 0,
  },
  bookYourCab: {
    top: 65,
    fontSize: FontSize.size_base,
    width: 324,
    left: 0,
  },
  enjoyYourRideParent: {
    top: 470,
    left: 26,
    height: 113,
    width: 324,
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

export default Screen3;

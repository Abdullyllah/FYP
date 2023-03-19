import * as React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const SignInContainer = ({ onGroupTouchableOpacityPress }) => {
  return (
    <View style={styles.groupParent}>
      <TouchableOpacity
        style={[styles.rectangleParent, styles.groupChildLayout]}
        activeOpacity={0.2}
        onPress={onGroupTouchableOpacityPress}
      >
        <Pressable style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.singIn, styles.singInTypo]}>Sing in</Text>
      </TouchableOpacity>
      <Text style={[styles.alreadyHaveAn, styles.singInTypo]}>
        Already have an account?
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
  singInTypo: {
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
  singIn: {
    top: 11,
    left: 138,
    fontSize: FontSize.size_mid,
    color: Color.darkslateblue_100,
  },
  rectangleParent: {
    top: 37,
  },
  alreadyHaveAn: {
    left: 62,
    fontSize: FontSize.size_sm,
    color: Color.darkslateblue_200,
    top: 0,
  },
  groupParent: {
    top: 703,
    left: 12,
    height: 79,
    width: 335,
    position: "absolute",
  },
});

export default SignInContainer;

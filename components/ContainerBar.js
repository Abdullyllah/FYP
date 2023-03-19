import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ContainerBar = () => {
  return (
    <View style={styles.uiBarsStatusBarsWhite}>
      <Image
        style={[styles.batteryIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/battery.png")}
      />
      <Image
        style={styles.wifiIcon}
        resizeMode="cover"
        source={require("../assets/wifi1.png")}
      />
      <Image
        style={styles.mobileSignalIcon}
        resizeMode="cover"
        source={require("../assets/mobile-signal.png")}
      />
      <View style={styles.timePosition}>
        <Text style={[styles.text, styles.textPosition]}>9:41</Text>
      </View>
      <View style={[styles.timeStyle1, styles.timePosition]}>
        <Image
          style={[
            styles.taskPlatterIcon,
            styles.textPosition,
            styles.iconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/task-platter.png")}
        />
        <Text style={[styles.text, styles.textPosition]}>9:41</Text>
      </View>
      <View style={[styles.timeStyle1, styles.timePosition]}>
        <Image
          style={[
            styles.taskPlatterIcon,
            styles.textPosition,
            styles.iconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/task-platter1.png")}
        />
        <Text style={[styles.text, styles.textPosition]}>9:41</Text>
      </View>
      <View style={[styles.timeStyle1, styles.timePosition]}>
        <Image
          style={[
            styles.taskPlatterIcon,
            styles.textPosition,
            styles.iconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/task-platter2.png")}
        />
        <Text style={[styles.text, styles.textPosition]}>9:41</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  textPosition: {
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  timePosition: {
    left: "5.6%",
    bottom: "25%",
    right: "80%",
    top: "27.27%",
    width: "14.4%",
    height: "47.73%",
    position: "absolute",
  },
  batteryIcon: {
    height: "25.76%",
    width: "6.49%",
    top: "39.39%",
    right: "3.91%",
    bottom: "34.85%",
    left: "89.6%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  text: {
    height: "85.71%",
    top: "9.52%",
    fontSize: FontSize.size_mini,
    letterSpacing: -0.3,
    fontFamily: FontFamily.abyssinicaSILRegular,
    color: Color.white,
    textAlign: "center",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  taskPlatterIcon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_13xl,
  },
  timeStyle1: {
    display: "none",
  },
  uiBarsStatusBarsWhite: {
    top: 0,
    left: 0,
    width: 375,
    height: 44,
    position: "absolute",
  },
});

export default ContainerBar;

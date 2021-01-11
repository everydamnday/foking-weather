import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import propTypes from "prop-types";
import Weatherheader from "./Weatherheader";
import { LinearGradient } from "expo-linear-gradient";

export default function Weather({ temp, condition, cityname, desc }) {
  console.log(condition);
  let weatherOption = ["gradient", "title", "subtitle"];
  switch (condition) {
    case "Thunderstorm": {
      weatherOption["gradient"] = ["#373B44", "#4286f4"];
      weatherOption["title"] = "천둥번개친다";
      weatherOption["subtitle"] = "우르릉 꽝꽝~";
      break;
    }
    case "Rain":
      weatherOption["gradient"] = ["#00C6FB", "#005BEA"];
      weatherOption["title"] = "비온다";
      weatherOption["subtitle"] = "밖에 비온다 주륵주륵";
      break;
    case "Clouds":
      weatherOption["gradient"] = ["#D7D2CC", "#304352"];
      weatherOption["title"] = "흐리다";
      weatherOption["subtitle"] = "울적하군";
      break;
    case "Clear":
      weatherOption["gradient"] = ["#FF7300", "#FEF253"];
      weatherOption["title"] = "맑다";
      weatherOption["subtitle"] = "날씨조타";
      break;
    case "Snow":
      weatherOption["gradient"] = ["#7DE2FC", "#B9B6E5"];
      weatherOption["title"] = "눈이오네";
      weatherOption["subtitle"] = "구름같은";
      break;
    default:
      weatherOption["gradient"] = ["#7DE2FC", "#B9B6E5"];
      weatherOption["title"] = "날씨몰랑";
      weatherOption["subtitle"] = "아몰랑";
      break;
  }
  return (
    <LinearGradient colors={weatherOption["gradient"]} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Weatherheader
        condition={condition}
        temp={temp}
        cityname={cityname}
        desc={desc}
      />
      {/* SUB */}
      <View style={styles.subcontainer}>
        <Text style={styles.title}>{condition}</Text>
        <Text style={styles.subtitle}>{weatherOption["subtitle"]}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
  //   cityname: propTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "white",
    textAlign: "left",
    paddingBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    textAlign: "left",
    color: "white",
  },
});

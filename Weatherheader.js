import React from "react";
import { View, Text, StyleSheet } from "react-native";
import propTypes from "prop-types";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weatherheader({ condition, temp, cityname, desc }) {
  console.log(condition, "icon");
  let iconname = "";
  let iconfamily = "";
  switch (condition) {
    case "Thunderstorm": {
      iconname = "ios-thunderstorm-outline";
      iconfamily = "Ionicons";
      break;
    }
    case "Rain": {
      iconname = "ios-rainy-outline";
      iconfamily = "Ionicons";
      break;
    }
    case "Clouds": {
      iconname = "cloud-outline";
      iconfamily = "Ionicons";
      break;
    }
    case "Clear": {
      iconname = "sunny-outline";
      iconfamily = "Ionicons";
      break;
    }
    case "Snow": {
      iconname = "ios-snow";
      iconfamily = "Ionicons";
      break;
    }
    // case "Drizzle":
    //   iconname =
    case "Tornado": {
      iconname = "weather-tornado";
      iconfamily = "MaterialCommunityIcons";
      break;
    }
    case "Squall": {
      iconname = "weather-pouring";
      iconfamily = "MaterialCommunityIcons";
      break;
    }

    case "Haze": {
      iconname = "dehaze";
      iconfamily = "MaterialCommunityIcons";
      break;
    }

    case ("Mist", "Fog", "Smoke", "Ash", "Dust", "Sand"): {
      iconname = "weather-fog";
      iconfamily = "MaterialCommunityIcons";
      break;
    }

    default:
      break;
  }
  return (
    <View style={styles.headercontainer}>
      <Text style={styles.cityname}>{cityname}</Text>
      <Text style={styles.desc}>{desc}</Text>
      <Text style={styles.temp}>{temp} °</Text>
      {iconfamily === "Ionicons" && (
        <Ionicons name={iconname} size={60} color="white" />
      )}
      {iconfamily === "MaterialCommunityIcons" && (
        <MaterialCommunityIcons name={iconname} size={60} color="white" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headercontainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityname: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
  },
  temp: {
    fontSize: 70,
    paddingBottom: 10,
    color: "white",
  },
  condition: {
    fontSize: 20,
    paddingTop: 10,
    color: "white",
  },
  desc: {
    fontSize: 20,
    paddingBottom: 30,
    color: "white",
  },
});

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import * as Location from "expo-location";
import Loading from "./Loading";
import axios from "axios";
import Weather from "./weather";

const API_KEY = "9b367a33a1bb2126d78622847f45d615";

export default class extends React.Component {
  state = {
    isLoding: true,
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    const {
      main: { temp },
      weather,
      name,
    } = data;
    if ((temp, weather, name)) {
      this.setState({
        isLoding: false,
        temp: temp,
        condition: weather[0].main,
        desc: weather[0].description,
        cityname: name,
      });
    } else {
      this.setState({ isLoding: false });
    }
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoding: false });
    } catch (error) {
      // Alert.alert(
      //   "You need to allow to access your location",
      //   "setting allow, right away"
      // );
    }
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoding, temp, condition, cityname, desc } = this.state;
    return isLoding ? (
      <Loading />
    ) : (
      <Weather
        temp={Math.round(temp)}
        condition={condition}
        cityname={cityname}
        desc={desc}
      ></Weather>
    );
  }
}

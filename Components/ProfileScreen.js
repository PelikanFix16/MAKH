import React from "react";
import MapView from "react-native-maps";
import { PermissionsAndroid } from "react-native";
import Geolocation from "react-native-geolocation-service";

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Maps"
  };

  async componentDidMount() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.loadGeo();
      } else {
        console.log("no perrmissions");
      }
    } catch (err) {
      console.log(err);
    }
  }

  loadGeo = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  render() {
    return <MapView style={{ flex: 1 }} />;
  }
}

export default ProfileScreen;

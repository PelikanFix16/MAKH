import Geolocation from "react-native-geolocation-service";

class Location {
  static GetLocation() {
    return new Promise((res, rej) => {
      Geolocation.getCurrentPosition(res, rej, {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 10000
      });
    });
  }
}

export default Location;

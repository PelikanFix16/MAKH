import React from "react";
import MapView, { Polyline } from "react-native-maps";
import { PermissionsAndroid, Text } from "react-native";
import Geolocation from "react-native-geolocation-service";

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Maps"
  };

  constructor(props) {
    super(props);
    this.state = {
      location: {
        latitude: null,
        longitude: null,
        latitudeDelta: null,
        longitudeDelta: null
      }
    };
  }

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
        this.setState({
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.092,
            longitudeDelta: 0.0421
          }
        });
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  render() {
    const { navigation } = this.props;
    const geo = navigation.getParam("geolocation");

    const polyCords = [
      {
        latitude: this.state.location.latitude,
        longitude: this.state.location.longitude
      },
      {
        latitude: parseFloat(geo.Latitude),
        longitude: parseFloat(geo.Longitude)
      }
    ];
    console.log("POLYLINE");
    console.log(polyCords);

    if (this.state.location.latitude && this.state.location.longitude) {
      return (
        <>
          <MapView style={{ flex: 1 }} region={this.state.location}>
            <Polyline
              coordinates={polyCords}
              strokeColor="#000"
              strokeColors={[
                "#7F0000",
                "#00000000", // no color, creates a "long" gradient between the previous and next coordinate
                "#B24112",
                "#E5845C",
                "#238C23",
                "#7F0000"
              ]}
            />
          </MapView>
        </>
      );
    }
    return (
      <>
        <Text>Loading...</Text>
      </>
    );
  }
}

export default ProfileScreen;

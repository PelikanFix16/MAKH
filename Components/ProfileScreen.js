import React from "react";
import MapView, { Polyline, Marker } from "react-native-maps";
import PropTypes from "prop-types";

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Maps"
  };

  preparePolyCords = (poly) => {
    const data = poly.map((coord) => {
      return { latitude: coord[1], longitude: coord[0] };
    });
    return data;
  };

  render() {
    const { navigation } = this.props;
    const coords = navigation.getParam("geolocation");
    const shop = navigation.getParam("shopLocation");
    const poly = this.preparePolyCords(navigation.getParam("geometry"));

    return (
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.092,
          longitudeDelta: 0.0421
        }}
      >
        <Marker coordinate={coords} title="start" />
        <Marker coordinate={shop} title="end" />
        <Polyline
          coordinates={poly}
          strokeColor="rgba(191, 59, 221, 0.78)"
          strokeWidth={3}
        />
      </MapView>
    );
  }
}

ProfileScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired
  }).isRequired
};

export default ProfileScreen;

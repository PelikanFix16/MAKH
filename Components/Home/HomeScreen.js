import React from "react";
import PropTypes from "prop-types";
import ShopData from "../../API/Fake/ShopData.json";
import ButtonLocation from "./Button";
import Location from "../../Helper/Location";
import LoadGeometryDistance from "../../API/Requests/Geometry";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Moja lokalizacja"
  };

  constructor(props) {
    super(props);
    this.state = {
      preparedData: []
    };
  }

  async componentDidMount() {
    const data = await Location.GetLocation();
    const coords = {
      latitude: data.coords.latitude,
      longitude: data.coords.longitude
    };
    const data1 = await this.prepareData(coords);
    this.setState({
      preparedData: data1
    });
  }

  prepareData = async (myCoords) => {
    const data1 = await Promise.all(
      ShopData.shops.map(async (place) => {
        const myLocation = myCoords;
        const shopLocation = {
          latitude: parseFloat(place.Geolocation.Latitude),
          longitude: parseFloat(place.Geolocation.Longitude)
        };
        const data = await LoadGeometryDistance(myLocation, shopLocation);

        return {
          name: place.name,
          location: place.Location,
          data,
          id: place.id,
          coords: myCoords,
          shopLocation
        };
      })
    );
    return data1;
  };

  render() {
    const { navigation } = this.props;
    const { preparedData } = this.state;

    return preparedData.map((place) => {
      return (
        <ButtonLocation
          name={place.name}
          location={place.location}
          distance={parseFloat((place.data.distance / 1000).toFixed(2))}
          loadNavigate={() => {
            navigation.navigate("Profile", {
              geolocation: place.coords,
              geometry: place.data.geometry,
              shopLocation: place.shopLocation
            });
          }}
          key={place.id}
        />
      );
    });
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default HomeScreen;

import React from "react";
import PropTypes from "prop-types";
import ShopData from "../../API/Fake/ShopData.json";
import ButtonLocation from "./Button";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Moja lokalizacja"
  };

  render() {
    const { navigation } = this.props;

    return ShopData.shops.map((place) => {
      return (
        <ButtonLocation
          name={place.name}
          location={place.Location}
          loadGeo={() =>
            navigation.navigate("Profile", { geolocation: place.Geolocation })
          }
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

import React from "react";
import { Button, Text } from "react-native";
import PropTypes from "prop-types";

const ButtonLocation = ({ name, location, loadGeo }) => {
  return (
    <>
      <Text>
        {name} : {location}
      </Text>

      <Button title="Show more" onPress={loadGeo} />
    </>
  );
};

ButtonLocation.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  loadGeo: PropTypes.func.isRequired
};

export default ButtonLocation;

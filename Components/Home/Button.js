import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import PropTypes from "prop-types";

const ButtonLocation = ({ name, location, distance, loadNavigate }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={loadNavigate}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#800080", "#9932CC", "#BA55D3"]}
          style={styles.button}
        >
          <View style={styles.viewRow}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.textLocation}>{location}</Text>
            <Text style={styles.textDistance}>{distance} km</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    padding: 12
  },
  viewRow: {
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center"
  },

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 15
  },
  text: {
    fontSize: 20,
    color: "#FFFFFF",
    padding: 5
  },
  textLocation: {
    fontSize: 15,
    color: "#FFFFFF",
    padding: 5
  },
  textDistance: {
    fontSize: 17,
    color: "#FFFFFF",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    padding: 5
  }
});

ButtonLocation.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  loadNavigate: PropTypes.func.isRequired
};

export default ButtonLocation;

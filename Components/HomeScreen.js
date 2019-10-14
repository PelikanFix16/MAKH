import React from "react";
import { Button } from "react-native";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Moja lokalizacja"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Pokaz moja lokalizacje"
        onPress={() => navigate("Profile", { name: "Jane" })}
      />
    );
  }
}
export default HomeScreen;

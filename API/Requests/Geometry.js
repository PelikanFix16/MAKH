import axios from "axios";
import env from "react-native-config";

const LoadGeometryDistance = async (startLocation, endLocation) => {
  const startLon = startLocation.longitude;
  const startLat = startLocation.latitude;
  const endLon = endLocation.longitude;
  const endLat = endLocation.latitude;

  const data = await axios.get(
    `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${env.OPEN_ROUTE}&start=${startLon},${startLat}&end=${endLon},${endLat}`
  );
  const distance = data.data.features[0].properties.segments[0].distance;

  const geometry = data.data.features[0].geometry.coordinates;

  return { geometry, distance };
};

export default LoadGeometryDistance;

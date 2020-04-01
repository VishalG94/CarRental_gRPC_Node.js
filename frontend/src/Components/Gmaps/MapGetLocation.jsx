const MapGetLocation = () => {
  var coords = { latitude: "", longitude: "" };
  function success(position) {
    coords.latitude = position.coords.latitude;
    coords.longitude = position.coords.longitude;
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  if (!navigator.geolocation) {
    console.log("Geolocation is not supported by your browser");
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
    console.log(coords);
  }

  return coords;
};

export default MapGetLocation;

const mapSettings = {
  zoom: 14,
  disableDefaultUI: true,
  styles: [
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "poi.park",
      stylers: [{ visibility: "on" }]
    },
    {
      featureType: "poi.park",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    }
  ]
};

const MARKER_USER_CONFIG = {

};

const MARKER_RESTAURANT_CONFIG = {};

export { mapSettings, MARKER_USER_CONFIG, MARKER_RESTAURANT_CONFIG };
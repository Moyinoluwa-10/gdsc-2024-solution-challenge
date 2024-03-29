import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={20}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;

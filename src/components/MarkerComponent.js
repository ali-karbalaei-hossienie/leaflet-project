import { Popup, Marker } from "react-leaflet";

const MarkerComponent = ({ position }) => {
  console.log(position);
  return (
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
};

export default MarkerComponent;

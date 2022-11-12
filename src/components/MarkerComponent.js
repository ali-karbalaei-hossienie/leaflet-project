import { Popup, Marker } from "react-leaflet";

const MarkerComponent = ({ coordinate }) => {
  const coord = Object.values(coordinate);
  return (
    <>
      <Marker position={coord}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </>
  );
};

export default MarkerComponent;

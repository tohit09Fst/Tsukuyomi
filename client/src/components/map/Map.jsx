import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

function Map({ items }) {
  return (
    <MapContainer
      center={items?.length === 1 ? [items[0].latitude, items[0].longitude] : [28.7041, 77.1025]}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {items.length > 1 && <FitMapToBounds items={items} />}
      
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}

// Function to fit map bounds
function FitMapToBounds({ items }) {
  const map = useMap();

  useEffect(() => {
    if (items.length > 1) {
      const bounds = items.map((item) => [item.latitude, item.longitude]);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, items]);

  return null;
}

export default Map;

import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const customIcon = new Icon({
  iconUrl:
    "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png",
  iconSize: [50, 50],
});

export default function Leaflet({ location, draggable, newPosition }: any) {
  const liveLocation = useRef<any>(location);
  const [position, setPosition] = useState<[number, number]>(location);

  const locationUpdated = useMemo(
    () => ({
      dragend() {
        console.log(liveLocation?.current?._latlng.lat);
        console.log(liveLocation?.current?._latlng.lng);

        // send data to parent
        newPosition(
          liveLocation?.current?._latlng.lat,
          liveLocation?.current?._latlng.lng
        );

        if (liveLocation != null) {
          setPosition([
            liveLocation?.current?._latlng.lat,
            liveLocation?.current?._latlng.lng,
          ]);
        }
      },
    }),
    []
  );

  return (
    <MapContainer
      className="m-auto w-2/3 h-96 z-0"
      center={location}
      zoom={10}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {draggable ? (
        // Draggable Marker
        <Marker
          draggable={draggable}
          ref={liveLocation}
          position={position}
          eventHandlers={locationUpdated}
          icon={customIcon}
        >
          <Popup minWidth={90}>نشانگر را روی موقعیت ملک قرار دهید</Popup>
        </Marker>
      ) : (
        // Fixed Marker
        <Marker position={location} icon={customIcon}>
          <Popup minWidth={90}>نشانگر آدرس ملک را نمایش می دهد</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const location = [35.743918, 51.251342]

const customIcon = new Icon({
  iconUrl: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png",
  iconSize: [50, 50]
})

export default function Leaflet() {

  return (
    <MapContainer className="m-auto w-2/3 h-96" center={[location[0], location[1]]} zoom={13} scrollWheelZoom={false}>
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <DraggableMarker />
    </MapContainer>
  )
}

function DraggableMarker() {
  return (
    <Marker
      draggable={true}
      position={[location[0], location[1]]}
      icon={customIcon}
      >
      <Popup minWidth={90}>
        نشانگر آدرس ملک را نمایش می دهد
      </Popup>
    </Marker>
  )
}
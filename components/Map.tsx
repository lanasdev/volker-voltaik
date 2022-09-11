import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import { LatLngExpression } from 'leaflet';

const Map = () => {
    const position = [48.82, 9.205] as LatLngExpression

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-96 w-full md:w-1/2">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>

                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map
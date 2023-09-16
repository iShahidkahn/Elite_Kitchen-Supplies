import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Define the custom icon
const customIcon = new L.Icon({
    iconUrl: '/icons/marker.png',
    iconSize: [32, 32], // Set the icon size
    iconAnchor: [16, 32], // Set the anchor point
    className: 'custom-marker-icon',
});


const Map = () => {
    return (
        <div className='map'>
            <MapContainer center={[51.505, -0.09]} zoom={6} zoomControl={false} scrollWheelZoom={true} style={{ height: 250, width: "100%" }}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]} icon={customIcon}>
                    <Popup>
                        Elite Kitchen and Bathroom Fixtures: Elevate your spaces with stylish, high-quality faucets, sinks, showers, and more.
                    </Popup>
                    <Tooltip>
                        Elite Kitchen and <br /> Bathroom Fixtures
                    </Tooltip>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;

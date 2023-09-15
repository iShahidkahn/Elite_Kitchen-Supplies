import React from 'react';
import GoogleMapReact from 'google-map-react';

interface MarkerProps {
    lat: number;
    lng: number;
    text: string;
}

const AnyReactComponent: React.FC<MarkerProps> = ({ text }) => <div>{text}</div>;

const Map: React.FC = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627,
        },
        zoom: 11,
    };

    return (
        // Important! Always set the container height explicitly
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
            </GoogleMapReact>
        </div>
    );
};

export default Map;

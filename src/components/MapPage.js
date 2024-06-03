import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const MapPage = () => {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyAaJZ-EVA8qebCKsOnk1mDhRpKGcep4ioE"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                { /* You can add markers or other components here */ }
            </GoogleMap>
        </LoadScript>
    );
}

export default MapPage;
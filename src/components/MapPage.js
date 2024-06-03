import React, { useEffect, useRef, useState } from 'react';

const MapPage = () => {
    const mapRef = useRef();
    const [markers, setMarkers] = useState([]);
    const [directionsRenderer, setDirectionsRenderer] = useState(null);
    const [duration, setDuration] = useState('');

    useEffect(() => {
        const loadMap = () => {
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: 46.77, lng: 23.59 },
                zoom: 12,
            });

            setDirectionsRenderer(new window.google.maps.DirectionsRenderer({ map: map }));

            const predefinedPoints = [
                { lat: 46.77, lng: 23.59 },
                { lat: 46.80, lng: 23.60 },
            ];

            predefinedPoints.forEach((point) => {
                const marker = new window.google.maps.Marker({
                    position: point,
                    map: map,
                });

                setMarkers((prevMarkers) => {
                    const updatedMarkers = [...prevMarkers, marker];
                    return updatedMarkers;
                });
            });
        };

        if (!window.google) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAaJZ-EVA8qebCKsOnk1mDhRpKGcep4ioE&libraries=places`;
            document.head.append(script);
            script.addEventListener('load', loadMap);
            return () => script.removeEventListener('load', loadMap);
        } else {
            loadMap();
        }
    }, []);

    useEffect(() => {
        if (markers.length === 2 && directionsRenderer) {
            const directionsService = new window.google.maps.DirectionsService();

            directionsService.route(
                {
                    origin: markers[0].getPosition(),
                    destination: markers[1].getPosition(),
                    travelMode: window.google.maps.TravelMode.DRIVING,
                },
                (result, status) => {
                    if (status === window.google.maps.DirectionsStatus.OK) {
                        directionsRenderer.setDirections(result);
                        // Get the duration of the route
                        const routeDuration = result.routes[0].legs[0].duration.text;
                        setDuration(routeDuration);
                    } else {
                        console.error(`error fetching directions ${result}`);
                    }
                }
            );
        }
    }, [markers, directionsRenderer]);

    return (
        <div>
            <div
                ref={mapRef}
                style={{ width: '400px', height: '400px' }}
            ></div>
            <p>Estimated travel time: {duration}</p>
        </div>
    );
}

export default MapPage;
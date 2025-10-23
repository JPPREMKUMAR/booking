// src/components/PickupDropoffMap.js

import React, { useState, useCallback, useRef } from 'react';
import {
    useJsApiLoader,
    GoogleMap,
    Autocomplete,
    DirectionsService,
    DirectionsRenderer,
} from '@react-google-maps/api';

// IMPORTANT: We need 'places' for Autocomplete and 'geometry' for utility functions
const libraries = ['places', 'geometry'];



// src/components/PickupDropoffMap.js

const containerStyle = {
    width: '100%',
    height: '500px',
    marginBottom: '20px',
    border: '1px solid #ddd',
};

const center = {
    lat: 40.7128, // Default center (New York)
    lng: -74.0060,
};

function PickupDropoffMap() {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [response, setResponse] = useState(null); // Stores Directions response
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');

    // Refs to hold the Autocomplete instance for each input
    const originRef = useRef(null);
    const destinationRef = useRef(null);

    // 1. Load the Google Maps JavaScript API
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.key, // 🔑 REPLACE THIS
        libraries: libraries,
    });

    // 2. Directions Service Callback
    // This runs when the API successfully calculates the route
    const directionsCallback = useCallback((res) => {
        if (res !== null && res.status === 'OK') {
            setResponse(res);
            const leg = res.routes[0].legs[0];
            setDistance(leg.distance.text);
            setDuration(leg.duration.text);
        } else {
            console.error('Directions request failed:', res);
            setResponse(null);
            setDistance('');
            setDuration('');
        }
    }, []);

    // 3. Handle Autocomplete Selection
    const handlePlaceSelect = (ref, setter) => {
        if (ref.current) {
            const place = ref.current.getPlace();
            // Use the address from the selected place
            setter(place.formatted_address);
        }
    };

    // 4. Logic to calculate and render the route
    const calculateRoute = () => {
        if (origin && destination) {
            setResponse(null); // Clear previous route
            // DirectionsService will run automatically when origin/destination change
        }
    };

    // Display loading status
    if (!isLoaded) {
        return <div style={containerStyle}>Loading Maps API...</div>;
    }

    return (
        <div style={{ maxWidth: '800px', margin: '20px auto' }}>
            <h2>📍 Pick-up & Drop-off Service</h2>

            {/* Input Group */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                <Autocomplete onLoad={(autoC) => (originRef.current = autoC)} onPlaceChanged={() => handlePlaceSelect(originRef, setOrigin)}>
                    <input
                        type="text"
                        placeholder="Pick-up Location (Origin)"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        style={{ padding: '10px', flexGrow: 1, border: '1px solid #ccc' }}
                    />
                </Autocomplete>

                <Autocomplete onLoad={(autoC) => (destinationRef.current = autoC)} onPlaceChanged={() => handlePlaceSelect(destinationRef, setDestination)}>
                    <input
                        type="text"
                        placeholder="Drop-off Location (Destination)"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        style={{ padding: '10px', flexGrow: 1, border: '1px solid #ccc' }}
                    />
                </Autocomplete>
            </div>

            <button onClick={calculateRoute} disabled={!origin || !destination} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '15px' }}>
                Calculate Route
            </button>

            {/* Results Display */}
            {(distance || duration) && (
                <div style={{ border: '1px solid #007bff', padding: '10px', marginBottom: '15px', borderRadius: '4px', backgroundColor: '#e6f0ff' }}>
                    <p>🚗 **Total Distance:** {distance}</p>
                    <p>⏱️ **Estimated Duration:** {duration}</p>
                </div>
            )}

            {/* Google Map */}
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                {/*
          DirectionsService is used to calculate the route.
          It runs whenever its 'options' (origin, destination) change.
        */}
                {origin && destination && (
                    <DirectionsService
                        options={{
                            origin: origin,
                            destination: destination,
                            travelMode: 'DRIVING',
                        }}
                        callback={directionsCallback}
                    />
                )}

                {/* DirectionsRenderer is used to draw the calculated route on the map.
          It only runs if 'response' is set by the callback above.
        */}
                {response !== null && (
                    <DirectionsRenderer
                        options={{
                            directions: response,
                        }}
                    />
                )}
            </GoogleMap>
        </div>
    );
}

export default PickupDropoffMap;
import React, { useState } from 'react';
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';

// IMPORTANT: Specify the 'places' library in a separate variable
const libraries = ['places'];

function SimpleAddressInput() {
    const [autocomplete, setAutocomplete] = useState(null);
    const [address, setAddress] = useState('');
    const [coordinates, setCoordinates] = useState(null);

    // 1. Load the Google Maps JavaScript API with the Places library
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // 🔑 REPLACE THIS
        libraries: libraries,
    });

    // 2. Callback when the Autocomplete instance is loaded
    const onLoad = (autoC) => {
        setAutocomplete(autoC);
    };

    // 3. Callback when a place is selected from the dropdown
    const onPlaceChanged = () => {
        if (autocomplete) {
            const place = autocomplete.getPlace();

            // Extract the key data
            const newAddress = place.formatted_address || place.name;
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();

            setAddress(newAddress);
            setCoordinates({ lat, lng });

            console.log('Selected Address:', newAddress);
            console.log('Coordinates:', { lat, lng });
        }
    };

    if (!isLoaded) {
        return <div>Loading Maps API...</div>;
    }

    return (
        <div style={{ maxWidth: '400px', margin: '20px auto' }}>
            <h2>Google Maps Autocomplete</h2>

            {/* The Autocomplete wrapper is the key */}
            <Autocomplete
                onLoad={onLoad}
                onPlaceChanged={onPlaceChanged}
            >
                <input
                    type="text"
                    placeholder="Start typing an address..."
                    value={address}
                    // The input's value is controlled by the user typing, but the state is updated on selection
                    onChange={(e) => setAddress(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '4px'
                    }}
                />
            </Autocomplete>

            {coordinates && (
                <div style={{ marginTop: '15px', padding: '10px', border: '1px solid #eee' }}>
                    <p><strong>Formatted Address:</strong> {address}</p>
                    <p><strong>Latitude:</strong> {coordinates.lat}</p>
                    <p><strong>Longitude:</strong> {coordinates.lng}</p>
                </div>
            )}
        </div>
    );
}

export default SimpleAddressInput;
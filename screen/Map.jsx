import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native-web';
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';

const Map = () => {

  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({
    lat: -32.48126178668649, 
    lng: -58.23799059771199
  })


  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyC_CYgMyfzarRAeDH5qjShSAfnjRP4MhdY',
    libraries: ['places']
  })

  const containerStyle = {
    width: '100%',
    height: '92vh',
    marginTop: '0px'
  };

  const [mostrarInfo, setMostrarInfo] = useState(false)


  return (
    <View >
        {isLoaded && 
          <GoogleMap
            mapContainerStyle={containerStyle}
            className="contianer-maps"
            center={center}
            zoom={16}
            options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
            }}
            onLoad={map => setMap(map)}
            >
              <Marker
                    position={center}
                    zoom={16}
                    onClick={() => setMostrarInfo(!mostrarInfo)}
                  />
              
            </GoogleMap>}
    </View>
  )
}


export default Map;
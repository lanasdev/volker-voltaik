import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A'
});

const MapNew = () => {
    return (
        <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: '100vh',
                width: '50vw'
            }}
        >
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
            </Layer>
        </Map>
    )
}

export default MapNew
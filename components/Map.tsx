import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoibGFuYXNkZXYiLCJhIjoiY2t2YTBuaDdiMGFoODJwcGd3cWQ3ZnJydSJ9.HlBr2HZZkJ1gJdTgiFT-CA';


const Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(9.176);
    const [lat, setLat] = useState(48.78);
    const [zoom, setZoom] = useState(12);
    const position = [48.82, 9.205]

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom,
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
        // const marker = new mapboxgl.Marker({
        //     color: "#000000",
        //     draggable: true
        // }).setLngLat([48.7128776, 9.2924396]).addTo(map.current);
    });
    // useEffect(() => {
    //     if (!map.current) return; // wait for map to initialize

    //     map.current.on('click', (event) => {
    //         const features = map.queryRenderedFeatures(event.point, {
    //             layers: ['chicago-parks']
    //         });
    //         if (!features.length) {
    //             return;
    //         }
    //         const feature = features[0];

    //         const popup = new mapboxgl.Popup({ offset: [0, -15] })
    //             .setLngLat(feature.geometry.coordinates)
    //             .setHTML(
    //                 `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
    //             )
    //             .addTo(map.current);
    //     });
    // });
    return (
        <div className='relative'>
            <div className="sidebar text-white absolute top-0 left-0 m-3 rounded py-2 px-4 bg-cyan-600/75 z-10">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container w-50screen h-96" />
        </div>
    )
}

export default Map
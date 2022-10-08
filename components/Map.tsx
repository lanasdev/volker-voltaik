// import React, { useRef, useEffect, useState } from 'react'
import "mapbox-gl/dist/mapbox-gl.css";

import { Component, useState } from "react";
import Map, {
  FullscreenControl,
  Marker,
  NavigationControl,
} from "react-map-gl";

const ReactMap = () => {
  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  console.log(accessToken);

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 48.79,
    longitude: 9.2,
    zoom: 10,
  });
  const MarkerData = [
    {
      id: 1,
      latitude: 48.79,
      longitude: 9.2,
      name: "Volker Voltaik GmbH",
    },
  ];
  return (
    <Map
      initialViewState={{
        longitude: 49,
        latitude: 9,
        zoom: 4,
      }}
      reuseMaps={true}
      style={{ width: "100%", height: "32em" }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={accessToken}
      onMove={(evt) =>
        setViewport({
          width: "100vw",
          height: "100vh",
          latitude: evt.viewState.latitude,
          longitude: evt.viewState.longitude,
          zoom: evt.viewState.zoom,
        })
      }
      {...viewport}
    >
      <FullscreenControl />
      <NavigationControl />
      <Marker
        key={MarkerData[0].id}
        latitude={MarkerData[0].latitude}
        longitude={MarkerData[0].longitude}
        color="#FFB70A"
        aria-label="Volker Voltaik GmbH"
      />
    </Map>
  );
};

export default ReactMap;

import React from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const markers = [
  { markerOffset: -20, name: "Santa Barbara", coordinates: [-119.6982, 34.4208] },
  //add more if needed
];

const MapChart = () => {
  return (
    <ComposableMap projection="geoAlbersUsa" style={{height:"100%", width: "100%"}}>
      <Geographies geography={geoUrl}>
        {({ geographies, outline, borders }) => (
          <>
            <Geography geography={outline} fill="#36198b" />
            <Geography geography={borders} fill="none" stroke="#9182e0" />
          </>
        )}
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates} id={name}>
          <circle r={15} fill="#E42A1D" stroke="#fff" strokeWidth={1.5} />
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;

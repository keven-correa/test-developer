import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import { Form } from "./Form";

const containerStyle = {
  width: "1200px",
  height: "650px",
};

const center = {
  lat: 18.45218667158892,
  lng: -69.95037806998467,
};

const OPTIONS = {
  minZoom: 4,
  maxZoom: 18,
};

function MyComponent(props) {
  const { initialSpeed } = props;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDmDGFxb7cKh8gd-vfMAs1P3LCtHf9TPhs",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  //   function fetchData(){
  //     fetch("http://localhost:3000/vehicle").then(res => res.json())

  //   }
  const markers = [
    {
      id: 1,
      name: "Chicago, Illinois",
      position: { lat: 41.881832, lng: -87.623177 },
    },
    {
      id: 2,
      name: "Denver, Colorado",
      position: { lat: 39.739235, lng: -104.99025 },
    },
    {
      id: 3,
      name: "Los Angeles, California",
      position: { lat: 34.052235, lng: -118.243683 },
    },
    {
      id: 4,
      name: "New York, New York",
      position: { lat: 40.712776, lng: -74.005974 },
    },
  ];

  type resultProps = {
    ficha: string;
    lat: string;
    long: string;
    speed: number;
  };
  const [activeMarker, setActiveMarker] = useState(null);
  const [res, setResult] = useState<resultProps[]>([]);
  const [data, setData] = useState<resultProps>();

  //   const fetchBySpeed = async (speed: number) => {
  //     const response = await fetch(`http://localhost:3000/vehicle/${speed}`)
  //     const data = await response.json();
  //     console.log(data);
  //   }
  //   useEffect(() => {
  //     const fetchdata = async() => {
  //         const result = await fetchBySpeed()
  //     }
  //   })
  useEffect(() => {
    const apirest = async () => {
      const data = await fetch("http://localhost:3000/vehicle", {
        method: "GET",
      });

      const jsonData = await data.json();
      console.log(jsonData);
      setResult(jsonData);
    };
    apirest();
  }, []);
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    // markers.forEach(({ position }) => bounds.extend(position));
    console.log(res);
    res.forEach((value) =>
      bounds.extend({ lat: parseFloat(value.lat), lng: parseFloat(value.long) })
    );
    map.fitBounds(bounds);
  };

  const onPlacesChanged = () => console.log(this.searchBox.getPlaces());

  return isLoaded ? (
    //   mapContainerStyle={containerStyle}
    //   center={center}
    //   onLoad={onLoad}
    //   onUnmount={onUnmount}
    //   options={OPTIONS}
    // >
    //   <Marker position={center}></Marker>
    // </GoogleMap>

    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "90vw", height: "80vh" }}
    >
      {res?.map(({ ficha, lat, long, speed }) => {
        if (speed > initialSpeed) {
          return (
            <Marker
              key={ficha}
              position={{ lat: parseFloat(lat), lng: parseFloat(long) }}
              onClick={() => handleActiveMarker(ficha)}
            >
              {activeMarker === ficha ? (
                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                  <h3 className="text">
                    {[`${ficha}, ${lat}, ${long}, ${speed}`]}
                  </h3>
                </InfoWindow>
              ) : null}
            </Marker>
          );
        }
      })}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);

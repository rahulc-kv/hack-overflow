import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { useSelector } from 'react-redux';
import { RootState } from '@store/reducers';
import { heatMap } from './constants';
import { heatMapLayerConfig, pointsLayerConfig } from './configs';
import { useNavigate } from 'react-router-dom';

const Map = () => {
  const [markerAdded, setMarkerAdded] = useState(null);
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map>(null);

  const { events } = useSelector(
    (state: RootState) => state.rootReducer.eventsReducer
  );

  const navigate = useNavigate();

  // eslint-disable-next-line max-len
  mapboxgl.accessToken =
    'pk.eyJ1IjoicmFodWxrZXl2YWx1ZSIsImEiOiJjbDdiaGhoN3AwM2N1M29vbDA1cXgwNTkzIn0.QVrt-X7w62CXdJYVJ6WxvA';

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [76.34127822976814, 10.016287638341907],
      // center: [-150.4048, 63.1224],
      zoom: 6,
      projection: { name: 'globe' }
    });

    map.current.on('style.load', () => {
      map.current.setFog({}); // Set the default atmosphere style
    });

    map.current.on('wheel', () => {
      if (map.current.getZoom() >= 10) {
        if (
          document.querySelectorAll('[id=heat-map-marker-event]')?.length === 0
        ) {
          for (const event of events) {
            // create a HTML element for each feature
            const el = document.createElement('div');
            el.className = 'marker';
            el.id = 'heat-map-marker-event';
            el.addEventListener('click', () => {
              setMarkerAdded(event.properties.id);
            });
            // make a marker for each feature and add it to the map
            new mapboxgl.Marker(el)
              .setLngLat(event.geometry.coordinates as [number, number])
              .setPopup(
                new mapboxgl.Popup({ offset: 25 }) // add popups
                  .setHTML(
                    `<div id=${event.properties.id}>
                    <h3 class="event-title">${event.properties.title}</h3>
                    <p class="text-davyGrey">${event.properties.description}</p>
                    <div>`
                  )
              )
              .addTo(map.current);
          }
        }
      } else {
        const el = document.querySelectorAll('[id=heat-map-marker-event]');
        if (el?.length > 0) {
          Array.from(el).map(item => {
            item.remove();
          });
        }
      }
    });

    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true,
        showAccuracyCircle: true,
        showUserLocation: true
      })
    );

    map.current.on('load', () => {
      // Add a geojson point source.
      // Heatmap layers also work with a vector tile source.
      map.current.addSource('events', {
        type: 'geojson',
        data: heatMap as any
      });

      map.current.addLayer(heatMapLayerConfig as any, 'waterway-label');
      map.current.addLayer(pointsLayerConfig as any, 'waterway-label');
    });
  }, []);

  useEffect(() => {
    if (markerAdded) {
      document
        .getElementById(markerAdded)
        ?.addEventListener('click', () => onCardClick(markerAdded));
    }
  }, [markerAdded]);

  const onCardClick = markerId => {
    navigate(`/event-details/${markerId}`);
  };

  return (
    <div>
      Map
      <div ref={mapContainer} className="h-[600px]" />
    </div>
  );
};

export default Map;

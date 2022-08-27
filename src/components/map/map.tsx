import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { useSelector } from 'react-redux';
import { RootState } from '@store/reducers';
import { heatMap } from './constants';
import { heatMapLayerConfig, pointsLayerConfig } from './configs';

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map>(null);

  const { events } = useSelector(
    (state: RootState) => state.rootReducer.eventsReducer
  );

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
      zoom: 6
    });

    map.current.on('style.load', () => {
      map.current.setFog({}); // Set the default atmosphere style
    });

    map.current.on('wheel', () => {
      if (map.current.getZoom() >= 7) {
        for (const event of events) {
          // create a HTML element for each feature
          const el = document.createElement('div');
          el.className = 'marker';
          el.id = 'heat-map-marker-event';

          // make a marker for each feature and add it to the map
          new mapboxgl.Marker(el)
            .setLngLat(event.geometry.coordinates as [number, number])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(
                  `<h3>${event.properties.title}</h3><p>${event.properties.description}</p>`
                )
            )
            .addTo(map.current);
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

  return (
    <div>
      Map
      <div ref={mapContainer} className="h-[600px]" />
    </div>
  );
};

export default Map;

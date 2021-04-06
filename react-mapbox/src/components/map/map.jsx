import react, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

import * as cities from '../data/cities.json';

export default props => {
    const [viewport, setViewport] = useState({
        width: '400px',
        height: '400px',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 4,
    })

    return(
        <div>
            <ReactMapGL
                {...viewport}
                mapStyle="mapbox://styles/antoniokot/ckmmc4xhd0pz217pkj3ttoglz"
                onViewportChange={nextViewPort => setViewport(nextViewPort)}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            >
                {cities.features.map(city => (
                    <Marker
                        key={city.rank}
                        latitude={city.latitude}
                        longitude={city.longitude}
                    >
                        <button className="marker-btn">
                            <img src="./city.svg" alt="city"/>
                        </button>
                    </Marker>
                    
                    ))
                }
            </ReactMapGL>
        </div>
    );
}
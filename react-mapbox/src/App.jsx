import './App.css';

import React from 'react';

import Card from './components/layout/Card.jsx';
import Primeiro from './components/Primeiro.jsx';
import Segundo from './components/Segundo.jsx';

import Map from './components/map/map.jsx';
import 'mapbox-gl/dist/mapbox-gl.css';

export default props => (

    <div className="App">
        <Card titulo="Um título muito legal">
            <Primeiro />
        </Card>

        <Card titulo="Um segundo título muito legal">
            <Segundo />
        </Card>

        <Map></Map>
    </div>
      
);
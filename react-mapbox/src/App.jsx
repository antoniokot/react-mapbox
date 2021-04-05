import './App.css';

import React from 'react';

import Card from './components/layout/Card.jsx';
import Primeiro from './components/Primeiro.jsx';
import Segundo from './components/Segundo.jsx';

export default props => (

    <div className="App">
        <Card titulo="Um título muito legal">
            <Primeiro />
        </Card>

        <Card titulo="Um segundo título muito legal">
            <Segundo />
        </Card>
    </div>

    
);
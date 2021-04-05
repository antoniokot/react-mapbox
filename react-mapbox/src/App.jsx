import './App.css';

import React from 'react';

import Card from './components/layout/Card.jsx';
import Title from './components/Title.jsx';
import Conteudo from './components/Conteudo.jsx';

export default props => (

    <div className="App">
        <Card titulo="Um título muito legal">
            <Conteudo conteudo="Aqui vai o conteúdo" />
        </Card>

        <Card titulo="Um segundo título muito legal">
            <Conteudo conteudo="Aqui vai o conteúdo" />
        </Card>
    </div>

    
);
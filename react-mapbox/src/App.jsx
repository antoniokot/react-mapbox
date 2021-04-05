import './App.css';

import React from 'react';

import Title from './components/Title.jsx';
import Conteudo from './components/Conteudo.jsx';

export default props => (

    <div className="App">
        <Title title="Título" subtitle="Subtítulo" />
        <Conteudo conteudo="Aqui vai o conteúdo" />
    </div>

);
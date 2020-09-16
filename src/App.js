import React from 'react';
import './css/meuCorpinho.css';
import PnlTitulo from './Components/PnlTitulo.js';
import PnlOpcoes from './Components/PnlOpcoes.js';
import AreaDeTrabalho from './Components/AreaDeTrabalho.js';
import PnlRodape from './Components/PnlRodape.js'

function App() {
  return (
    <div className='meuCorpinho'>
      <PnlTitulo />
      <div className='corpo'>
        <PnlOpcoes />
        <AreaDeTrabalho />
      </div>
      <PnlRodape />
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import '../css/pnlOpcoes.css'
import BtnMenu from './BtnMenu.js';


class PnlOpcoes extends Component {
  render() {

    const opcoesDoMenu = [
      {
        nome: 'Cadastro',
        Ajuda: 'Essa opções é usada para cadastrar os treco da empresa!'
      },
      {
        nome: 'Vendas',
        Ajuda: 'Aquí você vai poder registrar suas vendas.'
      },
      {
        nome: 'Compras',
        ajuda: 'Cadastre suas compras e tenha melhor controle sobre seu estoque'
      },
    ]

    return (
      <section className='pnlOpcoes'>
        {opcoesDoMenu.map((opcoes) => <BtnMenu name={opcoes.nome} />)}
      </section>
    );
  }
}

export default PnlOpcoes;

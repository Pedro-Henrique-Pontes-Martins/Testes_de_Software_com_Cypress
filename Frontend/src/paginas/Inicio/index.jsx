import React from 'react';
import ilustracaoBanner from 'assets/ilustracao-banner.svg';
import estilos from './Inicio.module.css';
import presente from 'assets/presente.svg';
import saque from 'assets/saque.svg';
import estrela from 'assets/estrela.svg';
import dispositivo from 'assets/dispositivo.svg';

export default function Inicio() {
  return (
    <>
      <div className={estilos.container} data-test="container">
        <div className={estilos.conteudo} data-test="conteudo">
          <div className={estilos.banner} data-test="banner">
            <h1 data-test="titulo-principal">
              Experimente mais liberdade no controle da sua vida financeira.
              Crie sua conta com a gente!
            </h1>
            <img
              data-test="image1"
              src={ilustracaoBanner}
              alt="Gráficos e uma pessoa com dinheiro na mão"
            />
          </div>
          <div className={estilos.vantagens} data-test="container-vantagens">
            <h2 data-test="vantagens">Vantagens do nosso banco:</h2>
            <div className={estilos.vantagens__itens} data-test="vantagens_itens">
              <div className={estilos.vantagens__item} data-test="vantagens_itens2">
                <img src={presente} alt="ícone de um presente" data-test="image2"/>
                <h3 data-test="vantagem1">Conta e cartão gratuitos</h3>
                <p data-test="paragrafo1">
                  Isso mesmo, nossa conta é digital, sem custo fixo e mais que
                  isso: sem tarifa de manutenção.
                </p>
              </div>
              <div className={estilos.vantagens__item} data-test="vantagens_itens3">
                <img src={saque} alt="ícone de uma mão segurando um dinheiro" data-test="image3"/>
                <h3 data-test="vantagem2">Saques sem custo</h3>
                <p data-test="paragrafo2">
                  Você pode sacar gratuitamente 4x por mês de qualquer Banco
                  24h.
                </p>
              </div>
              <div className={estilos.vantagens__item} data-test="vantagens_itens4">
                <img src={estrela} alt="ícone de uma estrela" data-test="image4"/>
                <h3 data-test="vantagem3">Programa de pontos</h3>
                <p data-test="paragrafo3">
                  Você pode acumular pontos com suas compras no crédito sem
                  pagar mensalidade!
                </p>
              </div>
              <div className={estilos.vantagens__item} data-test="vantagens_itens5">
                <img
                  data-test="image5"
                  src={dispositivo}
                  alt="ícone de um dispositivo como notebook"
                />
                <h3 data-test="vantagem4">Seguro Dispositivos</h3>
                <p data-test="paragrafo4">
                  Seus dispositivos móveis (computador e laptop) protegidos por
                  uma mensalidade simbólica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

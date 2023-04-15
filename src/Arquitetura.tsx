import { Link } from 'react-router-dom';
import './App'

export function Arquitetura() {
  return (
    <div className="container">
      <h2>Fundamentos de Arquitetura e Organização de Computadores</h2>

      <p>
        Dois conceitos fundamentais no estudo dos sistemas de computação são o
        de Arquitetura e Organização de computadores. O termo arquitetura
        refere-se aos atributos do ponto de vista do programador, e portanto,
        têm impacto direto sobre sobre a execução lógica de um programa. O termo
        organização, refere-se às unidades operacionais e suas interconexões.
        Desta forma, uma mesma arquitetura pode ser implementadas por meio de
        diferentes organizações.
      </p>

      <p>
        As funções básicas de um computador são o processamento de dados,
        armazenamento de dados, transferência de dados e controle. Para
        desempenhar essas funções o computador precisa executar um conjunto de
        instruções (programa). Os computadores que conhecemos são baseados no
        conceito de programa armazenado, introduzido por Von-Neuman. As
        instruções do programa e os dados são armazenados em uma memória, de
        forma que a alteração de um programa consiste na alteração de um
        endereço de memória.
      </p>

      <div className="options">
        <Link to={"/"} className="buttons">Voltar</Link>
        <Link to={"/sistemas_operacionais"} className="buttons">Sistemas Operacionais</Link>
      </div>
    </div>
  );
}

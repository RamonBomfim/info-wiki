import { Link } from "react-router-dom";
import "./App"

export function Sistemas() {
  return (
    <div className="container">
      <h2>O que é um Sistema Operacional?</h2>

      <p>
        O sistema operacional é um software, ou conjunto de softwares, cuja
        função é administrar e gerenciar os recursos de um sistema, desde
        componentes de hardware e sistemas de arquivos a programas de terceiros,
        estabelecendo a interface entre o computador e o usuário.
      </p>
      <p>
        Entenda como um “computador” qualquer máquina de processamento
        automático de dados, como um desktop, notebook ou celular e um console
        de videogame, por exemplo.
      </p>
      <p>
        O sistema operacional introduz uma camada de abstração entre o hardware
        e o usuário, que transforma comandos no mouse, teclado e solicitações do
        sistema, como gerenciamento de recursos (CPU, memória RAM), em linguagem
        de máquina, enviando instruções ao processador.
      </p>
      <p>
        Este último os traduz para código binário, executa os comandos e envia
        as respostas como informações que aparecem na sua tela.
      </p>
      <p>
        Um sistema operacional contém componentes divididos entre os para o
        usuário (como bibliotecas, programas e interface) e as instruções que
        compõem o seu núcleo (kernel).
      </p>

      <div className="options">
        <Link to={"/arquitetura"} className="buttons">Arquitetura de computadores</Link>
        <Link to={"/"} className="buttons">Home</Link>
      </div>
    </div>
  );
}

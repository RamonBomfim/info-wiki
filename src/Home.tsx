import { Link } from "react-router-dom";
import './App.css'

export function Home() {
  return (
    <div className="home">
      <h1>Info Wiki</h1>

      <h4>Olá, seja bem-vindo ao Info Wiki.</h4>

      <span>Escolha sobre qual assunto quer ler:</span>

      <div className="cards">
        <div>
          <h4>Arquitetura e organização de computadores</h4>
          
          <Link to={"arquitetura"} className="links">Clique aqui</Link>
        </div>

        <div>
          <h4>Sistemas Operacionais</h4>
          
          <Link to={"sistemas_operacionais"} className="links">Clique aqui</Link>
        </div>
      </div>
    </div>
  );
}

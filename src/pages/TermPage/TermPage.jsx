import "./TermPage.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../services/Api/Api";

const TermPage = ({ onAccept, onDecline }) => {
  const navigate = useNavigate();
  useEffect(() => {
    Api.get("teste").then((res) => {
      console.log(res.data);
    });
  }, []);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = () => {
    if (isChecked) {
      navigate('/register');
    } else {
      navigate('/');
    }
  };  

  return (
    <div className="term-container">
      <h1>Termo de Compromisso de Amor Eterno</h1>
      <p>
        Eu, Gustavo Assunção, reconheço solenemente o amor que compartilhamos e,
        com todo o meu coração, comprometo-me a:
        <br />
        <br />
        <li>
          Amar a Camis com todo o meu coração, e mesmo que sinta que o amor
          esteja a acabar, lutar para reconquistá-lo.
        </li>
        <li>Assistir a todas as séries, vídeos e tiktoks que ela me mandar.</li>
        <li>
          Encher de amor, carinho, beijinhos e abraços para que nunca falte este
          pão de cada dia.
        </li>
        <li>
          Deixar ela dormir em meus grandes braços mesmo que estejam dormentes.
        </li>
        <li>
          Não ficar mais que 48h sem vê-la, a não ser em caso de viagem, ou
          outro acontecimento que impeça que os dois fiquem grudadinhos.
        </li>
        <li>
          Não gritar com ela, pois ela é sensível e chora fácil (a depender do
          dia ela poderá gritar de volta...).
        </li>
        <li>
          Respeitar a Ariana (vulgo Aurora) e amá-la como filha (ela é a sua
          filha).
        </li>
        <li>
          Não trocá-la por nada, nem ninguém, nem deixá-la de lado em nenhum
          momento.
        </li>
      </p>

      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Concordo
      </label>

      <label>
        <input
          type="checkbox"
          checked={!isChecked}
          onChange={handleCheckboxChange}
        />
        Discordo
      </label>

      <button onClick={handleSubmit}>
        Enviar
      </button>
    </div>
  );
};

export default TermPage;

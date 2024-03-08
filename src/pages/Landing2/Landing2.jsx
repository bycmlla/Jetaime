import React from "react";
import "./Landing2.css";
import MovingButton from "../../components/MovingButton";
import { Link } from "react-router-dom";

const Landing2 = () => {
  return (
    <div className="landing-container">
      <div className="landing-text">
        <h1>
          Antes você terá que assinar um termo de compromisso se quiser
          continuar...
          Para isso, clique <Link className="link" to="/term">aqui</Link>:
        </h1>
      </div>
      <div>
        <MovingButton />
      </div>
    </div>
  );
};

export default Landing2;

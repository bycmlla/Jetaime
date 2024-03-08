import video from "../../assets/video/bgVideo.mp4";
import { Link } from "react-router-dom";
import { Typewriter } from "../../components/Typewriter";

import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="bgContainer">
      <div className="overlay">
        <video src={video} autoPlay loop muted />
        <div className="container">
          <h2 className="wlc">
            <Typewriter text="Oi meu bem, você está chegando em um lugarzinho criado para te fazer sorrir" />
          </h2>
          <button type="submit">
            <Link to="/landing2">adentrar</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

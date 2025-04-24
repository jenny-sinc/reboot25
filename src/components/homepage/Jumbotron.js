import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Jumbotron.css';

function Jumbotron() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/form-feature');
  };

  return (
    <div className="jumbotron">
      <h1 className="jumbotron-title">Ready to level up?</h1>
      <br />
      <p className="jumbotron-text">
        Many of our products offer fantastic colleague benefits & you might be missing out<br />
      </p>
      <br />
      <p className="jumbotron-text">Unlock your benefits now!</p>
      <br />
      <button className="jumbotron-button" onClick={handleButtonClick}>
        Start
      </button>
    </div>
  );
}

export default Jumbotron;
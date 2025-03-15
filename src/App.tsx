import {useEffect, useState} from 'react'
import getoutLogo from '/getout-logo.png'
import epitechLogo from '/epitech-logo.svg'
import './App.css'

function App() {
  const [_, setPassword] = useState("");
  const [valid, setValid] = useState(false);

  useEffect(() => {
      document.cookie = "first_password=4";
      fetch("second_password=8").catch(() => {});
  }, [])

  useEffect(() => {
      const handler = setInterval(() => {
          setValid(false);
      }, 1200);
        return () => clearInterval(handler);
  }, [valid])

  return (
    <>
      <div className="header center">
        <a href="https://www.epitech.eu/ecole-informatique-rennes/" target="_blank">
          <img width={100} src={epitechLogo} className="logo" alt="Epitech Logo" />
        </a>
        <a href="https://rennes.getout.fr/" target="_blank">
          <img src={getoutLogo} className="logo" alt="Get Out logo" />
        </a>
      </div>
      <div className="row-center card">
        <h1>ESCAPE<br/>GAME JAM</h1>
        <p>Entrez le mot de passe:</p>
        <div className="input">
          <input type="text" onSubmit={() => setValid(true)} onChange={(event) => setPassword(event.target.value)}/>
          <button onClick={() => setValid(true)}>Valider</button>
        </div>
        <p className={!valid && "transparent error" || "error"}>Mot de passe incorrect.</p>
      </div>
    </>
  )
}

export default App

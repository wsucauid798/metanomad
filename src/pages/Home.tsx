import { useNavigate } from 'react-router-dom'


import '../App.css'
import { FancyButton } from "../components/FancyButton";


import { SvgBackground } from '../SvgBackground';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <SvgBackground orbitA={150} orbitB={40} scale={1}/>
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        <h1>Welcome, traveler</h1>
        <h2>Here, create your own digital avatar.</h2>
        <div className="card" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <FancyButton text="Start" onClick={() => navigate("/start")} />
        </div>
      </div>
    </>
  )
}

export default Home
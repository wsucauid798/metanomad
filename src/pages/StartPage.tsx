import './StartPage.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SvgBackground } from '../SvgBackground';

function StartPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/question1');
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Clean up on unmount
  }, [navigate]);

  return (
    <div className="start-page">
      <SvgBackground orbitA={150} orbitB={40} scale={1} />
      <div className="content" style={{ position: "relative", zIndex: 1 }}>
        <h1 className="title">Sensing your world...</h1>
        <p className="title multiline">
          Answer questions to capture your geographical location,<br />
          the weather and your emotion.
        </p>
      </div>
    </div>
  )
}

export default StartPage
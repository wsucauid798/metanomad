import { useNavigate } from 'react-router-dom'
import { useState } from 'react';


import './Question.css'
import { FancyButton } from "../components/FancyButton";
import ImageGallery, { images3 } from '../components/ImageGallery';

function Questions() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="screen red-screen">
      <div style={{ position: "relative", zIndex: 1 }}>
        <p className="question-paragraph">Answer a few simple questions
to shape your digital avatar.</p>
        <h1 className="question-title">How do you feel?</h1>
        <div style={{ padding: "30px" }}>
          <ImageGallery images={images3} onSelect={setSelectedId} />
        </div>
        <div className="card" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <FancyButton text="Back" onClick={() => navigate("/question2")} />
            <div style={{ width: "30px" }}></div>
            <FancyButton text="Next" onClick={() => {
              if (selectedId !== null) {
                localStorage.setItem("question3_selectedId", selectedId.toString());
                console.log("Selected ID:", selectedId);
              }
              navigate("/generate");
            }} />
        </div>
      </div>
    </div>
  )
}

export default Questions
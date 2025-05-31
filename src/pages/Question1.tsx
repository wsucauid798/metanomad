import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

import './Question.css'
import { FancyButton } from "../components/FancyButton";
import ImageGallery, { images1 } from '../components/ImageGallery';

function Questions() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="screen green-screen">
      <div style={{ position: "relative", zIndex: 1 }}>
        <p className="question-paragraph">Answer a few simple questions
to shape your digital avatar.</p>
        <h1 className="question-title">Where are you now？</h1>
        <div style={{ padding: "30px" }}>
          <ImageGallery images={images1} onSelect={setSelectedId} />
        </div>
        <div className="card" style={{ display: "flex", 
          justifyContent: "center", alignItems: "center"}}>
            <FancyButton text="Back" onClick={() => navigate("/")} />
            <div style={{ width: "30px" }}></div>
            <FancyButton text="Next" onClick={() => {
              if (selectedId !== null) {
                localStorage.setItem("question1_selectedId", selectedId.toString());
                console.log("Selected ID:", selectedId);
              }
              navigate("/question2");
            }} />
        </div>
      </div>
    </div>
  )
}

export default Questions
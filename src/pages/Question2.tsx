import { useNavigate } from 'react-router-dom'
import { useState } from 'react';


import './Question.css'
import { FancyButton } from "../components/FancyButton";
import ImageGallery, { images2 } from '../components/ImageGallery';

function Questions() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="screen blue-screen">
      <div style={{ position: "relative", zIndex: 1 }}>
        <p className="question-paragraph">Answer a few simple questions
to shape your digital avatar.</p>
        <h1 className="question-title">What is the weather like？</h1>
        <div style={{ padding: "30px" }}>
          <ImageGallery images={images2} onSelect={setSelectedId} />
        </div>
        <div className="card" style={{ display: "flex", 
          justifyContent: "center", alignItems: "center"}}>
            <FancyButton text="Back" onClick={() => navigate("/question1")} />
            <div style={{ width: "30px" }}></div>
            <FancyButton text="Next" onClick={() => {
              if (selectedId !== null) {
                localStorage.setItem("question2_selectedId", selectedId.toString());
                console.log("Selected ID:", selectedId);
              }
              navigate("/question3");
            }} />
        </div>
      </div>
    </div>
  )
}

export default Questions
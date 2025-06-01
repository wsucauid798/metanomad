import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './Question.css';
import { FancyButton } from "../components/FancyButton";
import ImageGallery, { images3 } from '../components/ImageGallery';

function Question3() {
    const navigate = useNavigate();
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [showWarning, setShowWarning] = useState(false);

    const handleNext = () => {
        if (selectedId !== null) {
            localStorage.setItem("question3_selectedId", selectedId.toString());
            navigate("/generate");
        } else {
            setShowWarning(true);
        }
    };

    return (
        <div className="screen red-screen">
            <div style={{ position: "relative", zIndex: 1 }}>
                <p className="question-paragraph">
                    Answer a few simple questions to shape your digital avatar.
                </p>
                <h1 className="question-title">How do you feel?</h1>
                <div style={{ padding: "30px" }}>
                    <ImageGallery images={images3} onSelect={(id) => {
                        setSelectedId(id);
                        setShowWarning(false);
                    }} />
                    <p style={{
                        color: showWarning ? "#f55" : "transparent",
                        marginTop: "10px",
                        textAlign: "center",
                        minHeight: "1.5em",
                        transition: "color 0.2s ease",
                    }}>
                        Please select an option before continuing.
                    </p>
                </div>
                <div className="card" style={{
                    display: "flex", justifyContent: "center", alignItems: "center"
                }}>
                    <FancyButton text="Back" onClick={() => navigate("/question2")} />
                    <div style={{ width: "30px" }} />
                    <FancyButton text="Next" onClick={handleNext} />
                </div>
            </div>
        </div>
    );
}

export default Question3;

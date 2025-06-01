import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './Question.css';
import { FancyButton } from "../components/FancyButton";
import ImageGallery, { images2 } from '../components/ImageGallery';

function Question2() {
    const navigate = useNavigate();
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [showWarning, setShowWarning] = useState(false);

    const handleNext = () => {
        if (selectedId !== null) {
            localStorage.setItem("question2_selectedId", selectedId.toString());
            navigate("/question3");
        } else {
            setShowWarning(true);
        }
    };

    return (
        <div className="screen blue-screen">
            <div style={{ position: "relative", zIndex: 1 }}>
                <p className="question-paragraph">
                    Answer a few simple questions to shape your digital avatar.
                </p>
                <h1 className="question-title">What is the weather like？</h1>
                <div style={{ padding: "30px" }}>
                    <ImageGallery images={images2} onSelect={(id) => {
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
                    <FancyButton text="Back" onClick={() => navigate("/question1")} />
                    <div style={{ width: "30px" }} />
                    <FancyButton text="Next" onClick={handleNext} />
                </div>
            </div>
        </div>
    );
}

export default Question2;

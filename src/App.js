import "./App.css";
import React, { useState, useEffect } from "react";
import datas from "./Utilis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

let obj = datas;

function App() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showDuration, setShowDuration] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const [count, setCount] = useState(obj[index]?.counter);

  useEffect(() => {
    let counterInterval;

    if (!paused && obj[index] && obj[index].counter > 0) {
      counterInterval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount > 1) {
            return prevCount - 1;
          } else {
            clearInterval(counterInterval); // Stop current counter
            const prevIndex = index;
            setIndex((prevIndex) => prevIndex + 1); // Move to next object
            return obj[prevIndex + 1]?.counter; // Set counter of next object or 0 if no more objects
          }
        });
      }, 1000);
    }
    return () => {
      clearInterval(counterInterval);
    };
  }, [index, obj, paused]);

  const handlePause = () => {
    setPaused((prevPaused) => !prevPaused);
  };
  const handleBack = () => {
    setIndex((prevIndex) => {
      if (prevIndex > 0) {
        // const currentObject = obj[prevIndex];
        const initialCount = obj[prevIndex - 1]?.counter || 0;
        setCount(initialCount);
        return prevIndex - 1;
      } else {
        const initialCount = obj[0]?.counter || 0;
        setCount(initialCount);
        return prevIndex;
      }
    });
  };
  const handleExit = () => {
    setPaused(true);
    setShowDuration(true);
    console.log("hook called");
  };
  const remainingMinutes = () => {
    let prevMinutes = 0;

    if (obj[index]) {
      prevMinutes = obj[index].counter;

      for (let i = index + 1; i < obj.length; i++) {
        prevMinutes += obj[i].counter;
      }
    }
    return prevMinutes % 2 === 0
      ? Math.floor(prevMinutes / 2)
      : (prevMinutes / 2).toFixed(1);
  };
  let remainingMinutesText = "";
  if (showDuration) {
    remainingMinutesText = remainingMinutes();
  }
  if (!obj[index]) {
    return ""; // Return empty string if there are no minutes or if index is out of bounds
  }

  const handleResume = () => {
    setShowDuration(false);
    setPaused(false);
  };
  const handleRestart = () => {
    setIndex(0); // Reset the index to 0
    setCount(obj[0]?.counter); //Reset the count to 0
  };
  const handleExitAnyway = () => {
    window.close(); // Close the tab/window
  };
  const handleStart = () => {
    if (index === 0) {
      setPaused(false); // Set paused to false
      setShowDuration(false); // Hide the duration overlay
      setIndex((prevIndex) => prevIndex + 1); // Move to the next object
      setCount(obj[1]?.counter); // Set the count to the next object's counter
    }
  };
  const handleLanguageToggle = (e) => {
    setSelectedLanguage(e.target.textContent);
  };

  return (
    <div className="App">
      {obj[index] && (
        <div className="d-flex flex-column align-items-center justify-content-between vh-100">
          <div className="container-text p-4">
            {/* heading */}
            <h1 className="heading text-center">
              {selectedLanguage === "English"
                ? obj[index].header?.English
                : obj[index].header?.Tamil}
            </h1>
            {/* paragraph */}
            <p className="paragraph text-center mt-4">
              {selectedLanguage === "English"
                ? obj[index].text?.English
                : obj[index].text?.Tamil}
            </p>
          </div>
          {obj[index].id === 200 ? (
            <div>
              <button onClick={handleLanguageToggle}>{obj[index].lang1}</button>
              <button onClick={handleLanguageToggle}>{obj[index].lang2}</button>
            </div>
          ) : obj[index].id === 208 ? (
            <div>
              <h6 className="counter">
                {selectedLanguage === "English"
                  ? obj[index].textWord?.English
                  : obj[index].textWord.Tamil}
              </h6>
            </div>
          ) : (
            <div>
              <h6 className="counter">{count}</h6>
            </div>
          )}

          {index === obj.length - 1 ? (
            <>
              <button onClick={handleRestart}>
                {selectedLanguage === "English" ? "Restart" : "மீண்டும் தொடங்க"}
              </button>
              <button onClick={handleExit}>
                {selectedLanguage === "English" ? "Exit" : "வெளியேறு"}
              </button>
            </>
          ) : index === 0 ? (
            <button onClick={handleStart}>
              {selectedLanguage === "English" ? "Start" : "தொடக்கம்"}
            </button>
          ) : (
            <div className="d-flex justify-content-between vw-100">
              <button
                className="btn btn-dark bg-black btn-hover-blue btn-back"
                onClick={handleBack}
              >
                <FontAwesomeIcon icon={faBackward} />
              </button>
              <button
                className="btn btn-dark bg-black btn-hover-blue btn-continue"
                onClick={handlePause}
              >
                {paused
                  ? selectedLanguage === "English"
                    ? "Continue"
                    : "தொடர்க"
                  : selectedLanguage === "English"
                  ? "Pause"
                  : "இடைநிறுத்து"}
              </button>
              <button className="exit btn btn btn-danger" onClick={handleExit}>
                {selectedLanguage === "English" ? "Exit" : "வெளியேறு"}
              </button>
            </div>
          )}
        </div>
      )}
      {showDuration && (
        <div className="overlay">
          <div className="container">
            <div>
              <p>
                {selectedLanguage === "English"
                  ? '[Jesus] said... "So were you not able to watch with Me for ' +
                    remainingMinutesText +
                    ' more minutes]? Watch and pray that you may not enter into temptation. The spirit is willing, but the flesh is weak." (Matt. 26:40b-41)'
                  : 'இயேசு கூறினதாவது "உங்களால் [' +
                    remainingMinutesText +
                    ' நிமிடங்கள்] என்னோடுகூட விழிப்பாயிருக்க முடியவில்லையா? நீங்கள் சோதனைக்குள்ளாகாதபடி விழிப்பாயிருந்து ஜெபம்பண்ணுங்கள். ஆவி சித்தமாயிருக்கிறது. ஆனால் மாம்சம் பலவீனமாயிருக்கிறது" (மத். 26:40-41)'}
              </p>
            </div>
            <div>
              <div className="exitbg">
                <div className="buttons">
                  <button onClick={handleResume}>
                    {selectedLanguage === "English" ? "Resume" : "தொடர்க"}
                  </button>
                  <button onClick={handleExitAnyway}>
                    {selectedLanguage === "English"
                      ? "Exit anyway"
                      : "மேலும் வெளியேறுக"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

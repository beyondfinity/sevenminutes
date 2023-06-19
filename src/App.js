import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showDuration, setShowDuration] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const obj = [
    {
      id: 200,
      header: {
        English: `7 Minutes With The Lord,`,
        Tamil: `கர்த்தருடன் 7 நிமிடங்கள்`,
      },
      lang1: "English",
      lang2: "Tamil",
      counter: 0,
    },
    {
      id: 201,
      header: {
        English: "Calling on the Name of the Lord",
        Tamil: "கர்த்தருடைய நாமத்தை நோக்கி கூப்பிடுதல்",
      },
      text: {
        English: `Calling on the Name of the Lord to set our mind
        on the spirit – 1 Cor.12:3; Rom. 8:6; 10:12-13`,
        Tamil: `ஆவியின்மீது நம் மனதை பொருத்த
        கர்த்தருடைய நாமத்தை நோக்கி கூப்பிடுதல் –
        1 கொரி. 12:3, ரோ. 8:6; 10:12-13`,
      },
      counter: 3,
    },
    {
      id: 202,
      header: { English: `Praying`, Tamil: `ஜெபித்தல்` },
      text: {
        English: `Opening our heart, softening our heart and emptying
      ourselves.Telling Him that we love Him - 2 Cor.3:16; Psa. 62.8`,
        Tamil: `நம் இருதயத்தை திறந்து, நம் இருதயத்தை
        மிருதுவாக்கி, நம்மைநாமே
        வெறுமையாக்குதல். நாம் அவரை
        நேசிக்கிறோம் என்று அவரிடம் கூறுதல் – 2
        கொரி. 3:16; சங். 62:8`,
      },

      counter: 5,
    },

    {
      id: 203,
      header: { English: `Pray-reading`, Tamil: `ஜெப-வாசிப்பு` },
      text: {
        English: `Using our exercised spirit to pray over a verse or two. Turning
      the verses into a personal prayer - Eph.6:17-18;2 Tim.3:16`,
        Tamil: `நம் பயிற்றுவிக்கப்பட்ட ஆவியை பயன்படுத்தி
      ஒன்று அல்லது இரண்டு வசனத்தை
      ஜெபித்தல். வசனங்களை தனிப்பட்ட
      ஜெபமாக மாற்றுதல் – எபே. 6:17-18; 2
      தீமோ. 3:16`,
      },
      counter: 4,
    },
    {
      id: 204,
      header: { English: `Confession`, Tamil: `அறிக்கையிடுதல்` },
      text: {
        English: `Confessing the sins and offenses on our conscience and removing
      all blockages to fellowship.Asking for forgiveness and
      cleansing-1 John 1:7,9; Psa.66:18; Isa.59:1-2`,
        Tamil: `நம் மனச்சாட்சியில் இருக்கும் பாவங்களையும்,
      குற்றங்களையும் அறிக்கைசெய்து,
      ஐக்கியத்திற்கான எல்லா தடைகளையும்
      அகற்றுதல். மன்னிக்கப்படும்படியும்
      கழுவப்படும்படியும் கேட்குதல் – 1 யோவான்
      1:7, 9; சங். 66:18; ஏசா. 59:1-2`,
      },
      counter: 5,
    },
    {
      id: 205,
      header: { English: `Consecration`, Tamil: `அர்ப்பணித்தல்` },
      text: {
        English: `Presenting ourselves to the Lord afresh, giving
      Him the full ground in us – Rom. 12:1-2; 6:13,19;
      Mark 12:30`,
        Tamil: `கர்த்தருக்கு நம்மையே பசுமையாக
         ஒப்புக்கொடுத்து, நம்மில் முழு தளத்தை
         அவருக்கு கொடுத்தல் – ரோ. 12:1-2; 6:13, 19;
         மாற். 12:30`,
      },
      counter: 3,
    },
    {
      id: 206,
      header: { English: `ThanksGiving`, Tamil: `நன்றிக்கூறுதல்` },
      text: {
        English: ` Giving thanks for all things; for all the persons, situations
      and things in your life and praising Him -Eph.5:20; 1 Thes.5:18`,
        Tamil: `எல்லா காரியங்களுக்காகவும் நன்றி
     செலுத்துதல்; எல்லா நபர்களுக்காகவும்,
     சூழ்நிலைகளுக்காகவும், உன் வாழ்க்கையில்
     உள்ள காரியங்களுக்காகவும் அவரை துதித்தல்
     – எபே. 5:20; 1 தெச. 5:18`,
      },

      counter: 5,
    },
    {
      id: 207,
      header: { English: "Petition", Tamil: `விண்ணப்பித்தல்` },
      text: {
        English: `Asking the Lord for needs,growth and persons that need salvation
      - 1 Tim.2:1:Eph.6:18;Matt.7:7; Psa.143:8`,
        Tamil: `தேவைக்காகவும், வளர்ச்சிக்காகவும்,
        இரட்சிப்பு தேவைப்படுகிற நபர்களுக்காகவும்
        கர்த்தரிடம் கேட்குதல் – 1 தீமோ. 2:2; எபே.
        6:18; மத். 7:7; சங். 143:8`,
      },
      counter: 4,
    },
    {
      id: 208,
      header: { English: `End`, Tamil: `முடிவு` },
      textWord: { English: `Hallelujah`, Tamil: `அல்லேலூயா` },
      counter: 0,
    },
  ];

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
  // const handleLanguageToggle = (e) => {
  //   console.log(e.target.value);
  //   // const selectedLanguage = e.target.value;
  //   // setSelectedLanguage(selectedLanguage);
  // };
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
        <div className="text-container">
          <div className="flex-container">
            <div>
              <h1>
                {selectedLanguage === "English"
                  ? obj[index].header?.English
                  : obj[index].header?.Tamil}
              </h1>
              <p>
                {selectedLanguage === "English"
                  ? obj[index].text?.English
                  : obj[index].text?.Tamil}
              </p>
            </div>
            {obj[index].id === 200 ? (
              <div className="lang-btn">
                <button className="eng-btn" onClick={handleLanguageToggle}>
                  {obj[index].lang1}
                </button>
                <button className="tam-btn" onClick={handleLanguageToggle}>
                  {obj[index].lang2}
                </button>
              </div>
            ) : obj[index].id === 208 ? (
              <div>
                <h4 className="count">
                  {selectedLanguage === "English"
                    ? obj[index].textWord?.English
                    : obj[index].textWord.Tamil}
                </h4>
              </div>
            ) : (
              <div className="count">
                <h4>{count}</h4>
              </div>
            )}
            <div>
              <div className="home-buttons">
                {index === obj.length - 1 ? (
                  <>
                    <button onClick={handleRestart}>
                      {selectedLanguage === "English"
                        ? "Restart"
                        : "மீண்டும் தொடங்க"}
                    </button>
                    <button className="exit" onClick={handleExit}>
                      {selectedLanguage === "English" ? "Exit" : "வெளியேறு"}
                    </button>
                  </>
                ) : index === 0 ? (
                  <button onClick={handleStart}>
                    {selectedLanguage === "English" ? "Start" : "தொடக்கம்"}
                  </button>
                ) : (
                  <>
                    <button onClick={handleBack}>
                      {selectedLanguage === "English" ? "Back" : "பின் செல்ல"}
                    </button>
                    <button onClick={handlePause}>
                      {paused
                        ? selectedLanguage === "English"
                          ? "Continue"
                          : "தொடர்க"
                        : selectedLanguage === "English"
                        ? "Pause"
                        : "இடைநிறுத்து"}
                    </button>
                    <button className="exit" onClick={handleExit}>
                      {selectedLanguage === "English" ? "Exit" : "வெளியேறு"}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
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

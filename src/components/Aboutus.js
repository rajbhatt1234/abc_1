import React, { useState } from "react";
import "./new.css";
import { Link } from "react-router-dom";
function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the birthplace of Joriyo Parmeshwar?(જોરિયો પરમેશ્વરનું જન્મસ્થળ કયું ગણાય છે?)",
      options: [

        { id: 0, text: "palanpur village(પાલનપુર ગામ)", isCorrect: false },
        { id: 1, text: "Nathpari Village(નાથપરી ગામ)", isCorrect: false },
        { id: 2, text: "rajkot village(રાજકોટ ગામ)", isCorrect: false },
        { id: 3, text: "hirapur village(હીરાપુર ગામ)", isCorrect: true},
      ],
    },
    {
      text: "Which is the birth year of Joriyo Parmeshwar?(જોરિયો પરમેશ્વરનું જન્મ વર્ષ કયું છે?)",
      options: [
        { id: 0, text: "1745", isCorrect: false },
        { id: 1, text: "1838", isCorrect: true },
        { id: 2, text: "1820", isCorrect: false },
        { id: 3, text: "1830", isCorrect: false },
      ],
    },
    {
      text: "What did Joriyo Parmeshwar prepare from the Mahuda tree branch? (જોરિયો પરમેશ્વરે મહુડાના ઝાડની ડાળીમાંથી શું તૈયાર કર્યું?)",
      options: [
        { id: 0, text: "Basket(ટોપલી)", isCorrect: false },
        { id: 1, text: "Knife(છરી)", isCorrect: false },
        { id: 2, text: "food(ખોરાક)", isCorrect: false },
        { id: 3, text: "A stick & a sword(લાકડી અને તલવાર)", isCorrect: true },
      ],
    },
    {
      text: "How old was Joriyo Parmeshwar, when he was executed? (જોરિયો પરમેશ્વરને ફાંસી આપવામાં આવી ત્યારે તેમની ઉંમર કેટલી હતી?)",
      options: [
        { id: 0, text: "49 ", isCorrect: false },
        { id: 1, text: "60 ", isCorrect: false },
        { id: 2, text: "30", isCorrect: true  },
        { id: 3, text: "17", isCorrect: false },
      ],
    },
    {
      text: "What title was given to Joriyo Parmeshwar after divine intervention? (દૈવી હસ્તક્ષેપ પછી જોરિયો પરમેશ્વરને કયું બિરુદ આપવામાં આવ્યું?)",
      options: [
        { id: 0, text: "King(રાજા)", isCorrect: false },
        { id: 1, text: "Bhagat(ભગત)", isCorrect: true  },
        { id: 2, text: "Ruler(શાસક)", isCorrect: false },
        { id: 3, text: "Nayak(નાયક)", isCorrect: false },
      ],
    },
    {
      text: "Which profession did Joriyo Parmeshwar takeup initially? (જોરિયો પરમેશ્વરે શરૂઆતમાં કયો વ્યવસાય અપનાવ્યો હતો?)",
      options: [
        { id: 0, text: "Fighter(ફાઇટર)", isCorrect: false },
        { id: 1, text: "Framer(ખેડૂત)", isCorrect: true },
        { id: 2, text: "Docter(ડોક્ટર)", isCorrect: false },
        { id: 3, text: "Actor(અભિનેતા)", isCorrect: false },
      ],
    },
    {
      text: "Where did Joriyo Parmeshwar prepare spiritual court? (જોરિયો પરમેશ્વર આધ્યાત્મિક દરબાર ક્યાં તૈયાર કરતાં હતાં?)",
      options: [
        { id: 0, text: "Nathpari Village(નાથપરી ગામ)", isCorrect: false },
        { id: 1, text: "hirapur village(હીરાપુર ગામ)", isCorrect: false },
        { id: 2, text: "Vadek(વડેક)", isCorrect: true },
        { id: 3, text: "palanpur village(પાલનપુર ગામ)", isCorrect: false },
      ],
    },
    {
      text: "What attire did Joriyo Parmeshwar used to move around in?(જોરિયો પરમેશ્વર કયા પોશાકમાં ફરતા હતા?)",
      options: [
        { id: 0, text: "Indian(ભારતીય)", isCorrect: false },
        { id: 1, text: "Dhoti(ધોતી)", isCorrect: false },
        { id: 2, text: "Western(પશ્ચિમી)", isCorrect: false },
        { id: 3, text: "monk(સાધુ)", isCorrect: true },
      ],
    },
    {
      text: "What divine powers did Joriyo Parmeshwar posses? (જોરિયો પરમેશ્વર પાસે કઈ દૈવી શક્તિઓ હતી?)",
      options: [
        { id: 0, text: "magic(જાદુ)", isCorrect: false },
        { id: 1, text: "speed(ઝડપ)", isCorrect: false },
        { id: 2, text: "flying( ઉડતીદ)", isCorrect: false },
        { id: 3, text: "Hypnotism & Magic(મોહનિદ્રા & જાદુ)", isCorrect: true  },
      ],
    },
    {
      text: "What color paint was used by the tribals to feel the supernatural powers ?(આદિવાસીઓ અલૌકિક શક્તિઓની અનુભૂતિ કરવા માટે કયા રંગનો ઉપયોગ કરતા હતા?)",
      options: [
        { id: 0, text: "Red(લાલ)", isCorrect: true  },
        { id: 1, text: "Orange(નારંગી)", isCorrect: false },
        { id: 2, text: "Yellow(પીળો)", isCorrect: false },
        { id: 3, text: "Black(કાળો    )", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */

  

  return (
    
    <div className="App">
    {/* 1. Header  */}
    < div className="img1">
      <img src="./image/image2.png" alt="" />
      </div>
    <div className="App">
      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
           <button>
          <Link to="/Home">Exit</Link>
           </button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
       
      )}
    </div>
    </div>
     
  );
}

export default App;
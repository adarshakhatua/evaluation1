import { useState } from "react";
import "./App.css"

function App() {
  const data = {
    score: 76,
    wicket: 2,
    ball:50,
  }
  const[score, setScore]=useState(76)
  const calculateScore = (value) => {
   setScore(score+value)
  }
  const[wicket, setWicket]=useState(2)
  const calculateWicket = (value) => {
   setWicket(wicket+value)
  }
  const[ball, setBall]=useState(50)
  const calculateBall = (value) => {
   setBall(ball+value)
 }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div id="score-div">
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              score
            }
          </h1>
        </div>
        <div id="wicket-div">
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              wicket
            }
          </h1>
        </div>

        <div id="over-div">
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              `${Math.floor(ball/6)}.${(ball%6)}`
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>{score>100 || (wicket===12 && score<100) || (wicket===12 && score===100) ?calculateScore(0):calculateScore(1)}}>Add 1</button>
        <button className="addScore4" onClick={() => { score > 100 || (wicket===12 && score<100) || (wicket===12 && score===100)? calculateScore(0) : calculateScore(1) }}>Add 4</button>
        <button className="addScore6" onClick={()=>{ score > 100 || (wicket===12 && score<100) || (wicket===12 && score===100)? calculateScore(0) : calculateScore(6) }}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>{ score > 100 || (wicket===12 && score<100) || (wicket===12 && score===100)?calculateWicket(0):calculateWicket(1)}}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{score > 100 || (wicket===12 && score<100) || (wicket===12 && score===100)?calculateBall(0):calculateBall(1)}}>Add 1</button>
      </div>
      <h1 className={score > 100 ||(wicket===12 && score<100) || (wicket===12 && score===100)?"msg":"msg1"}>{score > 100 ? "India Won" : ""}
          {wicket===12 && score<100 ? "India loose":""}
          {wicket===12 && score===100 ? "Match Tie":""}
      </h1>
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
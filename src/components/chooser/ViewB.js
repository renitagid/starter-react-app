import React, { useEffect, useState } from "react";
import Match from "./Match";

const ViewB = (props) => {
  const [currentOption, setCurrentOption] = useState("...");
  let [choicesB, setChoicesB] = useState([...props.currentChoices]);

  const generate = (array) => {
    if (array.length === 0) {
      alert("You have voted on all options. Try adding some of your own!");
    }
    setCurrentOption(
      array.splice(Math.floor(Math.random() * array.length), 1)[0]
    );
    return currentOption;
  };

  const answerB = (activity) => {
    props.addToListB(activity);
    generate(choicesB);
  };
  const [userInputB, setUserInputB] = useState("");
  const handleChangeB = (e) => {
    console.log(e.target.value);
    setUserInputB(e.target.value);
  };

  const handleClickB = (input) => {
    props.addToListB(input);
    props.addToChoices(input);
  };

  return (
    <>
      <div className="viewB">
        <div className="startButton">
          <button
            onClick={() => {
              generate(choicesB);
            }}
          >
            Let's get started!
          </button>
        </div>
        
          <div className="voteBlock">
            So, what do you think about...{" "}
            <div className="choice">{currentOption} ?</div>
          
          <div className="buttonRow">
            <button
              onClick={() => {
                answerB(currentOption);
              }}
            >
              Sounds fun!
            </button>
            <button
              onClick={() => {
                generate(choicesB);
              }}
            >
              Not today.
            </button>
            </div>
          </div>
        <h1>
          <Match match={props.match} />
        </h1>

        <div className="lists">
          <div>
            <span>My List:{" "}</span>
            <div>
              {props.listB.map((value) => (
                <div>{value}</div>
              ))}
            </div>
          </div>

          <div>
            <span>My Matches with Person A:</span>
            <div>
              {props.shared.map((value) => (
                <div>{value}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="add">
          <div style={{ textAlign: "center" }}>
            Add your own idea! We'll let Person A vote on it too:
          </div>
          <div className="submitBar">
            <input type="text" value={userInputB} onChange={handleChangeB} />
            <button
              onClick={() => {
                handleClickB(userInputB);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewB;

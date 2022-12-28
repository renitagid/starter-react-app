import React, { useState } from "react";
import Match from "./Match";

const ViewA = (props) => {
  const [currentOption, setCurrentOption] = useState("...");
  let [choicesA, setChoicesA] = useState([...props.currentChoices]);

  const generate = (array) => {
    if (array.length === 0) {
      alert("You have voted on all options. Try adding some of your own!");
    }
    setCurrentOption(
      array.splice(Math.floor(Math.random() * array.length), 1)[0]
    );
    return currentOption;
  };

  const answerA = (activity) => {
    props.addToListA(activity);
    generate(choicesA);
  };
  const [userInputA, setUserInputA] = useState("");
  const handleChangeA = (e) => {
    console.log(e.target.value);
    setUserInputA(e.target.value);
  };

  const handleClickA = (input) => {
    props.addToListA(input);
    props.addToChoices(input);
  };

  return (
    <>
      <div className="viewA">
        <div className="startButton">
          <button
            onClick={() => {
              generate(choicesA);
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
                answerA(currentOption);
              }}
            >
              Sounds fun!
            </button>
            <button
              onClick={() => {
                generate(choicesA);
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
              {props.listA.map((value) => (
                <div>{value}</div>
              ))}
            </div>
          </div>

          <div>
            <span>My Matches with Person B:</span>
            <div>
              {props.shared.map((value) => (
                <div>{value}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="add">
          <div style={{ textAlign: "center" }}>
            Add your own idea! We'll let Person B vote on it too:
          </div>
          <div className="submitBar">
            <input type="text" value={userInputA} onChange={handleChangeA} />
            <button
              onClick={() => {
                handleClickA(userInputA);
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

export default ViewA;

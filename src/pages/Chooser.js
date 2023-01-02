import "../styles/chooser.css";
import React, { useState } from "react";
import User from "../components/chooser/User.js";
import choices from "../components/chooser/choices"

const Chooser = () => {
  let [currentChoices, setCurrentChoices] = useState([
    ...choices.restaurants,
    ...choices.activities,
  ]);
  let [listA, setListA] = useState([]);
  let [listB, setListB] = useState([]);
  let [match, setMatch] = useState("");
  let [shared, setShared] = useState([]);
  const pickChoices = (list) => {
    setCurrentChoices([...list])
    }
  const addToChoices = (string) => {
    setCurrentChoices([...currentChoices, string]);
  };
  const addToListA = (string) => {
    if (listA.includes(string) === false) {
      setListA([...listA, string]);
    }
    if (listB.includes(string)) {
      setMatch(string);
    } else {
      setMatch("");
    }
    if (listB.includes(string) && shared.includes(string) === false) {
      setShared([...shared, string]);
    }
  };
  const addToListB = (string) => {
    if (listB.includes(string) === false) {
      setListB([...listB, string]);
    }
    if (listA.includes(string)) {
      setMatch(string);
      setShared([...shared, string]);
    } else {
      setMatch("");
    }
  };

  return (
    <div className="bodychooser">

        <User
          currentChoices={currentChoices}
          addToListA={addToListA}
          listA={listA}
          match={match}
          addToListB={addToListB}
          listB={listB}
          addToChoices={addToChoices}
          shared={shared}
          pickChoices = {pickChoices}
        />
      
    </div>
  );
};

export default Chooser;

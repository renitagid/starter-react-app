import React, { useState } from "react";
import ViewA from "./ViewA";
import ViewB from "./ViewB";
import choices from "./choices.js";

const User = (props) => {

  let [user, setUser] = useState("");
  const chooseUser = (user) => {
    setUser(user);
  };
  return (
    <>
    <div className="top">
    <h3>Welcome to the activity chooser, where you and a partner can decide what to do today!</h3>
    <h4>What type of activities do you want to see?</h4>
    <div>
        <div className="buttonrow">
        <input type="radio" id="restaurants" name="pick" value="restaurants" onClick={()=>props.pickChoices(choices.restaurants)}/>
            <label for="restaurants">Restaurants</label>
        <input type="radio" id="activities" name="pick" value="activities" onClick={()=>props.pickChoices(choices.activities)}/>
            <label for="activities">Activities</label>
        <input type="radio" id="both" name="pick" value="both" onClick={()=>props.pickChoices(choices.both)}/>
            <label for="both">Both</label>
        </div>
     </div>
    <h2>Who are you?</h2>
      <button
        onClick={() => {
          chooseUser("a");
        }}
      >
        Person A
      </button>
      <button
        onClick={() => {
          chooseUser("b");
        }}
      >
        Person B
      </button>
      </div>
      {user === "a" ? (
        <ViewA
          currentChoices={props.currentChoices}
          addToListA={props.addToListA}
          listA={props.listA}
          match={props.match}
          addToChoices={props.addToChoices}
          shared={props.shared}
        />
      ) : user === "b" ? (
        <ViewB
          currentChoices={props.currentChoices}
          addToListB={props.addToListB}
          listB={props.listB}
          match={props.match}
          addToChoices={props.addToChoices}
          shared={props.shared}
        />
      ) : null}
    </>
  );
};

export default User;

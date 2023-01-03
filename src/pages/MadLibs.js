import React, { useState } from "react";
import "../styles/madlibs.css";



const MadLibs = () => {
const [storyText, setStoryText] = useState("")
  const [noun, setNoun] = useState("");
  const handleNounChange = (e) => {
    console.log(e.target.value);
    setNoun(e.target.value);
    return null;
  };

  const [verb, setVerb] = useState("");
  const handleVerbChange = (e) => {
    console.log(e.target.value);
    setVerb(e.target.value);
    return null;
  };
  const [adjective, setAdjective] = useState("");
  const handleAdjectiveChange = (e) => {
    console.log(e.target.value);
    setAdjective(e.target.value);
    return null;
  };

  const [encounter, setEncounter] = useState("");
  const handleEncounterChange = (e) => {
    console.log(e.target.value);
    setEncounter(e.target.value);
    return null;
  };

  const [result, setResult] = useState("");
  const handleResultChange = (e) => {
    console.log(e.target.value);
    setResult(e.target.value);
    return null;
  };

  let story = `There once was a very ${adjective} ${noun} who loved ${verb} and did it almost every day. One day while the ${adjective} ${noun} was ${verb}, she ran into a ${encounter}! The ${noun} was so surprised she almost started ${verb} away, until she realized that the ${encounter} was ${adjective}, just like her. Then they ${result}. The end!`

  const synth = window.speechSynthesis;
  var voices = window.speechSynthesis.getVoices();
  const utterThis = new SpeechSynthesisUtterance(story);
  utterThis.rate = 0.95;

const showStoryText = () => {
    setStoryText(story)
}

  return (
    <div className="mlbody">
        <h1 className="mlh1">No Reading Mad Libs</h1>
        <p>- For Zinnia -</p>
        <div className="selectall">
      <select name="noun" id="noun" value={noun} onChange={handleNounChange}>
        <option>🔴</option>
        <option value="princess">👸🏻</option>
        <option value="frog">🐸</option>
        <option value="bear">🐻</option>
        <option value="robot">🤖</option>
        <option value="farmer">🧑🏽‍🌾</option>
        <option value="fairy">🧚🏾‍♀️</option>
        <option value="superhero">🦸🏽</option>
        <option value="scientist">👩🏼‍🔬</option>
      </select>
      <select name="verb" id="verb" value={verb} onChange={handleVerbChange}>
      <option>🟠</option>
        <option value="running">🏃🏻</option>
        <option value="dancing">💃🏾</option>
        <option value="swimming">🏊🏻</option>
        <option value="skiing">⛷</option>
        <option value="cartwheeling">🤸🏼‍♂️</option>
        <option value="rollerskating">🛼</option>
        <option value="motorcycle racing">🏍</option>
        <option value="rock climbing">🧗🏿</option>
      </select>
      <select
        name="adjective"
        id="adjective"
        value={adjective}
        onChange={handleAdjectiveChange}
      >
                <option>🟡</option>
        <option value="clever">💡</option>
        <option value="silly">🤪</option>
        <option value="mischievous">😈</option>
        <option value="friendly">🧑‍🤝‍🧑</option>
        <option value="nocturnal">🌚</option>
        <option value="magical">🪄</option>
        <option value="artistic">🎨</option>
        <option value="adventurous">🗺</option>
      </select>

      <select
        name="encounter"
        id="encounter"
        value={encounter}
        onChange={handleEncounterChange}
      >
                <option>🟢</option>
        <option value="troll">🧌</option>
        <option value="dragon">🐉</option>
        <option value="unicorn">🦄</option>
        <option value="snake">🐍</option>
        <option value="skunk">🦨</option>
        <option value="giant squid">🦑</option>
        <option value="gigantic cupcake">🧁</option>
        <option value="dinosaur">🦖</option>
      </select>

      <select name="result" id="result" value={result} onChange={handleResultChange}>
      <option>🔵</option>
        <option value="started talking, fell in love, and got married! They lived happily ever after">💍</option>
        <option value="started having an epic sword fight, but realized they didn't want to fight and became best friends">⚔️ </option>
        <option value="decided to travel the world together! They went to 100 different countries and ate ice cream in every single one">🛩</option>
        <option value="ran away from each other as fast as they could, so fast that they ran all the way around the world and bumped into each other again">💨</option>
        <option value="got in a rocket ship and flew to the moon. They found out it was made of cheese and ate the whole moon, then flew back to Earth">🚀</option>
        <option value="got in a time machine and went back to the land of the dinosaurs! They grabbed a dinosaur egg and brough it back to present time so they could hatch and raise a pet baby dinosaur together">🕰</option>
        <option value="realized they were exhausted and decided to take a nap">🛏</option>
        <option value="had a dance battle and realized they were equally matched, then danced off into the sunset. Legend has it they are still dancing to this day">🕺🏻</option>
      </select>
      </div>


      <div className="storyText">
      <button id = "mlbutton" onClick={() => synth.speak(utterThis)}>🗣</button>
        <span className="innerStoryText">
        <button id="storybutton" onClick={() => showStoryText()}>Show my story</button>
        <p/>
        {storyText}</span>
        </div>
    </div>
  );
};
export default MadLibs;

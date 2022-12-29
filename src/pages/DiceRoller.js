import "../styles/dice.css";
import { useEffect, useState } from "react";
import PastRolls from "../components/dice/PastRolls";
import Dice from "../components/dice/Dice";
import Statistics from "../components/dice/Statistics";

const DiceRoller = () => {
  const [diceOptions] = useState([1, 2, 3, 4, 5, 6]);
  let [diceIndex, setDiceIndex] = useState(null);
  const [lastRoll, setLastRoll] = useState([]);
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [six, setSix] = useState("");
  const [oneP, setOneP] = useState("0");
  const [twoP, setTwoP] = useState("");
  const [threeP, setThreeP] = useState("");
  const [fourP, setFourP] = useState("");
  const [fiveP, setFiveP] = useState("");
  const [sixP, setSixP] = useState("");
  const rollDice = () => {
    let randomNum = Math.floor(Math.random() * diceOptions.length);
    setDiceIndex(randomNum);
    if (diceIndex !== null && lastRoll.length < 36) {
      setLastRoll([...lastRoll, diceOptions[diceIndex]]);
    }
  };
  const calculator = () => {
    setOne(lastRoll.filter((x) => x === 1).length);
    setTwo(lastRoll.filter((x) => x === 2).length);
    setThree(lastRoll.filter((x) => x === 3).length);
    setFour(lastRoll.filter((x) => x === 4).length);
    setFive(lastRoll.filter((x) => x === 5).length);
    setSix(lastRoll.filter((x) => x === 6).length);
    if (Math.round((one / lastRoll.length) * 100)) {
      setOneP(Math.round((one / lastRoll.length) * 100));
    } else {
      setOneP(0);
    }
    if (Math.round((two / lastRoll.length) * 100)) {
      setTwoP(Math.round((two / lastRoll.length) * 100));
    } else {
      setTwoP(0);
    }
    if (Math.round((three / lastRoll.length) * 100)) {
      setThreeP(Math.round((three / lastRoll.length) * 100));
    } else {
      setThreeP(0);
    }
    if (Math.round((four / lastRoll.length) * 100)) {
      setFourP(Math.round((four / lastRoll.length) * 100));
    } else {
      setFourP(0);
    }
    if (Math.round((five / lastRoll.length) * 100)) {
      setFiveP(Math.round((five / lastRoll.length) * 100));
    } else {
      setFiveP(0);
    }
    if (Math.round((six / lastRoll.length) * 100)) {
      setSixP(Math.round((six / lastRoll.length) * 100));
    } else {
      setSixP(0);
    }
  };

  const refresh = () => {
    setDiceIndex(null);
    setLastRoll([]);
  };
  useEffect(() => {
    calculator();
  });
  return (
    <>
      <h1 className="diceh1">Roll the Dice</h1>
      <div id="app">
        <Dice
          diceOptions={diceOptions}
          diceIndex={diceIndex}
          rollDice={rollDice}
        />
        <PastRolls lastRoll={lastRoll} />
        <div>
          <Statistics
            one={one}
            two={two}
            three={three}
            four={four}
            five={five}
            six={six}
            oneP={oneP}
            twoP={twoP}
            threeP={threeP}
            fourP={fourP}
            fiveP={fiveP}
            sixP={sixP}
          />
        </div>
        <button onClick={() => refresh()}>Refresh</button>
      </div>
    </>
  );
};

export default DiceRoller;

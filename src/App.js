import "./App.css";
import SpinningCircles from "./Components/Levels/SpinningCircles";
import Button from "./Components/UIs/Button";
import Arrow from "./Components/UIs/Arrow";
import StopPointFounder from "./Components/Levels/StopPointFounder";
import WinBox from "./Components/Levels/WinBox";
import { useState } from "react";
const LevelOnePrizes = [
  { name: "1$", value: 1, id: Math.random().toString(), initialDegree: 0 },
  { name: "5$", value: 5, id: Math.random().toString(), initialDegree: 36 },
  { name: "8$", value: 8, id: Math.random().toString(), initialDegree: 72 },
  { name: "3$", value: 3, id: Math.random().toString(), initialDegree: 108 },
  { name: "6$", value: 6, id: Math.random().toString(), initialDegree: 144 },
  { name: "2$", value: 2, id: Math.random().toString(), initialDegree: 180 },
  { name: "6$", value: 6, id: Math.random().toString(), initialDegree: 216 },
  { name: "^", value: 200, id: Math.random().toString(), initialDegree: 252 },
  { name: "4$", value: 4, id: Math.random().toString(), initialDegree: 288 },
  { name: "5$", value: 5, id: Math.random().toString(), initialDegree: 324 },
];
const LevelTwoPrizes = [
  { name: "15$", value: 15, id: Math.random().toString(), initialDegree: 0 },
  { name: "11$", value: 11, id: Math.random().toString(), initialDegree: 72 },
  { name: "9$", value: 9, id: Math.random().toString(), initialDegree: 144 },
  { name: "10$", value: 10, id: Math.random().toString(), initialDegree: 216 },
  { name: "^", value: 250, id: Math.random().toString(), initialDegree: 288 },
];
const LevelThirdPrize = {
  name: "23$",
  value: 230,
  id: Math.random().toString(),
  initialDegree: 0,
};
function App() {
  const [winAmount, setWinAmount] = useState({
    amount: "",
    values: null,
    levelst: false,
    levelnd: false,
    levelrd: false,
    btnClicked: false,
    winPoint1: false,
  });

  let degree;
  let spinAmount;
  const AcceptPoint1 = { start: 342, end: 18 };
  const AcceptPoint2 = { start: 324, end: 36 };
  const min = 1024;
  const max = 9999;

  if (winAmount.amount === "" && winAmount.btnClicked) {
 
    spinAmount = Math.floor(Math.random() * (max - min) + min);
    degree = spinAmount % 360;
  }

  if (winAmount.btnClicked && winAmount.winPoint1 && winAmount.levelnd) {
  
    spinAmount = Math.floor(Math.random() * (max - min) + min);
    degree = spinAmount % 360;
  }

  const btnHandler = () => {
    setWinAmount({ ...winAmount, btnClicked: true });
  };
  const winPointHandlers = (id, value, name, length) => {
    setTimeout(() => {
      if (value !== 200 && length === 10) {
        setWinAmount({
          ...winAmount,
          amount: name,
          values: value,
          levelst: false,
        });
      }
    }, 4500);
    setTimeout(() => {
      if (value === 200) {
        setWinAmount({
          ...winAmount,
          amount: name,
          values: value,
          levelst: false,
          levelnd: true,
          winPoint1: true,
          btnClicked: false,
        });
      }
    }, 5000);
    setTimeout(() => {
      if (value !== 250 && length === 5) {
        setWinAmount({
          ...winAmount,
          amount: name,
          values: value,
          levelnd: false,
        });
      }
    }, 4500);
    setTimeout(() => {
      if (value === 250) {
        setWinAmount({
          ...winAmount,
          amount: name,
          values: value,
          levelnd: false,
          levelrd: true,
        });
      }
    }, 4500);
  };
  if (!winAmount.levelrd) {
    return (
      <div className="App">
        <Arrow />
        <Button spinHandler={btnHandler} disable={winAmount.btnClicked} />

        {!winAmount.winPoint1 && (
          <SpinningCircles
            prizes={LevelOnePrizes}
            action={winAmount.btnClicked}
            rotate={spinAmount}
          />
        )}
        {!winAmount.winPoint1 && (
          <StopPointFounder
            prizeList={LevelOnePrizes}
            degree={degree}
            acceptPoint={AcceptPoint1}
            winPointHandler={winPointHandlers}
          />
        )}

        {!winAmount.levelrd && (
          <SpinningCircles
            prizes={LevelTwoPrizes}
            rotate={spinAmount}
            newRound={winAmount.winPoint1}
            action={winAmount.btnClicked}
          />
        )}

        {winAmount.winPoint1 && (
          <StopPointFounder
            prizeList={LevelTwoPrizes}
            degree={degree}
            acceptPoint={AcceptPoint2}
            winPointHandler={winPointHandlers}
          />
        )}

        {!winAmount.levelrd && <SpinningCircles prizes={LevelThirdPrize} />}
        <WinBox amounts={{ win: winAmount.amount, winVal: winAmount.values }} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Arrow />
        <Button spinHandler={btnHandler} />
        {winAmount.levelrd && (
          <SpinningCircles
            winState={winAmount.levelrd}
            prizes={LevelThirdPrize}
          />
        )}
        <WinBox amounts={{ win: winAmount.amount, winVal: winAmount.values }} />{" "}
      </div>
    );
  }
}
export default App;

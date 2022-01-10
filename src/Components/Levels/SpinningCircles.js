import classes from "./SpinningCircles.module.css";
import Section from "../UIs/Section";
import { memo } from "react";
const SpinningCircles = (props) => {
  let isLight = false;
  let spinStyle = `rotate(${0}deg)`;
  let secondStyle = false;

 
  if (props.prizes.length < 10 && props.prizes.length > 2) {
    secondStyle = true;
  }
  if (props.prizes.length === 10 || props.prizes.length === 5) {
    return (
      <div
     className={`${secondStyle ? classes.circle2 : classes.circle1} ${props.newRound && classes.secondRound} `} 
        style={
          props.action 
            ? { transform: `rotate(${props.rotate}deg)` }
            : { transform: `none` }
        }
      >
        {props.prizes.map((data) => {
          if (props.prizes.indexOf(data) > 0) {
            spinStyle = `rotate(${data.initialDegree}deg)`;
            isLight = !isLight;
          }

          return (
            <Section
              key={data.id}
              value={data.value}
              name={data.name}
              style={spinStyle}
              spinColor={isLight}
              secondstyle={secondStyle}
              newround={props.newRound}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className={`${classes.circle3} ${props.winState && classes.thirdRound} `}  >
        <h2>{props.prizes.name}</h2>
      </div>
    );
  }
};

export default memo(SpinningCircles);


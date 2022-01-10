import classes from "./Section.module.css";

const Section = (props) => {
  
  let winner = false;
  if (props.value === 200 || props.value === 250) {
    winner = !winner;
  } else {
    winner = false;
  }

  return (
    <div
      style={{ transform: props.style }}
      className={`${classes.shape} ${props.spinColor && classes.lightColor} ${
        winner && classes.winners
      } ${props.secondstyle && classes.secondStyle} ${
        props.newround && classes.newRound
      }`}
    >
      <h2>{props.name}</h2>
    </div>
  );
};

export default Section;

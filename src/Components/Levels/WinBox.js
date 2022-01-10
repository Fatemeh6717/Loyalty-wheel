import classes from "./WinBox.module.css";
const WinBox=(props)=>{
    let winAmount="";
    if(props.amounts.winVal===200){
        winAmount="Please Spin Again 😊";
    }
    else if(props.amounts.winVal===250){
        winAmount="Woow You Are the Winner 😊" ;
    }
    else{
      winAmount=props.amounts.win;  
    }
    return(
           <div className={classes.winBox}> 
               <h2>YOU WON</h2>
                  <h2  className={classes.winPrize}>
                 {winAmount}
                  </h2>  
           </div>
    );
}
export default WinBox;
              
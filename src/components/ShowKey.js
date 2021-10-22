import GameWon from "./GameWon";
import GoldKeyMessage from "./GoldKeyMessage";

// triggers when hasGoldKey or hasSilverKey are true
  export default function ShowKey (props) {
    var winMessage = '';
    // fake key and keep playing
    if (props.hasGoldKey) {
      <GoldKeyMessage /> 
    }
    // real key and win
    else if (props.hasSilverKey) {
      winMessage= <GameWon audioOn={props.audioOn} />
    }
    else {
      winMessage='';
    }
    return (
      <div className="game-over-modal" >
        {winMessage}
        {props.hasGoldKey && 
        <>
        <GoldKeyMessage /> 
        <div className="btn-wrap">
          <button onClick={()=>props.setHasGoldKey(false)}>Keep trying</button>
        </div>
        </>
        }
      </div>
    );
  };
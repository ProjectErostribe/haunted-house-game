import React from "react";
import ShowKey from "./ShowKey";
import silverKey from "../img/events/silver-key.jpg";
import goldKey from "../img/events/gold-key.jpeg";

function KeyDisplay(props) {

  return (
    <div id="key-display">
      {props.hasSilverKey && (
        <div>
          <div className="img-wrap">
            <img src={silverKey} alt="silver key" />
          </div>
          <h2>You have obtained the Silver Key!</h2>
          <ShowKey 
            hasGoldKey={props.hasGoldKey}
            setHasGoldKey={props.setHasGoldKey}
            hasSilverKey={props.hasSilverKey}
          />
        </div>
      )}
      {props.hasGoldKey && (
        <div>
          <div className="img-wrap">
            <img src={goldKey} alt="gold key" />
          </div>
          <h2>You have obtained the Gold Key!</h2>
          <ShowKey 
            hasGoldKey={props.hasGoldKey}
            setHasGoldKey={props.setHasGoldKey}
            hasSilverKey={props.hasSilverKey}
          />
        </div>
      )}
    </div>
  );
}

export default KeyDisplay;

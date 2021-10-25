import React, { useState } from "react";
import ResultAction from "./ResultAction";
import KeyDisplay from "./KeyDisplay";

function EventModal(props) {
  //States to determine which key they have just received since now it is possible to have both keys simultaneously
  const [informedOfSilverKey, setInformedOfSilverKey] = useState(true);
  const [informedOfGoldKey, setInformedOfGoldKey] = useState(true);

  // For if they just received either key
  if (!informedOfSilverKey || !informedOfGoldKey) {
    return (
      <div className="event-modal" id="event">
        <p>{props.action.response}</p>
        <KeyDisplay
          hasGoldKey={props.hasGoldKey}
          hasSilverKey={props.hasSilverKey}
          setHasGoldKey={props.setHasGoldKey}
          informedOfGoldKey={informedOfGoldKey}
          informedOfSilverKey={informedOfSilverKey}
        />
        <button
          onClick={() => {
            props.setShowDialog(false);
            setInformedOfSilverKey(true);
            setInformedOfGoldKey(true);
          }}
        >
          Continue
        </button>
      </div>
    );
  }
  return (
    //For when the event first renders and they haven't chosen an action yet
    <>
      {!props.hasChosenAction && !props.isGameOver ? (
        <div className="event-modal" id="event">
          <div style={{ margin: "0" }}>
            <h3>{props.event.name}</h3>
            <img src={props.event.image} alt="" />
            <p>{props.event.description}</p>
            {props.event.actions.map((currentAction, i) => (
              <div key={i}>
                {!props.isGameOver && (
                  <button
                    onClick={() => {
                      props.setAction(currentAction);
                      props.setSelectedAction(i);
                      if (currentAction.type !== "redo")
                        props.setHasChosenAction(true);
                    }}
                  >
                    {currentAction.action}
                  </button>
                )}
                <ResultAction
                  i={i}
                  action={props.action}
                  selectedAction={props.selectedAction}
                  setHasSilverKey={props.setHasSilverKey}
                  setHasGoldKey={props.setHasGoldKey}
                  setIsGameOver={props.setIsGameOver}
                  hasGoldKey={props.hasGoldKey}
                  hasSilverKey={props.hasSilverKey}
                  closeEvent={props.closeEvent}
                  name={props.event.name}
                  setShowDialog={props.setShowDialog}
                  setDeathNote={props.setDeathNote}
                  setInformedOfGoldKey={setInformedOfGoldKey}
                  setInformedOfSilverKey={setInformedOfSilverKey}
                  informedOfGoldKey={informedOfGoldKey}
                  informedOfSilverKey={informedOfSilverKey}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        //For when they have chosen an action and see response but didn't receive either key
        !props.isGameOver &&
        informedOfSilverKey &&
        informedOfGoldKey && (
          <div className="event-modal" id="event">
            <div style={{ margin: "0" }}>
              <h3>{props.event.name}</h3>
              <img src={props.event.image} alt="" />

              <ResultAction
                i={props.selectedAction}
                action={props.action}
                selectedAction={props.selectedAction}
                setHasSilverKey={props.setHasSilverKey}
                setHasGoldKey={props.setHasGoldKey}
                setIsGameOver={props.setIsGameOver}
                hasGoldKey={props.hasGoldKey}
                hasSilverKey={props.hasSilverKey}
                closeEvent={props.closeEvent}
                name={props.event.name}
                setShowDialog={props.setShowDialog}
                setDeathNote={props.setDeathNote}
                setInformedOfGoldKey={setInformedOfGoldKey}
                setInformedOfSilverKey={setInformedOfSilverKey}
                informedOfGoldKey={informedOfGoldKey}
                informedOfSilverKey={informedOfSilverKey}
              />
            </div>
          </div>
        )
      )}
    </>
  );
}

export default EventModal;

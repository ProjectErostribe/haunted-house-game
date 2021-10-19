import React, { useState } from "react";
import ResultAction from "./ResultAction";
import GameOver from "./GameOver";


const Event = ({ event, isGameOver, setIsGameOver, hasSilverKey, hasGoldKey, setHasGoldKey, setHasSilverKey }) => {
	const [action, setAction] = useState({});
	const [selectedAction, setSelectedAction] = useState(-1);

	return (
		<div id="event">
			<h3>{event.name}</h3>
			<div className="img-wrap">
				<img src={event.image} alt="" />
			</div>
			<p>{event.description}</p>
			{event.actions.map((currentAction, i) => (
				<div key={i}>
					{(!isGameOver) &&
						<button
							onClick={() => {
							setAction(currentAction);
							setSelectedAction(i);
						}}
						>
							{currentAction.action}
						</button>
					}
					<ResultAction 
						i={i} 
						action={action} 
						selectedAction={selectedAction} 
						setHasSilverKey={setHasSilverKey}
						setHasGoldKey={setHasGoldKey}
						setIsGameOver={setIsGameOver}
						hasGoldKey={hasGoldKey}
						hasSilverKey={hasSilverKey}
					/>
					<GameOver
						i={i} 
						isGameOver={isGameOver}
						selectedAction={selectedAction} 
					/>
				</div>
			))}
		</div>
	);
};

export default Event;

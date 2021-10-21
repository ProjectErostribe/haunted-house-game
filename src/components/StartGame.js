import React from "react";
import { useParams, Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import useSound from "use-sound";

import Header from "./Header";
import house from "../img/rooms/house.jpeg";
import { ambienceHauntedCave } from '../sounds';

export default function StartGame({ hallway, audioOn }) {
	const [ playAmbience, ambienceSoundData ] = useSound(ambienceHauntedCave, { soundEnabled: audioOn, volume: 0.70 });
	let { page } = useParams();
	page = parseInt(page || 0);
	const pages = [
		[
			`The Bitwise React Apprentices were out trick or treating on a dark and windy Halloween eve, when they stumbled across a creepy, rundown home at the end of a half-built construction site. Juan, the leader of the group, walked up to the door, rang the doorbell and no one answered.`,
		],
		[
			`He jiggled the door and it swung open.`,
			`“Is there anyone home?” asks Myles. “Do you think they have Skittles?”`,
		],
		[
			`“Does it look like they have Skittles? They barely have time to clean from the looks of it!” Grace says, eyeing the cobwebs in the corner of the doorway.`,
			`“Ooohh… I think I see some Skittles in the hallway!” Darla exclaims, pointing deeper into the darkened space just beyond the door.`,
		],
	];

<<<<<<< HEAD
	if (!audioOn) {
		ambienceSoundData.stop();
	}

	return (
		<div id="start-game" onMouseEnter={() => playAmbience()}>
			{page === 0 && <Header />}
			<img src={house} alt="" />
			<Typewriter
				style={{ textAlign: "left" }}
				options={{
					strings: pages[page],
					deleteSpeed: 10,
					pauseFor: 3000,
					autoStart: true,
					loop: false,
				}}
			/>
			<div id="btn-wrap">
				{page === 2 ? (
				<Link to="/hallway"><button>Continue...</button></Link>
				) : (
				<Link to={`/startgame/${page + 1}`}><button>Continue...</button></Link>
				)}
			</div>
		</div>
	);
}
=======
  return (
    <div>
      <Header />
      <img src={house} alt="" />      
      <p>The Bitwise React Apprentices were out trick or treating on a dark and windy Halloween eve, when they stumbled across a creepy, rundown home at the end of a half-built construction site.  Juan, the leader of the group, walked up to the door, rang the doorbell and no one answered.</p>
      <p>He jiggled the door and it swung open.</p>
      <p>“Is there anyone home?” asks Myles.  “Do you think they have Skittles?”</p>
      <p>“Does it look like they have Skittles? They barely have time to clean from the looks of it!” Grace says, eyeing the cobwebs in the corner of the doorway.</p>
      <p>“Ooohh… I think I see some Skittles in the hallway!” Darla exclaims, pointing deeper into the darkened space just beyond the door.</p>
      <a href="/hallway"><button>Continue...</button></a>
    </div>
    
    

  )
};
>>>>>>> bdcf540a820251c39f8ea657d09a8eae9fd914fa

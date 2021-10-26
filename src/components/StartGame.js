import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import house from "../img/rooms/house.jpeg";
import PageNumber from "./PageNumber";

export default function StartGame({ setHasSilverKey, setHasGoldKey }) {
	let { page } = useParams();
	page = parseInt(page || 0);

  useEffect(() => {
    setHasSilverKey(false);
    setHasGoldKey(false);
  });
  
	const pages = [
		<div>
			<p>
				The Bitwise React Apprentices were out trick or treating on a dark and
				windy Halloween eve, when they stumbled across a creepy, rundown home at
				the end of a half-built construction site. Juan, the leader of the
				group, walked up to the door, rang the doorbell and no one answered.
			</p>
		</div>,
		<div>
			<p>He jiggled the door and it swung open.</p>
			<p>
				“Is there anyone home?” asks Myles. “Do you think they have Skittles?”
			</p>
			<p>
				“Does it look like they have Skittles? They barely have time to clean
				from the looks of it!” Grace says, eyeing the cobwebs in the corner of
				the doorway.
			</p>
			<p>
				“Ooohh… I think I see some Skittles in the hallway!” Darla exclaims,
				pointing deeper into the darkened space just beyond the door.
			</p>
		</div>,
	];

	return (
		<div id="start-game">
			{page === 0 && <Header />}
			<img src={house} alt="" />

			{page === 0 && <div>{pages[0]}</div>}
			{page === 1 && <div>{pages[1]}</div>}

      <div id="btn-bar">
        <div className="btn-wrap">
          <Link to={`/hallwayreroute`}>
            <button> Skip to Gameplay </button>
          </Link>
        </div>
        <div className="btn-wrap">
          {page === 1 ? (
            <Link to={`/hallway/0`}>
              <button>Continue Story</button>
            </Link>
          ) : (
            <Link to={`/startgame/${page + 1}`}>
              <button>Continue Story</button>
            </Link>
          )}
        </div>
      </div>
			<PageNumber pages={pages} page={page} title="Start Game" />
		</div>
	);
}

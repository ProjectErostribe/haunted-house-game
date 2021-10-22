import React, { useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import RoomData from "./components/RoomData.js";
import EventsData from "./components/EventsData";
import StartGame from "./components/StartGame";
import Hallway from "./components/Hallway";
import Room from "./components/Room";
import GameWon from "./components/GameWon";
import AudioMute from "./components/AudioMute";
import Inventory from "./components/Inventory";

function App() {
	const rooms = RoomData;
	const events = EventsData;
	const [audioOn, setAudioOn] = useState(true);
	const [hasGoldKey, setHasGoldKey] = useState(false);
	const [hasSilverKey, setHasSilverKey] = useState(false);

  return (
    <HashRouter>
    <div className="controls">
      <AudioMute audioOn={audioOn} setAudioOn={setAudioOn} />
      <Inventory
          goldKey={hasGoldKey}
          silverKey={hasSilverKey}
      />
    </div>
      
      <Switch>
        <Route exact path="/">
          <StartGame audioOn={audioOn} />
          {/* <AudioDemo/> */}
        {/* <Music/> */}
          {/* <DoorOpen/> */}
          {/* <FalseEnding /> */}
        </Route>
        <Route path="/startgame/:page">
          <StartGame audioOn={audioOn} />
        </Route>
        <Route path="/hallway/:page">
          <Hallway
            audioOn={audioOn}
            rooms={rooms}
            hasSilverKey={hasSilverKey}
            hasGoldKey={hasGoldKey}
            setHasSilverKey={setHasSilverKey}
            setHasGoldKey={setHasGoldKey}
          />
        </Route>
        <Route path="/room/:name">
          <Room 
            rooms={rooms} 
            events={events}
            hasSilverKey={hasSilverKey}
            hasGoldKey={hasGoldKey}
            setHasSilverKey={setHasSilverKey}
            setHasGoldKey={setHasGoldKey}
          />
        </Route>
        <Route path="/gamewon">
          <GameWon />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;

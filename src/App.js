import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import RoomData from "./components/RoomData";
import EventsData from "./components/EventsData.json";
import StartGame from "./components/StartGame";
import Room from "./components/Room";

function App() {
  const [hasGoldKey, setHasGoldKey] = useState(false);
  const [hasSilverKey, setHasSilverKey] = useState(false);
  const [rooms, setRooms] = useState(RoomData);
  const [events, setEvents] = useState(EventsData.json);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <StartGame />
        </Route>
        <Route exact path="/hallway">
          <div>Hallway</div>
        </Route>
        <Route path="/room/:name">
          <Room rooms={rooms} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

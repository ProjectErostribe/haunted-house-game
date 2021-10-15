import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.png";
import "./App.css";
import RoomData from "./components/RoomData.json";
import EventsData from "./components/EventsData.json";
import StartGame from "./components/StartGame";
import GameOver from "./components/GameOver";

function App() {
  const [hasSilverKey, setHasSilverKey] = useState(false);
  const [rooms, setRooms] = useState(RoomData.rooms);
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
          <div>Room Name</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;

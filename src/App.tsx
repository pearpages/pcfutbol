import React, { useState } from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router";

import { getDemos } from "./demos";
import { Game } from "./lib/Game";
import { Dashboard } from "./Dashboard";

import "./App.css";

type Screen = "RESULT" | "PREMATCH";

const game = new Game({ playerTeam: "Barcelona" });

function App() {
  const [jornada, setJornada] = useState(0);
  const [screen, setScreen] = useState<Screen>("PREMATCH");

  const playGame = () => {
    game.playJornada(jornada);
    setScreen("RESULT");
  };

  const nextGame = () => {
    if (jornada === 37) {
      setJornada(0);
    } else {
      setJornada(jornada + 1);
    }
    setScreen("PREMATCH");
  };

  const dashboardProps = {
    game,
    jornada,
    screen,
    playGame,
    nextGame,
  };

  return (
    <Switch>
      {getDemos()}
      <Route path="*">
        <Dashboard {...dashboardProps} />
      </Route>
    </Switch>
  );
}

export default App;

export type { Screen };

import React from "react";
import { Route } from "react-router";

import DemoEleven from "../CurrentMatch/Eleven/Eleven.demo";
import DemoBadges from "../Badge/Badge.demo";
import DemoCalendarSummary from "../ResultsSummary/ResultsSummary.demo";
import DemoBoardSummary from "../BoardSummary/BoardSummary.demo";

function getDemos() {
  return [
    <Route key="1" path="/demo/eleven">
      <DemoEleven />
    </Route>,
    <Route key="2" path="/demo/badges">
      <DemoBadges />
    </Route>,
    <Route key="3" path="/demo/calendar-summary">
      <DemoCalendarSummary />
    </Route>,
    <Route key="4" path="/demo/board-summary">
      <DemoBoardSummary />
    </Route>,
  ];
}

export { getDemos };

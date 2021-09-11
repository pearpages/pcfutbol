import React from "react";
import { Route } from "react-router";

import DemoEleven from "../CurrentMatch/Eleven/Eleven.demo";
import DemoBadges from "../Badge/Badge.demo";
import DemoCalendarSummary from "../CalendarSummary/CalendarSummary.demo";
import DemoBoardSummary from "../BoardSummary/BoardSummary.demo";

function getDemos() {
  return [
    <Route path="/demo/eleven">
      <DemoEleven />
    </Route>,
    <Route path="/demo/badges">
      <DemoBadges />
    </Route>,
    <Route path="/demo/calendar-summary">
      <DemoCalendarSummary />
    </Route>,
    <Route path="/demo/board-summary">
      <DemoBoardSummary />
    </Route>,
  ];
}

export { getDemos };

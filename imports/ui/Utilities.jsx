import React from "react";
import { Session } from "meteor/session"; 
import { Square } from "./Square";

export const setLastValue = (score) => {
  return Session.setPersistent("lastValue", score);
};

export const getValue = () => {
  return (
    <div className="containerDiv">
      <Square
        value={Session.get("lastValue")}
      />
    </div>
  );
};

import React from "react";

export const Square = (props) => { 
  let value = props.value;
  return (
    <div>
      <p className="button"> Last Score: {value}</p>
    </div>
  );
};

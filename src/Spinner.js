import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader" />
      {props.message}
    </div>
  );
};

export default Spinner;

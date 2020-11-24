import React from "react";
import "./Explain.css";

type Props = {
  text: string;
};

export function Explain(props: Props) {
  return (
    <div className="explain">
      <img className="status-icon" src="images/status.png" />
      <p className="text">{props.text}</p>
    </div>
  );
}

import React from "react";
import "./Explain.css";

type Props = {
  text: string;
};

export function Explain(props: Props) {
  const newline = (str: string) => {
    return str.split("\n").map((str, index) => (
      <React.Fragment key={`newline-${index}`}>
        {str}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="explain">
      <img className="status-icon" src="images/status.png" />
      <p className="text">{newline(props.text)}</p>
    </div>
  );
}

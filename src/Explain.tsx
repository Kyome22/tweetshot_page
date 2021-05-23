import React from "react";
import i18n from "i18next";
import "./Explain.css";

type Props = {
  text: string;
  images: string[];
};

export default function Explain(props: Props) {
  const lang = i18n.language;
  const imgs = (images: string[]) => {
    return images.map((value, i) => (
      <img
        className="screen-shot"
        key={`img-${i}`}
        src={`images/${lang}/${value}`}
      />
    ));
  };

  return (
    <div className="section explain">
      <div className="label">
        <img className="status-icon" src="images/status.png" />
        <p className="text">{props.text}</p>
      </div>
      {imgs(props.images)}
    </div>
  );
}

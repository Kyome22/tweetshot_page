import React from "react";
import { useTranslation } from "react-i18next";
import { Top } from "./Top";
import { Explain } from "./Explain";
import "./Content.css";

export function Content() {
  const { t } = useTranslation();

  return (
    <div className="content">
      <Top />
      <Explain text={t("explain1")} images={["menubar.png"]} />
      <Explain text={t("explain2")} images={["overview.png"]} />
      <Explain text={t("explain3")} images={["attach.png"]} />
      <Explain text={t("explain4")} images={["reply.png"]} />
      <Explain text={t("explain5")} images={["general.png", "accounts.png"]} />
    </div>
  );
}

import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { Explain } from "./Explain";
import "./Content.css";

export function Content() {
  const lang = i18n.language;
  const { t } = useTranslation();

  return (
    <div className="content">
      <Explain text={t("explain1")} />
      <img className="screen-shot menubar" src={`images/${lang}/menubar.png`} />

      <Explain text={t("explain2")} />
      <img className="screen-shot" src={`images/${lang}/overview.png`} />

      <Explain text={t("explain3")} />
      <img className="screen-shot" src={`images/${lang}/attach.png`} />

      <Explain text={t("explain4")} />
      <img className="screen-shot" src={`images/${lang}/reply.png`} />

      <Explain text={t("explain5")} />
      <img className="screen-shot" src={`images/${lang}/general.png`} />
      <img className="screen-shot" src={`images/${lang}/accounts.png`} />
    </div>
  );
}

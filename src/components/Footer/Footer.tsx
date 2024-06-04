import "./Footer.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <div className={"footer"}>
      <Link to={"/"}>
        <img
          className={"footer--logo"}
          src={"/logo-header.png"}
          alt={"Website logo"}
        />
      </Link>
      <p className={"footer--central-text"}>© 2024 Fantasy Forge</p>
      <Link className={"footer--pattern-library-text"} to={"/libreria"}>
        <small>
          {t("common:footer.patternLibrary-1-of-3")}
          <strong>{t("common:footer.patternLibrary-2-of-3")}</strong>
          {t("common:footer.patternLibrary-3-of-3")}
        </small>
      </Link>
    </div>
  );
};

import "./Footer.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button.tsx";

export const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <div className={"footer"}>
      <Button
        color={"none"}
        withoutHover
        component={Link}
        isLink
        paddingSize={"none"}
        borderType={"none"}
        to={"/"}
      >
        <img
          className={"footer--logo"}
          src={"/logo-header.png"}
          alt={"Website logo"}
        />
      </Button>
      <p className={"footer--central-text"}>© 2024 Fantasy Forge</p>
      <Button
        className={"footer--pattern-library-text"}
        color={"none"}
        withoutHover
        component={Link}
        isLink
        paddingSize={"none"}
        borderType={"none"}
        to={"/libreria"}
      >
        <small>
          {t("common:footer.patternLibrary-1-of-3")}
          <strong>{t("common:footer.patternLibrary-2-of-3")}</strong>
          {t("common:footer.patternLibrary-3-of-3")}
        </small>
      </Button>
    </div>
  );
};

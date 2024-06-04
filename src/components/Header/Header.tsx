import "./Header.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button.tsx";
import { ChangeLanguage } from "./ChangeLanguage.tsx";
import { SearchBar } from "./SearchBar.tsx";

export const Header = () => {
  const { t } = useTranslation("common");
  return (
    <div className={"header flex-row gap-12"}>
      <Link to={"/"}>
        <img className={"logo"} src={"/logo-header.png"} alt={"Website logo"} />
      </Link>
      <SearchBar />
      <div className={"flex-row margin-ver-auto gap-36"}>
        <ChangeLanguage />
        <Button
          className={"header--btn"}
          paddingSize={"none"}
          withoutHover
          color={"none"}
          borderType={"none"}
        >
          <img className={"icon"} src={"/icons/vector-account.png"} alt={""} />
          <small> {t("common:header.signIn")}</small>
        </Button>
        <Button
          component={Link}
          className={"header--btn"}
          paddingSize={"none"}
          withoutHover
          color={"none"}
          borderType={"none"}
          to={"/cesta"}
        >
          <img className={"icon"} src={"/icons/vector-cart.png"} alt={""} />
          <small> {t("common:header.cart")}</small>
        </Button>
      </div>
    </div>
  );
};

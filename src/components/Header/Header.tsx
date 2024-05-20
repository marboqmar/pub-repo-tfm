import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button.tsx";
import i18n from "i18next";
import { SearchContext } from "../../contexts/SearchContextProvider.tsx";

const ChangeLanguage = () => {
  const { t } = useTranslation("common");
  const [language, setNewLanguage] = useState<string>("es");

  const handleLanguage = () => {
    if (language === "es") {
      setNewLanguage("en");
    } else {
      setNewLanguage("es");
    }

    i18n.changeLanguage(language);
  };

  return (
    <Button
      className={"header--btn"}
      paddingSize={"none"}
      withoutHover
      color={"none"}
      borderType={"none"}
      onClick={handleLanguage}
    >
      <img className={"icon"} src={"/icons/vector-language.png"} alt={""} />
      <small> {t("common:header.language")}</small>
    </Button>
  );
};

const SearchBar = () => {
  const { setNewSearch } = useContext(SearchContext);
  const { t } = useTranslation("common");
  const navigate = useNavigate();

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewSearch(event.target.value);
  };

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <form
      className={"margin-ver-auto margin-lat-auto"}
      onSubmit={handleOnSubmit}
    >
      <input
        id={"searchBar"}
        className={"searchBar font small"}
        type={"text"}
        onChange={handleSearchInputChange}
        placeholder={t("common:header.searchBarPlaceholder")}
      />
    </form>
  );
};

const Header = () => {
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

export default Header;

import "./Header.scss";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button.tsx";
import { ChangeLanguage } from "./ChangeLanguage.tsx";
import { SearchBar } from "./SearchBar.tsx";

export const Header = () => {
  return (
    <div className={"header"}>
      <Button
        color={"none"}
        withoutHover
        component={Link}
        isLink
        paddingSize={"none"}
        borderType={"none"}
        to={"/"}
      >
        <img className={"logo"} src={"/logotipo.png"} alt={"Website logo"} />
      </Button>
      <div
        className={
          "flex-row align-items-center margin-ver-auto margin-left-auto gap-24"
        }
      >
        <SearchBar />
        <ChangeLanguage />
        <Button
          className={"header--btn"}
          paddingSize={"none"}
          withoutHover
          color={"none"}
          borderType={"none"}
        >
          <img className={"icon"} src={"/icons/my-account.png"} alt={""} />
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
          <img className={"icon"} src={"/icons/basket.png"} alt={""} />
        </Button>
      </div>
    </div>
  );
};

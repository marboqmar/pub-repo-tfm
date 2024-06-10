import { ChangeEvent, FormEvent, useContext } from "react";
import { SearchContext } from "../../contexts/SearchContextProvider.tsx";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button.tsx";

export const SearchBar = () => {
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
      className={"searchBar margin-ver-auto margin-lat-auto"}
      onSubmit={handleOnSubmit}
    >
      <Button
        type={"submit"}
        // className={"searchBar--img"}
        withoutHover
        borderType={"none"}
        paddingSize={"none"}
        color={"none"}
      >
        <img className={"searchBar--img"} src={"/icons/magnify.png"} alt={""} />
      </Button>
      <input
        className={"searchBar--input font small"}
        type={"text"}
        onChange={handleSearchInputChange}
        placeholder={t("common:header.searchBarPlaceholder")}
      />
    </form>
  );
};

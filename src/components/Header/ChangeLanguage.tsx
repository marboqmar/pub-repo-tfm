import { useState } from "react";
import i18n from "i18next";
import { Button } from "../Button/Button.tsx";

export const ChangeLanguage = () => {
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
      role={"languageButton"}
    >
      <img className={"icon"} src={"/icons/language.png"} alt={""} />
    </Button>
  );
};

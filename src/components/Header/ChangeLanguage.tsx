import { useTranslation } from "react-i18next";
import { useState } from "react";
import i18n from "i18next";
import { Button } from "../Button/Button.tsx";

export const ChangeLanguage = () => {
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
      role={"languageButton"}
    >
      <img className={"icon"} src={"/icons/vector-language.png"} alt={""} />
      <small> {t("common:header.language")}</small>
    </Button>
  );
};

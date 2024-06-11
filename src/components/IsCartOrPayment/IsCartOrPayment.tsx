import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button.tsx";
import { Link } from "react-router-dom";

export const IsCartOrPayment = () => {
  const currentUrl = window.location.href;
  const { t } = useTranslation("cart");

  if (currentUrl.includes("pago")) {
    return <Button color={"primary"}>{t("cart:confirm")}</Button>;
  }
  if (currentUrl.includes("cesta")) {
    return (
      <Button
        component={Link}
        className={"margin-lat-auto"}
        to={"/pago"}
        color={"primary"}
      >
        {t("cart:buy")}
      </Button>
    );
  }
};

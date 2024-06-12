import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button.tsx";
import { Link } from "react-router-dom";

export const IsCartOrPayment = () => {
  const currentUrl = window.location.href;
  const { t } = useTranslation("cart");

  if (currentUrl.includes("pago")) {
    return (
      <Button
        className={"totalToPay--payment-btn"}
        color={"primary"}
        type={"submit"}
        withoutBorderRadius
      >
        {t("cart:confirm")}
      </Button>
    );
  }
  if (currentUrl.includes("cesta")) {
    return (
      <Button
        component={Link}
        className={"totalToPay--cart-btn"}
        to={"/pago"}
        color={"primary"}
        type={"button"}
        borderType={"none"}
        withoutBorderRadius
      >
        {t("cart:buy")}
      </Button>
    );
  }
};

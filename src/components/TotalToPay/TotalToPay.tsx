import "./TotalToPay.scss";
import { Button } from "../Button/Button.tsx";
import { useTranslation } from "react-i18next";

const IsCartOrPayment = () => {
  const currentUrl = window.location.href;
  const { t } = useTranslation("cart");

  if (currentUrl.includes("pago")) {
    return <Button color={"primary"}>{t("cart:confirm")}</Button>;
  }
  if (currentUrl.includes("cesta")) {
    return (
      <Button className={"margin-lat-auto"} link={"/pago"} color={"primary"}>
        {t("cart:buy")}
      </Button>
    );
  }
};

const TotalToPay = () => {
  const { t } = useTranslation("cart");

  return (
    <div className={"total flex-column"}>
      <div className={"flex-row"}>
        <div className={"flex-column gap-12 text-first-column"}>
          <span>{t("cart:items")} (4)</span>
          <span>{t("cart:shipping")}</span>
          <span className={"bold"}>Total</span>
        </div>
        <div className={"flex-column gap-12 margin-left-auto"}>
          <span>640€</span>
          <span>{t("cart:free")}</span>
          <span className={"h3-bold"}>640€</span>
        </div>
      </div>
      <IsCartOrPayment />
    </div>
  );
};

export default TotalToPay;

import { useTranslation } from "react-i18next";

export const ThanksForPurchase = () => {
  const { t } = useTranslation("payment");

  return (
    <>
      <div className={"flex-column gap-24 toast-message-thanks-for-purchase"}>
        <img
          className={"toast-message-thanks-for-purchase--img"}
          src={"/anvil-stretched.png"}
          alt={""}
        />
        <div className={"margin-lat-48 flex-column gap-12"}>
          <p className={"h2-bold--no-margin margin-0"}>
            {t("payment:thanksPurchase.1/2")}
          </p>
          <p className={"margin-0"}>{t("payment:thanksPurchase.2/2")}</p>
        </div>
      </div>
    </>
  );
};

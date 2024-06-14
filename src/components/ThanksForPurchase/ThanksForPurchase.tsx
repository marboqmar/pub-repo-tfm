import { useTranslation } from "react-i18next";

export const ThanksForPurchase = () => {
  const { t } = useTranslation("payment");

  return (
    <>
      <div className={"thanks-for-purchase--bg-img"}></div>
      {/*<div className={"flex-row justify-content-center gap-60"}>*/}
      <div
        className={
          "flex-column gap-12 margin-lat-auto align-items-center toast-message-thanks-for-purchase"
        }
      >
        <p>{t("payment:thanksPurchase.1/3")}</p>
        <div
          className={
            "flex-column margin-lat-auto margin-top-24 gap-24 align-items-center"
          }
        >
          <p className={"margin-0"}>{t("payment:thanksPurchase.2/3")}</p>
          <p className={"margin-0"}>{t("payment:thanksPurchase.3/3")}</p>
        </div>
      </div>
      {/*  <img*/}
      {/*    className={"toast-message-thanks-for-purchase--img"}*/}
      {/*    src={"/fire.jpg"}*/}
      {/*    alt={""}*/}
      {/*  />*/}
      {/*</div>*/}
    </>
  );
};

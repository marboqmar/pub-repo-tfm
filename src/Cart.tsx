import { useTranslation } from "react-i18next";
import { TotalToPay } from "./components/TotalToPay/TotalToPay.tsx";
import { useCartOnLocalStorage } from "./services/useCartOnLocalStorage.ts";
import { CartItemList } from "./components/CartItemList/CartItemList.tsx";

export const Cart = () => {
  const { t } = useTranslation("cart");
  const { localStorageCartInfo } = useCartOnLocalStorage();

  return (
    <div className={"max-width-1500-centered"}>
      <h1 className={"siteTitle font-alt"}>{t("cart:title")}</h1>
      <div className={"siteTitle--line"}></div>
      {Object.keys(localStorageCartInfo).length === 0 ? (
        <p className={"margin-bottom-120"}>{t("cart:cartEmpty")}</p>
      ) : (
        <div className={"flex-row margin-bottom-120"}>
          <div className={"flex-wrap margin-right-60"}>
            <CartItemList />
          </div>
          <TotalToPay />
        </div>
      )}
    </div>
  );
};

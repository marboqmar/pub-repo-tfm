import { useTranslation } from "react-i18next";
import { TotalToPay } from "./components/TotalToPay/TotalToPay.tsx";
import { useCartOnLocalStorage } from "./services/useCartOnLocalStorage.ts";
import { CartItemList } from "./components/CartList/CartItemList.tsx";

export const Cart = () => {
  const { t } = useTranslation("cart");
  const { localStorageCartInfo } = useCartOnLocalStorage();

  return (
    <div className={"margin-lat-60"}>
      <h1 className={"cartTitle"}>{t("cart:title")}</h1>
      <div className={"cartTitle--line"}></div>
      {Object.keys(localStorageCartInfo).length === 0 ? (
        <p>{t("cart:cartEmpty")}</p>
      ) : (
        <div className={"flex-row"}>
          <div className={"gap-60 margin-bottom-60 margin-right-60 flex-wrap"}>
            <CartItemList />
          </div>
          <TotalToPay />
        </div>
      )}
    </div>
  );
};

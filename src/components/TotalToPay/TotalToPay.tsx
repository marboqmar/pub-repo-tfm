import "./TotalToPay.scss";
import { useTranslation } from "react-i18next";
import { useCartItemsList } from "../../services/useCartItemsList.ts";
import { ItemDetailsModel } from "../../models";
import { useCartOnLocalStorage } from "../../services/useCartOnLocalStorage.ts";
import { IsCartOrPayment } from "../IsCartOrPayment/IsCartOrPayment.tsx";

export const TotalToPay = () => {
  const { t } = useTranslation("cart");
  const { localStorageCartInfo } = useCartOnLocalStorage();
  let totalPrice: number = 0;
  let totalNumberItems: number = 0;

  // Get number of items
  const quantitiesFromCart = Object.values(localStorageCartInfo);

  quantitiesFromCart.forEach((quantity) => {
    totalNumberItems += quantity;
  });

  // Get total price
  useCartItemsList().forEach((item: ItemDetailsModel) => {
    totalPrice = totalPrice + item.price * localStorageCartInfo[item.key];
  });

  return (
    <div className={"total flex-column"}>
      <div className={"flex-row"}>
        <div className={"flex-column gap-12 text-first-column"}>
          <span>
            {t("cart:items")} ({totalNumberItems})
          </span>
          <span>{t("cart:shipping")}</span>
          <span className={"bold"}>Total</span>
        </div>
        <div className={"flex-column gap-12 margin-left-auto"}>
          <span>{totalPrice}€</span>
          <span>{t("cart:free")}</span>
          <span className={"h3-bold"}>{totalPrice}€</span>
        </div>
      </div>
      <IsCartOrPayment />
    </div>
  );
};

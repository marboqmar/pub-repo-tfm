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
    <div className={"flex-column margin-left-auto"}>
      <div className={"totalToPay flex-column border-gray-300"}>
        <div className={"flex-row totalToPay--text"}>
          <div className={"flex-column gap-12"}>
            <p>
              {t("cart:items")} ({totalNumberItems})
            </p>
            <p>{t("cart:shipping")}</p>
            <p className={"h3-bold"}>Total</p>
          </div>
          <div className={"flex-column gap-12 margin-left-auto"}>
            <p>{totalPrice}€</p>
            <p>{t("cart:free")}</p>
            <p className={"h3-bold"}>{totalPrice}€</p>
          </div>
        </div>
        <IsCartOrPayment />
      </div>
    </div>
  );
};

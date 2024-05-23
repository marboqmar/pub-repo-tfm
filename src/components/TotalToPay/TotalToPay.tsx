import "./TotalToPay.scss";
import { Button } from "../Button/Button.tsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useCartItemsList } from "../../lists/CartItemsList.ts";
import { ItemDetailsModel } from "../../models";

const IsCartOrPayment = () => {
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

const TotalToPay = () => {
  const { t } = useTranslation("cart");
  let totalPrice: number = 0;

  useCartItemsList().forEach((item: ItemDetailsModel) => {
    totalPrice = totalPrice + item.price;
  });

  // const localStorageTest = [
  //   { itemId: 5, quantity: 1 },
  //   { itemId: 2, quantity: 1 },
  //   { itemId: 1, quantity: 1 },
  //   { itemId: 3, quantity: 1 },
  //   { itemId: 1, quantity: 1 },
  //   { itemId: 2, quantity: 1 },
  // ];
  // const pricesList = CART_ITEMS_LIST().map(item => {
  //   return {item.key: item.price}
  // })
  // const finalPrice = localStorageTest.reduce(
  //   (aggregator: number, item: {itemId: number, quantity: number}) => {
  //     return aggregator + item.quantity * pricesList[item.itemId]
  //   },
  // );

  return (
    <div className={"total flex-column"}>
      <div className={"flex-row"}>
        <div className={"flex-column gap-12 text-first-column"}>
          <span>
            {t("cart:items")} ({useCartItemsList().length})
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

export default TotalToPay;

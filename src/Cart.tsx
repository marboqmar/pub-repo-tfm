import { Button } from "./components/Button/Button.tsx";
import { useTranslation } from "react-i18next";
import { ItemDetailsModel } from "./models";
import { cartItemsList } from "./lists/CartItemsList.ts";
import TotalToPay from "./components/TotalToPay/TotalToPay.tsx";

const CartList = () => {
  const { t } = useTranslation("cart");

  return (
    <>
      {cartItemsList().map((item: ItemDetailsModel) => (
        <div className={"cartItem"} key={`${item.img}${item.name}`}>
          <img
            className={"cartItem--img"}
            src={item.img}
            alt={"cart item image"}
          />
          <div>
            <h2 className={"h2"}>{item.name}</h2>
            <div className={"flex-column gap-24"}>
              <div className={"flex-row gap-24"}>
                <span>{t("cart:quantity")}</span>
                <div className={"flex gap-12"}>
                  <img
                    className={"plus-and-minus-i"}
                    src={"/icons/minus-icon.png"}
                    alt={""}
                  />
                  <span> 1 </span>
                  <img
                    className={"plus-and-minus-i"}
                    src={"/icons/plus-icon.png"}
                    alt={""}
                  />
                </div>
              </div>
              <Button
                className={"cartItem--delete"}
                color={"none"}
                withoutHover
                paddingSize={"none"}
                borderType={"none"}
              >
                {t("cart:delete")}
              </Button>
              <span>{item.price}€</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const Cart = () => {
  const { t } = useTranslation("cart");
  return (
    <div className={"margin-lat-60"}>
      <h1 className={"cartTitle"}>{t("cart:title")}</h1>
      <div className={"cartTitle--line"}></div>
      <div className={"cartDisplay flex"}>
        <div className={"flex-wrap gap-60 margin-bottom-60"}>
          <CartList />
        </div>
        <TotalToPay />
      </div>
    </div>
  );
};

export default Cart;

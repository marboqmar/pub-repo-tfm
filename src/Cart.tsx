import TotalToPay from "./components/TotalToPay/TotalToPay.tsx";
import { Button } from "./components/Button/Button.tsx";
import { useTranslation } from "react-i18next";

// import { useState } from "react";
// import { ItemDetailsModel } from "./models";

const CartItems = () => {
  const { t } = useTranslation("cart");
  // const [cartItems, setCartItems] = useState<ItemDetailsModel[]>([]);

  //Adds item with same item.key as the one in localStorage and saves it on a state variable

  return (
    <div className={"cartItem"}>
      <img
        className={"cartItem--img"}
        src={"/cart-image.png"}
        alt={"cart item image"}
      />
      <div>
        <h2 className={"h2"}>Knight’s greatsword</h2>
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
          <span>160€</span>
        </div>
      </div>
    </div>
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
          <CartItems />
          <CartItems />
          <CartItems />
          <CartItems />
        </div>
        <TotalToPay />
      </div>
    </div>
  );
};

export default Cart;

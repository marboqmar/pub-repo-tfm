import { useTranslation } from "react-i18next";
import { useCartOnLocalStorage } from "../../services/useCartOnLocalStorage.ts";
import { useCartItemsList } from "../../services/useCartItemsList.ts";
import { ItemDetailsModel } from "../../models";
import { Button } from "../Button/Button.tsx";

export const CartItemList = () => {
  const { t } = useTranslation("cart");
  const { localStorageCartInfo, addItemToCart, removeItemFromCart } =
    useCartOnLocalStorage();

  return useCartItemsList().map((item: ItemDetailsModel) => (
    <div className={"cartItem flex-row"} key={`${item.img}${item.name}`}>
      <img className={"cartItem--img"} src={item.img} alt={"cart item image"} />
      <div>
        <h2 className={"font"}>
          <strong>{item.name}</strong>
        </h2>
        <div className={"flex-column gap-24"}>
          <div className={"flex-row gap-24"}>
            <span>{t("cart:quantity")}</span>
            <div className={"flex gap-12"}>
              <Button
                color={"none"}
                withoutHover
                borderType={"none"}
                paddingSize={"none"}
                type={"button"}
                onClick={() => removeItemFromCart(item.key, false)}
              >
                <img
                  className={"plus-and-minus-i"}
                  src={"/icons/minus-icon.png"}
                  alt={""}
                />
              </Button>
              <span>{localStorageCartInfo[item.key]}</span>
              <Button
                color={"none"}
                withoutHover
                borderType={"none"}
                paddingSize={"none"}
                type={"button"}
                onClick={() => {
                  addItemToCart(item.key);
                }}
              >
                <img
                  className={"plus-and-minus-i"}
                  src={"/icons/plus-icon.png"}
                  alt={""}
                />
              </Button>
            </div>
          </div>

          <Button
            className={"cartItem--delete"}
            color={"none"}
            withoutHover
            paddingSize={"none"}
            borderType={"none"}
            type={"button"}
            onClick={() => removeItemFromCart(item.key, true)}
          >
            {t("cart:delete")}
          </Button>
          <span>{item.price}€</span>
        </div>
      </div>
    </div>
  ));
};

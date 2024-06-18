import { useTranslation } from "react-i18next";
import { useCartOnLocalStorage } from "../../services/useCartOnLocalStorage.ts";
import { useCartItemsList } from "../../services/useCartItemsList.ts";
import { ItemDetailsModel } from "../../models";
import { Button } from "../Button/Button.tsx";
import { Link } from "react-router-dom";

export const CartItemList = () => {
  const { t } = useTranslation("cart");
  const { i18n } = useTranslation();
  const { localStorageCartInfo, addItemToCart, removeItemFromCart } =
    useCartOnLocalStorage();

  return useCartItemsList().map((item: ItemDetailsModel) => (
    <div
      className={"padding-bottom-12 flex-column border-gray-300 cartItem"}
      key={`${item.img}${item.name}`}
    >
      <Button
        color={"none"}
        withoutHover
        component={Link}
        isLink
        paddingSize={"none"}
        borderType={"none"}
        to={`/detalles-producto/?ref=${item.key}`}
        key={`${item.img}${item.name}`}
      >
        <img
          className={"cartItem--img"}
          src={item.img}
          alt={"cart item image"}
        />
      </Button>
      <div className={"margin-lat-12 flex-column flex-1"}>
        <h2
          className={
            "font font-alt margin-bottom-24 padding-bottom-24 flex-1 border-bottom-gray-light"
          }
        >
          <strong>{i18n.language === "es" ? item.name : item.nameEn}</strong>
        </h2>
        <div className={"flex-column gap-24 margin-bottom-24"}>
          <div className={"flex-row gap-24 margin-right-12"}>
            <p className={"flex"}>{t("cart:quantity")}</p>
            <div className={"flex width-100"}>
              <div className={"flex gap-12"}>
                <Button
                  color={"none"}
                  withoutHover
                  borderType={"none"}
                  paddingSize={"none"}
                  onClick={() => removeItemFromCart(item.key, false)}
                >
                  <img
                    className={"plus-and-minus-i"}
                    src={"/icons/minus-icon.png"}
                    alt={""}
                  />
                </Button>
                <p>{localStorageCartInfo[item.key]}</p>
                <Button
                  color={"none"}
                  withoutHover
                  borderType={"none"}
                  paddingSize={"none"}
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
              <Button
                className={"cartItem--delete"}
                color={"none"}
                withoutHover
                paddingSize={"none"}
                borderType={"none"}
                onClick={() => removeItemFromCart(item.key, true)}
              >
                <i className="fa-solid fa-trash"></i>
              </Button>
            </div>
          </div>
          <p>
            {item.price}€/{t("cart:unit")}
          </p>
        </div>
      </div>
    </div>
  ));
};

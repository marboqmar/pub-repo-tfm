import { useTranslation } from "react-i18next";
import { useCartItemsList } from "../../services/useCartItemsList.ts";
import { ItemDetailsModel } from "../../models";
import { useCartOnLocalStorage } from "../../services/useCartOnLocalStorage.ts";

export const PaymentItemList = () => {
  const { t } = useTranslation("payment");
  const { localStorageCartInfo } = useCartOnLocalStorage();

  return (
    <div className={"itemDisplay--home-and-payment flex-wrap margin-right-60"}>
      {useCartItemsList().map((item: ItemDetailsModel) => (
        <div key={`${item.img}${item.name}`}>
          <div className={"payment--item"}>
            <img className={"payment--img"} src={item.img} alt={""} />
            <div className={"item item--text"}>
              <span>
                <strong>{item.name}</strong>
              </span>
              <span>
                {t("payment:quantity")}: {localStorageCartInfo[item.key]}
              </span>
              <span>{item.price}€</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

import { useTranslation } from "react-i18next";
import { useCartItemsList } from "../../services/useCartItemsList.ts";
import { ItemDetailsModel } from "../../models";
import { useCartOnLocalStorage } from "../../services/useCartOnLocalStorage.ts";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button.tsx";

export const PaymentItemList = () => {
  const { t } = useTranslation("payment");
  const { localStorageCartInfo } = useCartOnLocalStorage();

  return (
    <div className={"itemDisplay--home-and-payment flex-wrap margin-right-60"}>
      {useCartItemsList().map((item: ItemDetailsModel) => (
        <div key={`${item.img}${item.name}`}>
          <div className={"payment--item"}>
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
              <img className={"payment--img"} src={item.img} alt={""} />
            </Button>
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

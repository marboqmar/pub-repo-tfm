import { useTranslation } from "react-i18next";
import { useCartItemsList } from "../../services/useCartItemsList.ts";
import { ItemDetailsModel } from "../../models";
import { useCartOnLocalStorage } from "../../services/useCartOnLocalStorage.ts";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button.tsx";

export const PaymentItemList = () => {
  const { t } = useTranslation("payment");
  const { i18n } = useTranslation();
  const { localStorageCartInfo } = useCartOnLocalStorage();

  return (
    <div className={"itemDisplay--home-and-payment flex-wrap margin-right-60"}>
      {useCartItemsList().map((item: ItemDetailsModel) => (
        <div
          className={
            "border-gray-300 payment--item flex-column padding-bottom-12"
          }
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
            <img className={"payment--img"} src={item.img} alt={""} />
          </Button>
          <div className={"flex-column flex-1 margin-top-18 margin-lat-12"}>
            <p
              className={
                "font font-alt flex-1 margin-bottom-24 padding-bottom-24 border-bottom-gray-light"
              }
            >
              <strong>
                {i18n.language === "es" ? item.name : item.nameEn}
              </strong>
            </p>
            <div className={"flex-column gap-24 margin-bottom-24"}>
              <p>
                {t("payment:quantity")}: {localStorageCartInfo[item.key]}
              </p>
              <p>
                {item.price}€/{t("payment:unit")}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

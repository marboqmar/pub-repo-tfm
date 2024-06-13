import "./ItemDetails.scss";
import { Button } from "../Button/Button.tsx";
import { useTranslation } from "react-i18next";
import { ItemDetailsModel } from "../../models";
import { useCartOnLocalStorage } from "../../services/useCartOnLocalStorage.ts";
import { Bounce, toast, ToastContainer } from "react-toastify";

export const ItemDetails = ({ item }: { item: ItemDetailsModel }) => {
  const { t } = useTranslation("common");
  const { addItemToCart } = useCartOnLocalStorage();

  const notify = () =>
    toast(t("productDetails:itemAddedToCart"), {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  return (
    <div className={"flex-row"}>
      <div
        className={"itemDetails--images-section flex-row border-right-gray-300"}
      >
        <img className={"itemDetails--img"} src={item.img} alt={""} />
        <div
          className={
            "itemDetails--img-container margin-lat-24 margin-bottom-24 margin-top-24"
          }
        >
          <img className={"itemDetails--img-small"} src={item.img} alt={""} />
          <img className={"itemDetails--img-small"} src={item.img} alt={""} />
        </div>
      </div>
      <div className={"itemDetails--text-section flex-column"}>
        <h3 className={"h2--no-margin itemDetails--sword-title"}>
          {item.name}
        </h3>
        <p
          className={
            "h2--no-margin itemDetails--sword-price border-bottom-gray-300"
          }
        >
          <span>{item.price}€</span>
        </p>
        <p className={"itemDetails--sword-description"}>{item.description}</p>
        <Button
          className={"itemDetails--btn"}
          color={"primary"}
          withoutBorderRadius
          onClick={() => {
            addItemToCart(item.key);
            notify();
          }}
        >
          {t("common:addToCart")}
        </Button>
        <ToastContainer
          bodyClassName="toast-message"
          toastClassName="toast-color"
          position="top-right"
          autoClose={4000}
          limit={1}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnHover={false}
          theme="light"
          transition={Bounce}
        />
      </div>
    </div>
  );
};

import { useTranslation } from "react-i18next";
import { useShopItemsList } from "../../services/useShopItemsList.ts";
import { useSearchParams } from "react-router-dom";
import { useCartOnLocalStorage } from "../../services/useCartOnLocalStorage.ts";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { ItemDetailsModel } from "../../models";
import { Button } from "../Button/Button.tsx";

export const Product = () => {
  const { t } = useTranslation("productDetails");
  const { shopItemsList } = useShopItemsList();
  const [param] = useSearchParams();
  const productIdParam = Number(param.get("ref"));
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

  const selectedItem = shopItemsList.find((item: ItemDetailsModel) => {
    return item.key === productIdParam;
  });

  return (
    <>
      {selectedItem ? (
        <div className={"product"}>
          <img className={"product--img"} src={selectedItem.img} alt={""} />
          <div
            className={
              "product--text flex-column grid__item-6-columns margin-left-auto align-flex-start"
            }
          >
            <h3 className={"h2--no-margin margin-top-0"}>
              {selectedItem.name}
            </h3>
            <div className={"underline bgcolor-gray-100"}></div>
            <p className={"align-text-left"}>{selectedItem.description}</p>
            <div className={"underline bgcolor-gray-100"}></div>
            <p className={"h2 slider-price"}>
              <span>{selectedItem.price} €</span>
            </p>
            <Button
              color={"primary"}
              onClick={() => {
                addItemToCart(selectedItem.key);
                notify();
              }}
            >
              {t("productDetails:addToCart")}
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
      ) : (
        // SUBSTITUTE THIS BY ERROR HANDLING
        console.log("2")
      )}
    </>
  );
};

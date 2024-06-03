import { Button } from "./components/Button/Button.tsx";
import { useTranslation } from "react-i18next";
import { ItemDetailsModel } from "./models";
import { Link, useSearchParams } from "react-router-dom";
import { useCartOnLocalStorage } from "./services/useCartOnLocalStorage.ts";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useShopItemsList } from "./services/useShopItemsList.ts";

const Product = () => {
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

const Review = () => {
  return (
    <div>
      <div>
        <img src={"../public/user.png"} alt={""} />
        <span>Pepito</span>
      </div>
      <p>
        Review: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
      </p>
    </div>
  );
};

const SimilarProduct = () => {
  return (
    <Button
      component={Link}
      className={"similarProduct--item flex-column"}
      color={"none"}
      paddingSize={"none"}
      withoutHover
      borderType={"none"}
      to={"/detalles-producto"}
    >
      <img
        className={"similarProduct--img"}
        src={"/cart-image.png"}
        alt={"cart item image"}
      />
      <span className={"bold"}>Knight’s greatsword</span>
      <span>160€</span>
    </Button>
  );
};

const ProductDetails = () => {
  const { t } = useTranslation("productDetails");

  return (
    <div className={"margin-lat-60"}>
      <h1 className={"productDetails--title"}>{t("productDetails:title")}</h1>
      <div className={"productDetails--title-line"}></div>
      <div className={"flex-column gap-60"}>
        <div className={"product"}>
          <div className={"flex-row"}>
            <Product />
          </div>
        </div>
        <div className={"flex-column gap-12"}>
          <h2 className={"h2 productDetails--subtitles"}>
            {t("productDetails:reviews")}
          </h2>
          <div>
            <Review />
            <Review />
            <Review />
          </div>
        </div>
        <div className={"flex-column gap-12 margin-bottom-60"}>
          <h2 className={"h2 productDetails--subtitles"}>
            {t("productDetails:similarProducts")}
          </h2>
          <div className={"similarProduct"}>
            <SimilarProduct />
            <SimilarProduct />
            <SimilarProduct />
            <SimilarProduct />
            <SimilarProduct />
            <SimilarProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

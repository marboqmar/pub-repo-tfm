import { Button } from "../Button/Button.tsx";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useCartOnLocalStorage } from "../../services/useCartOnLocalStorage.ts";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const IsLandingOrProductDetails = ({ itemKey }: { itemKey: number }) => {
  const currentUrl = window.location.href;
  const { addItemToCart } = useCartOnLocalStorage();
  const { t } = useTranslation("common");

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

  if (currentUrl.includes("detalles-producto")) {
    return (
      <>
        <Button
          className={"itemDetails--btn"}
          color={"primary"}
          withoutBorderRadius
          onClick={() => {
            addItemToCart(itemKey);
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
      </>
    );
  }

  return (
    <Button
      className={"itemDetails--btn"}
      color={"primary"}
      withoutBorderRadius
      component={Link}
      isLink
      to={`/detalles-producto/?ref=${itemKey}`}
    >
      {t("common:seeProductDetails")}
    </Button>
  );
};

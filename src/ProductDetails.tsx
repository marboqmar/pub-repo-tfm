import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import { Product } from "./components/ProductDetailsComponents/Product.tsx";
import { Review } from "./components/ProductDetailsComponents/Review.tsx";
import { SimilarProduct } from "./components/ProductDetailsComponents/SimilarProduct.tsx";

export const ProductDetails = () => {
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

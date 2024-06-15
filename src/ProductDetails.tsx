import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import { Review } from "./components/Review/Review.tsx";
import { useSearchParams } from "react-router-dom";
import { ItemDetailsModel } from "./models";
import { ItemsFromApiContext } from "./contexts/ItemsFromApiContextProvider.tsx";
import { useContext } from "react";
import { useRandomSimilarProducts } from "./services/useRandomSimilarProducts.ts";
import { ItemDetails } from "./components/ItemDetails/ItemDetails.tsx";
import { ItemsToDisplay } from "./components/ItemsToDisplay/ItemsToDisplay.tsx";
import { REVIEWS_LIST } from "./lists/REVIEWS_LIST.ts";
import { reviewModel } from "./models";

export const ProductDetails = () => {
  const { t } = useTranslation("productDetails");
  const { itemsFromApi } = useContext(ItemsFromApiContext);
  const [param] = useSearchParams();
  const productIdParam = Number(param.get("ref"));
  const randomProductsList = useRandomSimilarProducts(5);

  const selectedItem = itemsFromApi.find((item: ItemDetailsModel) => {
    return item.key === productIdParam;
  });

  return (
    <>
      <div className={"max-width-1500-centered"}>
        <h1 className={"siteTitle"}>{t("productDetails:title")}</h1>
        <div className={"siteTitle--line"}></div>
        <div className={"flex-column gap-60"}>
          {/*If item selected returns details of that item, otherwise return no results found*/}
          {selectedItem ? (
            <>
              <div className={"border-gray-300"}>
                <ItemDetails item={selectedItem} />
              </div>
              <div className={"flex-column gap-12 border-gray-300"}>
                <h2
                  className={
                    "h2--no-margin productDetails--reviews-title border-bottom-gray-300"
                  }
                >
                  {t("productDetails:reviews")}
                </h2>
                {REVIEWS_LIST.map((review: reviewModel) => (
                  <Review review={review} key={review.name + review.img} />
                ))}
              </div>
            </>
          ) : (
            <p>{t("productDetails:noResults")}</p>
          )}
          <div className={"flex-column gap-12"}>
            <h2 className={"h2--no-margin"}>
              {/*If no item was selected, rather than "similar products" state "find other products"*/}
              {selectedItem
                ? t("productDetails:similarProducts")
                : t("productDetails:findMore")}
            </h2>
          </div>
        </div>
      </div>
      <div className={"margin-bottom-60 border-top-gray-300"} />
      <ItemsToDisplay itemList={randomProductsList} />
    </>
  );
};

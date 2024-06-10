import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import { Product } from "./components/ProductDetailsComponents/Product/Product.tsx";
import { Review } from "./components/ProductDetailsComponents/Review.tsx";
import { SimilarProduct } from "./components/ProductDetailsComponents/SimilarProduct/SimilarProduct.tsx";
import { useSearchParams } from "react-router-dom";
import { ItemDetailsModel } from "./models";
import { ItemsFromApiContext } from "./contexts/ItemsFromApiContextProvider.tsx";
import { useContext } from "react";

const useRandomSimilarProducts = () => {
  const { itemsFromApi } = useContext(ItemsFromApiContext);

  const randomElement =
    itemsFromApi[Math.floor(Math.random() * itemsFromApi.length)];

  console.log(randomElement);

  const randomItemList: ItemDetailsModel[] = [];

  for (let i = 1; i < 6; i++) {
    randomItemList.push(randomElement);
  }

  return itemsFromApi.filter((item: ItemDetailsModel) => {
    randomItemList.forEach((randomItem) => {
      return randomItem.key === item.key;
    });
  });
};

export const ProductDetails = () => {
  const { t } = useTranslation("productDetails");
  const { itemsFromApi } = useContext(ItemsFromApiContext);
  const [param] = useSearchParams();
  const productIdParam = Number(param.get("ref"));
  const testList = useRandomSimilarProducts();

  console.log(testList);

  const selectedItem = itemsFromApi.find((item: ItemDetailsModel) => {
    return item.key === productIdParam;
  });

  return (
    <div className={"margin-lat-60"}>
      <h1 className={"productDetails--title"}>{t("productDetails:title")}</h1>
      <div className={"productDetails--title-line"}></div>
      <div className={"flex-column gap-60"}>
        {/*If item selected returns details of that item, otherwise return no results found*/}
        {selectedItem ? (
          <>
            <div className={"product"}>
              <div className={"flex-row"}>
                <Product selectedItem={selectedItem} />
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
          </>
        ) : (
          <p>{t("productDetails:noResults")}</p>
        )}
        <div className={"flex-column gap-12 margin-bottom-60"}>
          <h2 className={"h2 productDetails--subtitles"}>
            {/*If no item was selected, rather than "similar products" state "find other products"*/}
            {selectedItem
              ? t("productDetails:similarProducts")
              : t("productDetails:findMore")}
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

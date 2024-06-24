import "./ItemDetails.scss";
import { ItemDetailsModel } from "../../models";
import { IsAddToCartOrProductDetailsBtn } from "../IsLandingOrProductDetailsBtn/IsAddToCartOrProductDetailsBtn.tsx";
import { useContext, useEffect } from "react";
import { Button } from "../Button/Button.tsx";
import { LargeImage } from "../LargeImage/LargeImage.tsx";
import { useTranslation } from "react-i18next";
import { MainImageContext } from "../../contexts/MainImageContextProvider.tsx";

export const ItemDetails = ({ item }: { item: ItemDetailsModel }) => {
  const { setNewMainImage, mainImage } = useContext(MainImageContext);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!mainImage) {
      setNewMainImage(item.img);
    }
  }, [item.img, mainImage]);

  console.log(mainImage);

  const handleOnClick = (img: string) => {
    setNewMainImage(img);
  };

  return (
    <div className={"flex-row"}>
      <div
        className={"itemDetails--images-section flex-row border-right-gray-300"}
      >
        <LargeImage />
        <div
          className={
            "itemDetails--img-container margin-lat-24 margin-bottom-24 margin-top-24"
          }
        >
          <Button
            color={"none"}
            withoutHover
            paddingSize={"none"}
            borderType={"none"}
            withoutBorderRadius
            onClick={() => {
              handleOnClick(item.img);
            }}
          >
            <img className={"itemDetails--img-small"} src={item.img} alt={""} />
          </Button>
          <Button
            color={"none"}
            withoutHover
            paddingSize={"none"}
            borderType={"none"}
            withoutBorderRadius
            onClick={() => {
              handleOnClick(item.img2);
            }}
          >
            <img
              className={"itemDetails--img-small"}
              src={item.img2}
              alt={""}
            />
          </Button>
        </div>
      </div>
      <div className={"itemDetails--text-section flex-column"}>
        <h3 className={"h2--no-margin font-alt itemDetails--sword-title"}>
          {i18n.language === "es" ? item.name : item.nameEn}
        </h3>
        <p
          className={"h2--no-margin margin-0 padding-24 border-bottom-gray-300"}
        >
          {item.price}€
        </p>
        <div className={"padding-24"}>
          <p className={"margin-bottom-12"}>
            {i18n.language === "es" ? item.description1 : item.descriptionEn1}
          </p>
          <p>
            {i18n.language === "es" ? item.description2 : item.descriptionEn2}
          </p>
        </div>
        <IsAddToCartOrProductDetailsBtn itemKey={item.key} />
      </div>
    </div>
  );
};

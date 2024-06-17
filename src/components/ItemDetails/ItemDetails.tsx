import "./ItemDetails.scss";
import { ItemDetailsModel } from "../../models";
import { IsLandingOrProductDetails } from "../IsLandingOrProductDetails/IsLandingOrProductDetails.tsx";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button.tsx";
import { useSearchParams } from "react-router-dom";
import { MainImage } from "../MainImage/MainImage.tsx";

export const ItemDetails = ({ item }: { item: ItemDetailsModel }) => {
  const [selectedImage, setSelectedImage] = useState<string>(item.img);
  const [param] = useSearchParams();
  const productIdParam = Number(param.get("ref"));

  // Trigger re-render of main image when clicking on similar product on product details site
  useEffect(() => {
    setSelectedImage(item.img);
  }, [productIdParam, item.img]);

  const handleOnClick = (img: string) => {
    setSelectedImage(img);
  };

  return (
    <div className={"flex-row"}>
      <div
        className={"itemDetails--images-section flex-row border-right-gray-300"}
      >
        <MainImage image={selectedImage} />
        {/*<img className={"itemDetails--img"} src={selectedImage} alt={""} />*/}
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
        <IsLandingOrProductDetails itemKey={item.key} />
      </div>
    </div>
  );
};

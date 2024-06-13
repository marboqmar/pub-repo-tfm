import "./ItemDetails.scss";
import { ItemDetailsModel } from "../../models";
import { IsLandingOrProductDetails } from "../IsLandingOrProductDetails/IsLandingOrProductDetails.tsx";

export const ItemDetails = ({ item }: { item: ItemDetailsModel }) => {
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
        <IsLandingOrProductDetails itemKey={item.key} />
      </div>
    </div>
  );
};

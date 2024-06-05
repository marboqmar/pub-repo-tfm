import "./ItemsToDisplay.scss";
import { Link } from "react-router-dom";
import { ItemDetailsModel } from "../../models";

interface ItemsToDisplayProps {
  itemList: ItemDetailsModel[];
}

export const ItemsToDisplay = ({ itemList }: ItemsToDisplayProps) => {
  return (
    <>
      <div className={"itemDisplay"}>
        {itemList.map((item: ItemDetailsModel) => (
          <Link
            className={"item--link"}
            to={`/detalles-producto/?ref=${item.key}`}
            key={`${item.img}${item.name}`}
          >
            <div className={"item"}>
              <img className={"item--img"} src={item.img} alt={""} />
              <div className={"item item--text"}>
                <span>{item.name}</span>
                <span>{item.price}€</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

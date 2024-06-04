import "./ItemsToDisplay.scss";
import { Link } from "react-router-dom";
import { ItemDetailsModel } from "../../models";

interface ItemsToDisplayProps {
  itemsList: ItemDetailsModel[];
}

export const ItemsToDisplay = ({ itemsList }: ItemsToDisplayProps) => {
  return (
    <>
      <div className={"itemDisplay"}>
        {itemsList.map((item: ItemDetailsModel) => (
          <Link
            className={"item-link"}
            to={`/detalles-producto/?ref=${item.key}`}
            key={`${item.img}${item.name}`}
          >
            <div className={"item"}>
              <img src={item.img} alt={""} />
              <div className={"item item-text"}>
                <span className={"itemTitle"}>{item.name}</span>
                <span>{item.price}€</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

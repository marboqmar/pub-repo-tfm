import "./ItemsToDisplay.scss";
import { Button } from "../Button/Button.tsx";
import { ItemDetailsModel } from "../../models";
import { Link } from "react-router-dom";

interface ItemsToDisplayProps {
  itemList: ItemDetailsModel[];
}

export const ItemsToDisplay = ({ itemList }: ItemsToDisplayProps) => {
  return (
    <>
      <div className={"itemDisplay"}>
        {itemList.map((item: ItemDetailsModel) => (
          <Button
            color={"none"}
            withoutHover
            component={Link}
            isLink
            paddingSize={"none"}
            borderType={"none"}
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
          </Button>
        ))}
      </div>
    </>
  );
};

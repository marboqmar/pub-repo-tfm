import "./ItemsToDisplay.scss";
import { Button } from "../Button/Button.tsx";
import { ItemDetailsModel } from "../../models";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ItemsToDisplayProps {
  itemList: ItemDetailsModel[];
}

export const ItemsToDisplay = ({ itemList }: ItemsToDisplayProps) => {
  const { i18n } = useTranslation();
  const handleOnClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div
        className={
          itemList.length > 0
            ? "itemDisplay margin-bottom-60 border-gray-light"
            : "itemDisplay margin-bottom-60"
        }
      >
        {itemList.map((item: ItemDetailsModel) => (
          <article
            className={"itemDisplay--item flex-column position-rel"}
            key={`${item.img}${item.name}`}
          >
            <div className={"flex-column flex-1 gap-12"}>
              <img className={"item--img"} src={item.img} alt={""} />
              <div
                className={
                  "flex-column flex-1 gap-24 margin-bottom-24 item--text"
                }
              >
                <Button
                  className={"flex-column flex-1 itemDisplay--btn"}
                  color={"none"}
                  withoutHover
                  component={Link}
                  isLink
                  paddingSize={"none"}
                  borderType={"none"}
                  to={`/detalles-producto/?ref=${item.key}`}
                  key={`${item.img}${item.name}`}
                  onClick={handleOnClick}
                >
                  <h3 className={"font margin-0 margin-top-12"}>
                    <strong>
                      {i18n.language === "es" ? item.name : item.nameEn}
                    </strong>
                  </h3>
                </Button>
                <p>{item.price}€</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

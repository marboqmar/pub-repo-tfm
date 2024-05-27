import "./ItemsToDisplay.scss";
import { Link } from "react-router-dom";
import { ItemDetailsModel } from "../../models";
import { useState, useEffect, useMemo } from "react";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContextProvider.tsx";
import { useShopItemsList } from "../../services/useShopItemsList.ts";
import { ActiveFilterContext } from "../../contexts/ActiveFilterContextProvider.tsx";

const ItemsToDisplay = () => {
  const shopItems = useShopItemsList();
  const [search, setSearch] = useState<string>("");
  const { search: searchValue } = useContext(SearchContext);
  const { activeFilter } = useContext(ActiveFilterContext);

  // Get search value from search bar on header
  useEffect(() => {
    setSearch(searchValue);
  }, [searchValue]);

  const displayedItems = useMemo(() => {
    if (!search && !activeFilter) {
      return shopItems;
    }
    return shopItems.filter((item: ItemDetailsModel) => {
      // If there is an active filter and the item does not match with this active filter, return false
      if (activeFilter && activeFilter !== item.origin) {
        return false;
      }

      if (!search) {
        return true;
      }

      // Return true for items that include in its name the search value
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, activeFilter, shopItems]);

  return (
    <>
      <div className={"itemDisplay"}>
        {displayedItems.map((item: ItemDetailsModel) => (
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

export default ItemsToDisplay;

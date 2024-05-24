import "./ItemsToShowAndFilters.scss";
import { Link } from "react-router-dom";
import { FilterModel, ItemDetailsModel } from "../../models";
import { useState, useEffect, useMemo } from "react";
import FILTER_OPTIONS_LIST from "../../lists/FILTER_OPTIONS_LIST.ts";
import { Button } from "../Button/Button.tsx";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContextProvider.tsx";
import { useShopItemsList } from "../../utils/useShopItemsList.tsx";

const ItemsToShowAndFilters = () => {
  const shopItems = useShopItemsList();
  const [search, setSearch] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<string>("");
  const { search: searchValue } = useContext(SearchContext);

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

  const handleFilterChange = (option: string) => {
    setActiveFilter(option === activeFilter ? "" : option);
  };

  const FilterOptions = () => {
    return (
      <>
        {FILTER_OPTIONS_LIST().map((option: FilterModel) => (
          <div key={option.key}>
            <Button
              onClick={() => {
                handleFilterChange(option.key);
              }}
              color={"none"}
              paddingSize={"small"}
              withoutHover
              borderType={"squareBlack"}
              className={
                activeFilter === option.key ? "btn--filterClicked" : ""
              }
            >
              {option.name}
            </Button>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <div className={"filterAndItemDisplay"}>
        <div className={"filter"}>
          <FilterOptions />
        </div>
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
      </div>
    </>
  );
};

export default ItemsToShowAndFilters;

import "./ItemsToShowAndFilters.scss";
import { Link } from "react-router-dom";
import { FilterModel, ItemDetailsModel } from "../../models";
import { useState, useEffect } from "react";
import FILTER_OPTIONS_LIST from "../../lists/FILTER_OPTIONS_LIST.ts";
import { Button } from "../Button/Button.tsx";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContextProvider.tsx";
import { useShopItemsList } from "../../utils/useShopItemsList.tsx";

const ItemsToShowAndFilters = () => {
  const shopItems = useShopItemsList();
  const [displayedItems, setDisplayedItems] = useState<ItemDetailsModel[]>([]);
  const [search, setSearch] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<string>("");
  const { search: searchValue } = useContext(SearchContext);

  // Get search value from search bar on header
  useEffect(() => {
    setSearch(searchValue);
  }, [searchValue]);

  // Filter item list
  useEffect(() => {
    const updateDisplayedItems = (newActiveFilter: string) => {
      // Filter item list by active filter
      const newDisplayedItems: ItemDetailsModel[] = !newActiveFilter
        ? shopItems
        : shopItems.filter((item) => {
            return newActiveFilter === item.origin;
          });
      setDisplayedItems(newDisplayedItems);

      // Filter previous list (filtered by selected filter) by name search
      if (!search) {
        setDisplayedItems(newDisplayedItems);
      } else {
        setDisplayedItems(
          newDisplayedItems.filter((item: ItemDetailsModel) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
          }),
        );
      }
    };

    updateDisplayedItems(activeFilter);
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

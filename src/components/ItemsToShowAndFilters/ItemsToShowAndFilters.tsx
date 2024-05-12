import "./ItemsToShowAndFilters.scss";
import { Link } from "react-router-dom";
import { FilterModel, ItemDetailsModel } from "../../models";
import { useState, useEffect } from "react";
import ITEM_LIST from "../../lists/ITEM_LIST.tsx";
import FILTER_OPTIONS_LIST from "../../lists/FILTER_OPTIONS_LIST.tsx";
import { Button } from "../Button/Button.tsx";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContextProvider.tsx";

const ItemsToShowAndFilters = () => {
  const [displayedItems, setDisplayedItems] =
    useState<ItemDetailsModel[]>(ITEM_LIST);
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
        ? ITEM_LIST
        : ITEM_LIST.filter((item) => {
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
  }, [search, activeFilter]);

  const handleFilterChange = (option: string) => {
    setActiveFilter(option === activeFilter ? "" : option);
  };

  // Set item on local storage to know which product has been selected
  const setItemOnLocalStorage = (key: number) => {
    localStorage.setItem("Item", key.toString());
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
          {displayedItems.map((item) => (
            <Link
              onClick={() => setItemOnLocalStorage(item.key)}
              className={"item-link"}
              to={"/detalles-producto"}
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

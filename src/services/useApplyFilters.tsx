import { useShopItemsList } from "./useShopItemsList.ts";
import { useContext, useEffect, useMemo, useState } from "react";
import { SearchContext } from "../contexts/SearchContextProvider.tsx";
import { ActiveFilterContext } from "../contexts/ActiveFilterContextProvider.tsx";
import { ItemDetailsModel } from "../models";

export const useApplyFilters = () => {
  const { shopItemsList } = useShopItemsList();
  const [search, setSearch] = useState<string>("");
  const { search: searchValue } = useContext(SearchContext);
  const { activeFilter } = useContext(ActiveFilterContext);

  // Get search value from search bar on header
  useEffect(() => {
    setSearch(searchValue);
  }, [searchValue]);

  return useMemo(() => {
    if (!search && !activeFilter) {
      return shopItemsList;
    }

    return shopItemsList.filter((item: ItemDetailsModel) => {
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
  }, [search, activeFilter, shopItemsList]);
};

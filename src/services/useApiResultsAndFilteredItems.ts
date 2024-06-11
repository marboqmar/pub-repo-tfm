import { useContext, useMemo } from "react";
import { SearchContext } from "../contexts/SearchContextProvider.tsx";
import { ActiveFilterContext } from "../contexts/ActiveFilterContextProvider.tsx";
import { ItemDetailsModel } from "../models";
import { ItemsFromApiContext } from "../contexts/ItemsFromApiContextProvider.tsx";

export const useApiResultsAndFilteredItems = () => {
  const { itemsFromApi } = useContext(ItemsFromApiContext);
  const { search } = useContext(SearchContext);
  const { activeFilter } = useContext(ActiveFilterContext);

  const filteredItems = useMemo(() => {
    if (!search && !activeFilter) {
      return itemsFromApi;
    }

    return itemsFromApi.filter((item: ItemDetailsModel) => {
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
  }, [search, activeFilter, itemsFromApi]);

  return {
    filteredItems,
  };
};

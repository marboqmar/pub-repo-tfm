import { useContext, useMemo } from "react";
import { ItemsFromApiContext } from "../contexts/ItemsFromApiContextProvider.tsx";

export const useRandomSimilarProducts = (productsNumber: number) => {
  const { itemsFromApi } = useContext(ItemsFromApiContext);

  // Randomize items returned from API (adds value prop and gives it a random number, orders elements by the value prop,
  // returns ItemDetailsModel props rather than value number, gets only the last 2 elements of the array
  return useMemo(() => {
    return itemsFromApi
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      .slice(0, productsNumber);
  }, [itemsFromApi, productsNumber]);
};

import { useContext, useEffect } from "react";
import { ItemDetailsModel, ItemsFromAPIModel } from "../models";
import axios from "axios";
import { ItemsFromApiContext } from "../contexts/ItemsFromApiContextProvider.tsx";

export const useCallApi = () => {
  const { setNewItemsFromApi, setNewIsLoading, setNewError } =
    useContext(ItemsFromApiContext);

  // Fetch items from API and map them
  const mapItemsFromAPIToItemDetails = (
    items: ItemsFromAPIModel[],
  ): ItemDetailsModel[] => {
    return items.map((individualItem: ItemDetailsModel) => {
      return {
        key: individualItem.key,
        name: individualItem.name,
        img: individualItem.img,
        price: individualItem.price,
        description: individualItem.description,
        origin: individualItem.origin,
      };
    });
  };

  useEffect(() => {
    const fetchShopItemsList = async () => {
      try {
        setNewError("");
        setNewIsLoading(true);
        const response = await axios.get(
          // import.meta.env.VITE_API_URL,
          "https://fantasy-forge-back.netlify.app/.netlify/functions/api",
        );
        setNewItemsFromApi(mapItemsFromAPIToItemDetails(response.data));
      } catch (error) {
        setNewError("API did not provide any items");
      }
      setNewIsLoading(false);
    };

    fetchShopItemsList();
  }, [setNewItemsFromApi, setNewIsLoading, setNewError]);
};

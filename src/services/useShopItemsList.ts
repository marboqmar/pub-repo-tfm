import { useEffect, useState } from "react";
import { ItemDetailsModel, ItemsFromAPIModel } from "../models";
import axios from "axios";

export const useShopItemsList = () => {
  const [shopItemsList, setShopItemsList] = useState<ItemDetailsModel[]>([]);

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
      const response = await axios.get(import.meta.env.VITE_API_URL);
      setShopItemsList(mapItemsFromAPIToItemDetails(response.data));
      console.log(response.data);
    };

    fetchShopItemsList();
  }, []);

  return shopItemsList;
};

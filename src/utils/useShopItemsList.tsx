import { useEffect, useState } from "react";
import { ItemDetailsModel } from "../models";
import axios from "axios";

export const useShopItemsList = () => {
  const [shopItemsList, setShopItemsList] = useState<ItemDetailsModel[]>([]);

  useEffect(() => {
    const fetchShopItemsList = async () => {
      const response = await axios.get(import.meta.env.VITE_API_URL);
      setShopItemsList(response.data);
    };

    fetchShopItemsList();
  }, []);

  return shopItemsList;
};

import { createContext, ReactNode, useEffect, useState } from "react";
import { ItemDetailsModel } from "../models";
import { mapItemsFromAPIToItemDetails } from "../services/items.mapper.ts";
import axios from "axios";

interface ItemsFromApiContextModel {
  itemsFromApi: ItemDetailsModel[];
  setNewItemsFromApi: (itemsFromApi: ItemDetailsModel[]) => void;
  isLoading: boolean;
  setNewIsLoading: (isLoading: boolean) => void;
  error: string;
  setNewError: (error: string) => void;
}

const contextDefault: ItemsFromApiContextModel = {
  itemsFromApi: [],
  setNewItemsFromApi: () => {
    return;
  },
  isLoading: false,
  setNewIsLoading: () => {
    return;
  },
  error: "",
  setNewError: () => {
    return;
  },
};

export const ItemsFromApiContext =
  createContext<ItemsFromApiContextModel>(contextDefault);

interface ItemsFromApiContextProviderProps {
  children: ReactNode;
}

export const ItemsFromApiContextProvider = ({
  children,
}: ItemsFromApiContextProviderProps): JSX.Element => {
  const [itemsFromApi, setItemsFromApi] = useState<ItemDetailsModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const contextValue = {
    itemsFromApi,
    setNewItemsFromApi: setItemsFromApi,
    isLoading,
    setNewIsLoading: setIsLoading,
    error,
    setNewError: setError,
  };

  // Fetch items from API and map them
  useEffect(() => {
    const fetchShopItemsList = async () => {
      try {
        setError("");
        setIsLoading(true);
        const response = await axios.get(
          // "https://fantasy-forge-back.netlify.app/.netlify/functions/api",
          import.meta.env.VITE_API_URL,
        );
        setItemsFromApi(mapItemsFromAPIToItemDetails(response.data));
      } catch (error) {
        setError("API did not provide any items");
      }
      setIsLoading(false);
    };

    fetchShopItemsList();
  }, []);

  return (
    <ItemsFromApiContext.Provider value={contextValue}>
      {children}
    </ItemsFromApiContext.Provider>
  );
};

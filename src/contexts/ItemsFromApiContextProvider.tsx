import { createContext, ReactNode, useState } from "react";
import { ItemDetailsModel } from "../models";

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

  return (
    <ItemsFromApiContext.Provider value={contextValue}>
      {children}
    </ItemsFromApiContext.Provider>
  );
};

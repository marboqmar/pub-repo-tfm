import { createContext, ReactNode, useState } from "react";

interface MainImageContextModel {
  mainImage: string;
  setNewMainImage: (newMainImage: string) => void;
}

const contextDefault: MainImageContextModel = {
  mainImage: "",
  setNewMainImage: () => {
    return;
  },
};

export const MainImageContext =
  createContext<MainImageContextModel>(contextDefault);

interface MainImageContextProviderProps {
  children: ReactNode;
}

export const MainImageContextProvider = ({
  children,
}: MainImageContextProviderProps): JSX.Element | null => {
  const [mainImage, setMainImage] = useState<string>("");

  const contextValue: MainImageContextModel = {
    mainImage,
    setNewMainImage: setMainImage,
  };

  return (
    <MainImageContext.Provider value={contextValue}>
      {children}
    </MainImageContext.Provider>
  );
};

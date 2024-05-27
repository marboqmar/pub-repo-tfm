import { createContext, ReactNode, useState } from "react";

interface ActiveFilterContextModel {
  activeFilter: string;
  setNewActiveFilter: (activeFilter: string) => void;
}

const contextDefault: ActiveFilterContextModel = {
  activeFilter: "",
  setNewActiveFilter: () => {
    return;
  },
};

export const ActiveFilterContext =
  createContext<ActiveFilterContextModel>(contextDefault);

interface ActiveFilterProviderProps {
  children: ReactNode;
}

export const ActiveFilterContextProvider = ({
  children,
}: ActiveFilterProviderProps): JSX.Element | null => {
  const [activeFilter, setActiveFilter] = useState<string>("");

  const contextValue: ActiveFilterContextModel = {
    activeFilter,
    setNewActiveFilter: setActiveFilter,
  };

  return (
    <ActiveFilterContext.Provider value={contextValue}>
      {children}
    </ActiveFilterContext.Provider>
  );
};

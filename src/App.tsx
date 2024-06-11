import "./scss/style.scss";
import { Header } from "./components/Header/Header.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SearchContextProvider } from "./contexts/SearchContextProvider.tsx";
import { ActiveFilterContextProvider } from "./contexts/ActiveFilterContextProvider.tsx";
import { ItemsFromApiContextProvider } from "./contexts/ItemsFromApiContextProvider.tsx";

export const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <ItemsFromApiContextProvider>
        <ActiveFilterContextProvider>
          <SearchContextProvider>
            <Header />
            <div className={"main"}>
              <Outlet />
            </div>
            <Footer />
          </SearchContextProvider>
        </ActiveFilterContextProvider>
      </ItemsFromApiContextProvider>
    </>
  );
};

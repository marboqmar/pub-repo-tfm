import { ItemsToDisplay } from "./components/ItemsToDisplay/ItemsToDisplay.tsx";
import { Filters } from "./components/Filters/Filters.tsx";
import { useTranslation } from "react-i18next";
import { SearchContext } from "./contexts/SearchContextProvider.tsx";
import { useContext } from "react";
import { useApiResultsAndFilteredItems } from "./services/useApiResultsAndFilteredItems.ts";
import { ItemsFromApiContext } from "./contexts/ItemsFromApiContextProvider.tsx";

export const Home = () => {
  const { t } = useTranslation("home");
  const { filteredItems } = useApiResultsAndFilteredItems();
  const { search } = useContext(SearchContext);
  const { error, isLoading } = useContext(ItemsFromApiContext);

  return (
    <div className={"home border-top-gray-light"}>
      <div className={"filters border-bottom-gray-light"}>
        <Filters />
      </div>
      {/*If there is a search, state that it is searching by the indicated term*/}
      {!search ? (
        ""
      ) : (
        <p className={"margin-60"}>
          {t("home:searchingBy")} "{search}"
        </p>
      )}
      {/*If the search did not provide any results, say so*/}
      {search && filteredItems.length === 0 ? (
        <p className={"margin-60 margin-bottom-120"}>
          {t("home:noSearchResults")}
        </p>
      ) : (
        ""
      )}
      {/*If the API did not provide any results, say so*/}
      {error && !isLoading ? (
        <p className={"margin-60 margin-bottom-120"}>{t("home:error")}</p>
      ) : isLoading ? (
        <p className={"margin-60 margin-bottom-120"}>{t("home:loading")}</p>
      ) : (
        ""
      )}
      <ItemsToDisplay itemList={filteredItems} />
    </div>
  );
};

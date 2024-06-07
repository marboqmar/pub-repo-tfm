import { ItemsToDisplay } from "./components/ItemsToDisplay/ItemsToDisplay.tsx";
import { Filters } from "./components/Filters/Filters.tsx";
import { useTranslation } from "react-i18next";
import { SearchContext } from "./contexts/SearchContextProvider.tsx";
import { useContext } from "react";
import { useApiResultsAndFilteredItems } from "./services/useApiResultsAndFilteredItems.ts";

export const Home = () => {
  const { t } = useTranslation("home");
  const { search } = useContext(SearchContext);
  const { filteredItems, isLoading, error } = useApiResultsAndFilteredItems();

  return (
    <>
      <div>
        <div className={"filters"}>
          <Filters />
        </div>
        {/*If there is a search, state that it is searching by the indicated term*/}
        {!search ? (
          ""
        ) : (
          <p className={"margin-left-60 margin-bottom-60"}>
            {t("home:searchingBy")} "{search}"
          </p>
        )}
        {/*If the search did not provide any results, say so*/}
        {search && filteredItems.length === 0 ? (
          <p className={"margin-left-60 margin-bottom-60"}>
            {t("home:noSearchResults")}
          </p>
        ) : (
          ""
        )}
        {/*If the API did not provide any results, say so*/}
        {error && !isLoading ? (
          <p className={"errorAndLoadingMsg"}>{t("home:error")}</p>
        ) : isLoading ? (
          <p className={"errorAndLoadingMsg"}>{t("home:loading")}</p>
        ) : (
          <ItemsToDisplay itemList={filteredItems} />
        )}
      </div>
    </>
  );
};

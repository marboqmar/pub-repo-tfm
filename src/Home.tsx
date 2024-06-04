import { ItemsToDisplay } from "./components/ItemsToDisplay/ItemsToDisplay.tsx";
import { Filters } from "./components/Filters/Filters.tsx";
import { useShopItemsList } from "./services/useShopItemsList.ts";
import { useTranslation } from "react-i18next";
import { SearchContext } from "./contexts/SearchContextProvider.tsx";
import { useContext } from "react";
import { useApplyFilters } from "./services/useApplyFilters.tsx";
import { ItemDetailsModel } from "./models";

export const Home = () => {
  const { isLoading, error } = useShopItemsList();
  const { t } = useTranslation("home");
  const { search } = useContext(SearchContext);
  const itemsList: ItemDetailsModel[] = useApplyFilters();

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
            {t("home:searchResult")} "{search}"
          </p>
        )}
        {/*If the search did not provide any results, say so*/}
        {search && itemsList.length === 0 ? (
          <p className={"margin-left-60 margin-bottom-60"}>
            Your search did not provide any results
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
          <ItemsToDisplay itemsList={itemsList} />
        )}
      </div>
    </>
  );
};

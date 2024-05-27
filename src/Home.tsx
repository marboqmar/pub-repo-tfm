import ItemsToDisplay from "./components/ItemsToDisplay/ItemsToDisplay.tsx";
import { Filters } from "./components/Filters/Filters.tsx";
import { useShopItemsList } from "./services/useShopItemsList.ts";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { shopItemsList, loading } = useShopItemsList();
  const { t } = useTranslation("home");

  return (
    <>
      <div>
        <div className={"filters"}>
          <Filters />
        </div>
        {shopItemsList.length === 0 && !loading ? (
          <p className={"errorAndLoadingMsg"}>{t("home:error")}</p>
        ) : loading ? (
          <p className={"errorAndLoadingMsg"}>{t("home:loading")}</p>
        ) : (
          <ItemsToDisplay />
        )}
      </div>
    </>
  );
};

export default Home;

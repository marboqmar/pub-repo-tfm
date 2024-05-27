import ItemsToDisplay from "./components/ItemsToDisplay/ItemsToDisplay.tsx";
import { Filters } from "./components/Filters/Filters.tsx";
import { useShopItemsList } from "./services/useShopItemsList.ts";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { shopItemsList } = useShopItemsList();
  const { t } = useTranslation("home");

  return (
    <>
      <div>
        <div className={"filters"}>
          <Filters />
        </div>
        {shopItemsList.length === 0 ? (
          <p className={"error"}>{t("home:error")}</p>
        ) : (
          <ItemsToDisplay />
        )}
      </div>
    </>
  );
};

export default Home;

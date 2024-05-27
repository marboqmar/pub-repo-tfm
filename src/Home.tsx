import ItemsToDisplay from "./components/ItemsToDisplay/ItemsToDisplay.tsx";
import { Filters } from "./components/Filters/Filters.tsx";
import { useShopItemsList } from "./services/useShopItemsList.ts";

const Home = () => {
  return (
    <>
      <div>
        <div className={"filters"}>
          <Filters />
        </div>
        {typeof useShopItemsList() === "string" ? (
          <p>Error</p>
        ) : (
          <ItemsToDisplay />
        )}
      </div>
    </>
  );
};

export default Home;

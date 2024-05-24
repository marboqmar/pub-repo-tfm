import ItemsToDisplay from "./components/ItemsToShowAndFilters/ItemsToDisplay.tsx";
import { Filters } from "./components/Filters/Filters.tsx";

const Home = () => {
  return (
    <>
      <div>
        <div className={"filter"}>
          <Filters />
        </div>
        <ItemsToDisplay />
      </div>
    </>
  );
};

export default Home;

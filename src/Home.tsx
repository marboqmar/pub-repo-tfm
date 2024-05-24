import ItemsToDisplay from "./components/ItemsToDisplay/ItemsToDisplay.tsx";
import { Filters } from "./components/Filters/Filters.tsx";

const Home = () => {
  return (
    <>
      <div>
        <div className={"filters"}>
          <Filters />
        </div>
        <ItemsToDisplay />
      </div>
    </>
  );
};

export default Home;

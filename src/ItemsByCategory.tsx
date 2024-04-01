import ItemDisplay from "./components/ItemDisplay.tsx";
import Filter from "./components/Filter.tsx";

const ItemsByCategory = () => {
    return (
        <div>
            <h1>Espadas preciosas</h1>
            <div className={'itemDisplayAndFilter'}>
                <Filter />
                <ItemDisplay />
            </div>
        </div>
    );
};

export default ItemsByCategory;
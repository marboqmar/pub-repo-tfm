import ItemDisplay from "./components/ItemDisplay.tsx";

const ItemsByCategory = () => {
    return (
        <div>
            <h1>Espadas preciosas</h1>
            <div className={'itemDisplayAndFilter'}>
                <ItemDisplay />
            </div>
        </div>
    );
};

export default ItemsByCategory;
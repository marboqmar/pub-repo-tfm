import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import ItemDisplay from "./components/ItemDisplay.tsx";
import Filter from "./components/Filter.tsx";

const ItemsByCategory = () => {
    return (
        <div>
            <Header />
            <h1>Espadas preciosas</h1>
            <div className={'itemDisplayAndFilter'}>
                <Filter />
                <ItemDisplay />
            </div>
            <Footer />
        </div>
    );
};

export default ItemsByCategory;
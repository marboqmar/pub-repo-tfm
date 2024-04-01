import Hero from "./components/Hero.tsx";
import Filter from "./components/Filter.tsx";
import ItemDisplay from "./components/ItemDisplay.tsx";

const Landing = () => {
    return (
        <div>
            <Hero />
            <h2>Nuestras recomendaciones</h2>
            <div className={'itemDisplayAndFilter'}>
                <Filter />
                <ItemDisplay />
            </div>
        </div>
    )
}

export default Landing;
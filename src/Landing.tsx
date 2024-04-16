import Hero from "./components/Hero.tsx";
import ItemDisplay from "./components/ItemDisplay.tsx";

const Landing = () => {
    return (
        <div>
            <Hero />
            <h2>Nuestras recomendaciones</h2>
            <div className={'itemDisplayAndFilter'}>
                <ItemDisplay />
            </div>
        </div>
    )
}

export default Landing;
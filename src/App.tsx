import './scss/style.scss'
// import { Link } from 'react-router-dom'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import ItemDisplay from "./components/ItemDisplay.tsx";
import Filter from "./components/Filter.tsx";
import Footer from "./components/Footer.tsx";

function App() {

  return (
    <div className={'site'}>
        <Header />
        <Hero />
        <h2>Nuestras recomendaciones</h2>
        <div className={'itemDisplayAndFilter'}>
            <Filter />
            <ItemDisplay />
        </div>
        <Footer />
        {/*<Link to={'/Patterns'}>Patterns</Link>*/}
    </div>
  )
}

export default App

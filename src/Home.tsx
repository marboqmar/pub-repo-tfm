import Hero from "./components/Hero.tsx";
import ItemDisplay from "./components/ItemDisplay.tsx";
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation('common')
    return (
        <div>
            <Hero />
            <h2>{t('common:homeHeader')}</h2>
            <div className={'itemDisplayAndFilter'}>
                <ItemDisplay />
            </div>
        </div>
    )
}

export default Home;
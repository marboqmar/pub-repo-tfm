import ItemDisplay from "./components/ItemDisplay.tsx";

const Favourites = () => {
    return (
        <div>
            <div className={'favouritesTopBar'}>
                <h1>Favoritos</h1>
                <input className={'favouritesSearchBar'} id={'favouritesSearchBar'} type={'text'} placeholder={'Buscar en favoritos'} />
                <button className={'favouritesSearchButton'}>Buscar en favoritos</button>
            </div>
            <ItemDisplay />
        </div>
    );
};

export default Favourites
const FilterOption = () => {
    return (
        <div>
            <input type="checkbox"/>
            <span>100€ a 200€</span>
        </div>
    )
}

const Filter = () => {
    return (
        <div className={'filter'}>
            <h3>Filtro</h3>
            <FilterOption />
            <FilterOption />
            <FilterOption />
            <FilterOption />
        </div>
    );
};

export default Filter;
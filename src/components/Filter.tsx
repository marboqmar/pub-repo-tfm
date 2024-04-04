import '../scss/components/Filter.scss';
import {FilterModel} from "../models/FilterModel.ts";

const FilterOptions = [
    {
        option: "Inferior a 100€"
    },
    {
        option: "100€ a 200€"
    },
    {
        option: "200€ a 300€"
    },
    {
        option: "Superior a 300€"
    }
]

const FilterOption = (item: FilterModel) => {
    return (
        <div>
            <input type="checkbox"/>
            <span>{item.option}</span>
        </div>
    )
}

const Filter = () => {
    return (
        <div className={'filter'}>
            <h3>Filtro</h3>
            {FilterOptions.map((item) => (
                <FilterOption
                    option={item.option}
                />
            ))}
        </div>
    );
};

export default Filter;
import '../scss/components/Filter.scss';
import {FilterModel} from "../models/FilterModel.ts";
import FILTER_OPTIONS from "./FILTER_OPTIONS.tsx";

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
            {FILTER_OPTIONS.map((item) => (
                <FilterOption
                    option={item.option}
                />
            ))}
        </div>
    );
};

export default Filter;
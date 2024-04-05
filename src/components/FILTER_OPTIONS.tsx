import {FilterModel} from "../models/FilterModel.ts";

const FILTER_OPTIONS: FilterModel[] = [
    {
        key: "Inferior a 100€",
        id: 1,
        option: "Inferior a 100€",
        minPrice: 0,
        maxPrice: 100,
        status: false,
    },
    {
        key: "100€ a 200€",
        id: 2,
        option: "100€ a 200€",
        minPrice: 100,
        maxPrice: 200,
        status: false,
    },
    {
        key: "200€ a 300€",
        id: 3,
        option: "200€ a 300€",
        minPrice: 200,
        maxPrice: 300,
        status: false,
    },
    {
        key: "Superior a 300€",
        id: 4,
        option: "Superior a 300€",
        minPrice: 300,
        maxPrice: 10000000000,
        status: false,
    }
]

export default FILTER_OPTIONS;
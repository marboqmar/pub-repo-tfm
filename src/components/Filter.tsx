import '../scss/components/Filter.scss';
import {FilterModel} from "../models/FilterModel.ts";
import FILTER_OPTIONS from "./FILTER_OPTIONS.tsx";
import {useState} from "react";
// import React, {useState} from "react";
import {ItemDetailsModel} from "../models/itemDetails.ts";
import ITEM_LIST from "./ITEM_LIST.tsx";

const FilterOption = (item: FilterModel) => {
    // const [firstFilter, setFirstFilter] = useState<boolean>(false)
    // const [secondFilter, setSecondFilter] = useState<boolean>(false)
    // const [thirdFilter, setThirdFilter] = useState<boolean>(false)
    // const [fourthFilter, setFourthFilter] = useState<boolean>(false)
    const { id } = item

    const [filterState, setFilterState] = useState({firstFilter: false, secondFilter: false, thirdFilter: false, fourthFilter: false})

    const isFilterOn = (clickedId: number) => {
        const {firstFilter, secondFilter, thirdFilter, fourthFilter} = filterState;
        setFilterState({firstFilter, secondFilter, thirdFilter, fourthFilter})

        switch(clickedId){
            case 1:
                setFilterState({firstFilter: !firstFilter, secondFilter, thirdFilter, fourthFilter})
                break
            case 2:
                setFilterState({firstFilter, secondFilter: !secondFilter, thirdFilter, fourthFilter})
                break
            case 3:
                setFilterState({firstFilter, secondFilter, thirdFilter: !thirdFilter, fourthFilter})
                break
            case 4:
                setFilterState({firstFilter, secondFilter, thirdFilter, fourthFilter: !fourthFilter})
                break
        }

        ITEM_LIST.forEach((item) => {
            item.display = false;
            if (firstFilter && (FILTER_OPTIONS[0].maxPrice > item.price)) {
                item.display = true;
            } else if (secondFilter && (FILTER_OPTIONS[1].minPrice < item.price && item.price < FILTER_OPTIONS[1].maxPrice)) {
                item.display = true;
            } else if (thirdFilter && (FILTER_OPTIONS[2].minPrice < item.price && item.price < FILTER_OPTIONS[2].maxPrice)) {
                item.display = true;
            } else if (fourthFilter && (FILTER_OPTIONS[3].minPrice < item.price && item.price < FILTER_OPTIONS[3].maxPrice)) {
                item.display = true;
            }
        })


        console.log(ITEM_LIST)
    }

    console.log(filterState)

    return (
        <div>
            <input
                type="checkbox"
                onClick={() => {
                    isFilterOn(id)
                    // setFilteredItems(FilterResult)
                }}
            />
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
                    key={item.key}
                    id={item.id}
                    option={item.option}
                    status={item.status}
                />
            ))}
        </div>
    );
};

export default Filter;


// const FilterResult = (clickedId: number): ItemDetailsModel[] => {
//
//     FILTER_OPTIONS.map((filterItem: FilterModel) => {
//         switch(clickedId){
//             case 1:
//                 if (clickedId === filterItem.id) {
//                     filterItem.status = !filterItem.status
//                 }
//                 if (filterItem.status) {
//                     ITEM_LIST.forEach((item: ItemDetailsModel) => {
//                         if (item.price > 100) {
//                             item.display = !item.display
//                         }
//                     })
//                 }
//                 break
//             case 2:
//                 if (clickedId === filterItem.id) {
//                     filterItem.status = !filterItem.status
//                 }
//                 if (filterItem.status) {
//                     ITEM_LIST.forEach((item: ItemDetailsModel) => {
//                         if (item.price >= 100 && item.price <= 200) {
//                             item.display = !item.display
//                         }
//                     })
//                 }
//                 break
//             case 3:
//                 if (clickedId === filterItem.id) {
//                     filterItem.status = !filterItem.status
//                 }
//                 if (filterItem.status) {
//                     ITEM_LIST.forEach((item: ItemDetailsModel) => {
//                         if (item.price >= 200 && item.price <= 300) {
//                             item.display = !item.display
//                         }
//                     })
//                 }
//                 break
//             case 4:
//                 if (clickedId === filterItem.id) {
//                     filterItem.status = !filterItem.status
//                 }
//                 if (filterItem.status) {
//                     ITEM_LIST.forEach((item: ItemDetailsModel) => {
//                         if (item.price > 300) {
//                             item.display = !item.display
//                         }
//                     })
//                 }
//                 break
//         }
//     })
//
//     console.log(ITEM_LIST)
// }
//
// const FilterOption = (item: FilterModel) => {
//     // const [filteredItems, setFilteredItems] = useState<ItemDetailsModel[]>([])
//     const { id } = item
//
//     return (
//         <div>
//             <input
//                 type="checkbox"
//                 onClick={(event: React.MouseEventHandler<HTMLInputElement>) => {
//                     FilterResult(id)
//                     // setFilteredItems(FilterResult)
//                 }}
//             />
//             <span>{item.option}</span>
//         </div>
//     )
// }
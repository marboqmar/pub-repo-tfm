import './ItemDisplay.scss';
import { Link } from 'react-router-dom';
import {Filter, ItemDetailsModel} from "../../models";
import { useState } from "react";
import ITEM_LIST from "../../lists/ITEM_LIST.tsx";
import FILTER_OPTIONS_LIST from "../../lists/FILTER_OPTIONS_LIST.tsx";

const ItemsToShowAndFilters = () => {
    // Ensure that only one filter can be true at any moment
    const [displayedItems, setDisplayedItems] = useState<ItemDetailsModel[]>(ITEM_LIST)
    const initialFilterState : Map<string,boolean> = new Map();
    FILTER_OPTIONS_LIST().forEach((item) => {
        initialFilterState.set(item.key, false);
    })
    const [checkedFilters, setCheckedFilters] = useState<Map<string,boolean>>(initialFilterState)
    const updateFilteredItems = (optionKey: string) => {
        const newFilters = new Map(checkedFilters)
        // Modify this
        newFilters.set(optionKey, !checkedFilters.get(optionKey))
        setCheckedFilters(newFilters)

        const newDisplayedItems: ItemDetailsModel[] = Array.from(newFilters.values()).every((item) => {return !item}) ? ITEM_LIST : ITEM_LIST.filter((item) => {
            for (const [key, value] of newFilters) {
                if (value) {
                    return item.origin.includes(key)
                }
            }
        })
        setDisplayedItems(newDisplayedItems)
        // console.log(!!initialFilterState.get('The Witcher'))
        console.log(initialFilterState)
    }

    const FilterOptions = () => {
        return (
            <>
                {FILTER_OPTIONS_LIST().map((option: Filter) => (
                    <div>
                        {/*<input type="checkbox" checked={`checked${option.key}`} onChange={() => updateFilteredItems(option.name)}></input>*/}
                        {/*<span id={option.key} onClick={() => setChecked(!checked)}>{option.name}</span>*/}
                        <span onClick={() => updateFilteredItems(option.key)}>{option.name}</span>
                    </div>
                ))}
            </>
        )
    }

    return (
        <>
            <div className={'filterAndItemDisplay'}>
                <div className={'filter'}>
                    <FilterOptions />
                </div>
                <div className={'itemDisplay'}>
                    {displayedItems.map((item) => (
                        <Link className={'item-link'} to={'/detalles-producto'}>
                            <div className={'item'}>
                                <img src={item.image}/>
                                <div className={'item item-text'}>
                                    <span className={'itemTitle'}>{item.name}</span>
                                    <span>{item.price}€</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ItemsToShowAndFilters

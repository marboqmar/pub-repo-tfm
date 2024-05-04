import './ItemsToShowAndFilters.scss';
import { Link } from 'react-router-dom';
import {Filter, ItemDetailsModel} from "../../models";
import { useState } from "react";
import ITEM_LIST from "../../lists/ITEM_LIST.tsx";
import FILTER_OPTIONS_LIST from "../../lists/FILTER_OPTIONS_LIST.tsx";

const ItemsToShowAndFilters = () => {
    const [displayedItems, setDisplayedItems] = useState<ItemDetailsModel[]>(ITEM_LIST)

    // Create filter options dictionary, initiating them to false
    const initialFilterState : Map<string,boolean> = new Map();
    FILTER_OPTIONS_LIST().forEach((item) => {
        initialFilterState.set(item.key, false);
    })

    const [checkedFilters, setCheckedFilters] = useState<Map<string,boolean>>(initialFilterState)

    // Update filters and apply them over the item list
    const updateFilteredItems = (optionKey: string) => {
        // Create dictionary with applied filters and set the other filters to false, so only one filter at a time can be true
        const newFilters = new Map()
        newFilters.set(optionKey, !checkedFilters.get(optionKey))
        setCheckedFilters(newFilters)

        // Apply active filters over item list
        const newDisplayedItems: ItemDetailsModel[] = Array.from(newFilters.values()).every((item) => {return !item}) ? ITEM_LIST : ITEM_LIST.filter((item) => {
            for (const [key, value] of newFilters) {
                if (value) {
                    return item.origin.includes(key)
                }
            }
        })
        setDisplayedItems(newDisplayedItems)
    }

    const FilterOptions = () => {
        return (
            <>
                {FILTER_OPTIONS_LIST().map((option: Filter) => (
                    <div key={option.key}>
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
                        <Link className={'item-link'} to={'/detalles-producto'} key={`${item.image}${item.name}`}>
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

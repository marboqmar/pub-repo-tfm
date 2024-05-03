import './ItemDisplay.scss';
import { Link } from 'react-router-dom';
import {Filter, ItemDetailsModel} from "../../models";
import { useState } from "react";
import ITEM_LIST from "../../lists/ITEM_LIST.tsx";
import FILTER_OPTIONS_LIST from "../../lists/FILTER_OPTIONS_LIST.tsx";

const ItemsToShowAndFilters = () => {
    const [displayedItems, setDisplayedItems] = useState<ItemDetailsModel[]>(ITEM_LIST)

    const updateFilteredItems = (option: string) => {
        const newDisplayedItems: ItemDetailsModel[] = !option ? ITEM_LIST : ITEM_LIST.filter((item) => {
            return item.origin.includes(option)
        })
        setDisplayedItems(newDisplayedItems)
    }

    const FilterOptions = () => {
        // const [checked, setChecked] = useState<boolean>(false)
        // console.log(checked)

        return (
            <>
                {FILTER_OPTIONS_LIST().map((option: Filter) => (
                    <div>
                        {/*<input type="checkbox" checked={checked} onChange={() => updateFilteredItems(option)}></input>*/}
                        {/*<span onClick={() => setChecked(!checked)}>{option}</span>*/}
                        <span onClick={() => updateFilteredItems(option.filterOptionValue)}>{option.name}</span>
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

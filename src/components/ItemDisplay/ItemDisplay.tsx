import './ItemDisplay.scss';
import { Link } from 'react-router-dom';
import { ItemDetailsModel } from "../../models";
import { useState } from "react";
import ITEM_LIST from "../../lists/ITEM_LIST.tsx";
import FILTER_OPTIONS_LIST from "../../lists/FILTER_OPTIONS_LIST.tsx";

const ItemsToShow = () => {
    const [displayedItems, setDisplayedItems] = useState<ItemDetailsModel[]>(ITEM_LIST)

    const updateFilteredItems = (option: string) => {
        const newDisplayedItems: ItemDetailsModel[] = !option ? ITEM_LIST : ITEM_LIST.filter((item) => {
            return item.origin.includes(option)
        })
        setDisplayedItems(newDisplayedItems)
    }

    const FilterOptions = () => {
        return (
            <>
                {FILTER_OPTIONS_LIST().map((option: string) => (
                    <div>
                        <span onClick={() => updateFilteredItems(option)}>{option}</span>
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

export default ItemsToShow

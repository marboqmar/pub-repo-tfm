import './ItemsToShowAndFilters.scss';
import {Link} from 'react-router-dom';
import {Filter, ItemDetailsModel} from "../../models";
import {useState} from "react";
import ITEM_LIST from "../../lists/ITEM_LIST.tsx";
import FILTER_OPTIONS_LIST from "../../lists/FILTER_OPTIONS_LIST.tsx";
import {Button} from "../Button/Button.tsx";

const ItemsToShowAndFilters = () => {
    const [displayedItems, setDisplayedItems] = useState<ItemDetailsModel[]>(ITEM_LIST)
    const [activeFilter, setActiveFilter] = useState<string>('')

    const updateFilteredItems = (optionKey: string) => {
        // Record active filter
        const newFilterState = optionKey === activeFilter ? '' : optionKey
        setActiveFilter(newFilterState)

        // Filter item list by active filter
        const newDisplayedItems: ItemDetailsModel[] = !newFilterState ? ITEM_LIST : ITEM_LIST.filter((item) => {
            return newFilterState === item.origin
        })
        setDisplayedItems(newDisplayedItems)
    }

    const FilterOptions = () => {
        return (
            <>
                {FILTER_OPTIONS_LIST().map((option: Filter) => (
                    <div key={option.key}>
                        <Button onClick={() => {
                            updateFilteredItems(option.key);
                        }}
                                color={"none"}
                                paddingSize={"small"}
                                withoutHover
                                squareBlackBorder
                                className={activeFilter === option.key ? 'btn--filterClicked' : ''}
                        >
                            {option.name}
                        </Button>
                    </div>
                ))}
            </>
        )
    }

    return (
        <>
            <div className={'filterAndItemDisplay'}>
                <div className={'filter'}>
                    <FilterOptions/>
                </div>
                <div className={'itemDisplay'}>
                    {displayedItems.map((item) => (
                        <Link className={'item-link'} to={'/detalles-producto'} key={`${item.image}${item.name}`}>
                            <div className={'item'}>
                                <img src={item.image} alt={''}/>
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

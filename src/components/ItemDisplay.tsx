import '../scss/components/ItemDisplay.scss';
import { Link } from 'react-router-dom';
import {ItemDetailsModel} from "../models/itemDetails.ts";
import ITEM_LIST from "./ITEM_LIST.tsx";
import {useState} from "react";
import {FilterModel} from '../models/FilterModel.ts';
import {useMemo} from 'react';

const ItemStructure = (item: ItemDetailsModel) => {
    return (
        <Link to={'/detalles-producto'}>
            <div className={'item'}>
                <span className={'itemTitle'}>{item.name}</span>
                <img src={item.image}/>
                <span>{item.price}</span>
            </div>
        </Link>
    );
};

const ItemDisplay = () => {
    const [filterOptions, setFilterOptions] = useState<FilterModel>({
        priceUnder100: false,
        price100to200: false,
        price200to300: false,
        priceOver300: false,
    })

    const [displayItemList, setDisplayItemList] = useState<ItemDetailsModel[]>(ITEM_LIST)

    const handlePriceUnder100 = () => {
        setFilterOptions(prevFilterOptions => ({...prevFilterOptions, priceUnder100: !filterOptions.priceUnder100}))
    }

    const filteredItems = useMemo(() => {
        const isAnyFilterApplied: boolean = Object.values(filterOptions).some((value) => {
            return value === true
        })

        if (!isAnyFilterApplied) {
            displayItemList.forEach((item) => {
                item.display = true;
            })
        }

        return displayItemList
    }, []);


    return (
        <div className={'filterAndItemDisplay'}>
            <div className={'filter'}>
                <h3>Filtro</h3>
                <div>
                    <input
                        type="checkbox"
                        onChange={handlePriceUnder100}
                    />
                    <span>Inferior a 100€</span>
                </div>
            </div>
            <div className={'itemDisplay'}>
                {ITEM_LIST.map((item) => (
                    <ItemStructure
                        key={item.key}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        display={item.display}
                    />
                ))}
            </div>
        </div>
    );
};

export default ItemDisplay

import '../scss/components/ItemDisplay.scss';
import { Link } from 'react-router-dom';
import {ItemDetailsModel} from "../models/itemDetails.ts";
import ITEM_LIST from "./ITEM_LIST.tsx";
import {useState} from "react";
import {FilterModel} from '../models/FilterModel.ts';
import {useMemo} from 'react';
import { useTranslation } from 'react-i18next';


const ItemStructure = (item: ItemDetailsModel) => {
    return (
        <Link className={'item-link'} to={'/detalles-producto'}>
            <div className={'item'}>
                <img src={item.image}/>
                <div className={'item item-text'}>
                    <span className={'itemTitle'}>{item.name}</span>
                    <span>{item.price}€</span>
                </div>
            </div>
        </Link>
    );
};

const ItemDisplay = () => {
    const { t } = useTranslation('common')

    const [filterOptions, setFilterOptions] = useState<FilterModel>({
        priceUnder100: false,
        price100to200: false,
        price200to300: false,
        priceOver300: false,
    })

    const [displayItemList, setDisplayItemList] = useState<ItemDetailsModel[]>(ITEM_LIST)

    const PRICES_FILTER_MAP = {
        priceUnder100: {min: 0, max: 100},
        price100to200: {min: 100, max: 200},
        price200to300: {min: 200, max: 300},
        priceOver300: {min: 300, max: 10000},
    }

    interface pricesFilterMapModel {
        priceUnder100: {min: number, max: number},
        price100to200: {min: number, max: number},
        price200to300: {min: number, max: number},
        priceOver300: {min: number, max: number},
    }

    interface priceFilterKeyModel {
        min: number,
        max: number
    }

    // const filteredItems = useMemo(() => {
    //     // If no filters are applied, show all items
    //     const isAnyFilterApplied: boolean = Object.values(filterOptions).some((value) => {
    //         return value
    //     })
    //
    //     if (!isAnyFilterApplied) {
    //         return displayItemList;
    //     }
    //
    //     // If filters are applied, filter items
    //     const matchesPriceFilter = (item: ItemDetailsModel, min: number, max: number) =>  {
    //         return min < item.price && item.price < max;
    //     }
    //
    //     return displayItemList.filter(item => {
    //         // When adding search filter use:
    //         // if (search && !item.name.includes(search)){
    //         //  return false;
    //         // }
    //
    //         return Object.keys(PRICES_FILTER_MAP).some((priceFilterKey) => {
    //             const test: object = {}
    //             PRICES_FILTER_MAP[priceFilterKey as keyof typeof PRICES_FILTER_MAP] = test[priceFilterKey]
    //
    //             if (filterOptions[priceFilterKey]) {
    //                 const filterValues: priceFilterKeyModel = PRICES_FILTER_MAP[priceFilterKey];
    //                 return matchesPriceFilter(item, filterValues.min, filterValues.max)
    //             }
    //             return false
    //         })
    //
    //         // return Object.keys(PRICES_FILTER_MAP).some((priceFilterKey: number) => {
    //         //     if (filterOptions[priceFilterKey]) {
    //         //         const filterValues: priceFilterKeyModel = PRICES_FILTER_MAP[priceFilterKey];
    //         //         return matchesPriceFilter(item, filterValues.min, filterValues.max)
    //         //     }
    //         //     return false
    //         // })
    //     })
    // }, [displayItemList, filterOptions, PRICES_FILTER_MAP]);

    const handlePriceUnder100 = () => {
        setFilterOptions(prevFilterOptions => ({...prevFilterOptions, priceUnder100: !filterOptions.priceUnder100}))
    }

    return (
        <div className={'filterAndItemDisplay'}>
            <div className={'filter'}>
                <div>
                    <span>The Witcher</span>
                </div>
                <div>
                    <span>Elden Ring</span>
                </div>
                <div>
                    <span>Dungeons and Dragons</span>
                </div>
                <div>
                    <span>The Lord of the Rings</span>
                </div>
            </div>
            <div className={'itemDisplay'}>
                {ITEM_LIST.map((item) => (
                    <ItemStructure
                        key={item.key}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default ItemDisplay

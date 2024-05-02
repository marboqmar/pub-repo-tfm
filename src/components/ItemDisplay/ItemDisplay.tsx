import './ItemDisplay.scss';
import { Link } from 'react-router-dom';
import {ItemDetailsModel} from "../../models/itemDetails.ts";
import ITEM_LIST from "../../lists/ITEM_LIST.tsx";
import FILTER_OPTIONS_LIST from "../../lists/FILTER_OPTIONS_LIST.tsx";

const FilterOptions = () => {
    return (
        <>
            {FILTER_OPTIONS_LIST().map((option: string) => (
                <div>
                    <span>{option}</span>
                </div>
            ))}
        </>
    )
}


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


    return (
        <div className={'filterAndItemDisplay'}>
            <div className={'filter'}>
                <FilterOptions />
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

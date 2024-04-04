import '../scss/components/ItemDisplay.scss';
import { Link } from 'react-router-dom';
import {ItemDetailsModel} from "../models/itemDetails.ts";
import ItemList from "./ItemList.tsx";

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
    return (
        <div className={'itemDisplay'}>
            {ItemList.map((item) => (
                <ItemStructure
                    key={item.key}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                />
            ))}
        </div>
    );
};

export default ItemDisplay

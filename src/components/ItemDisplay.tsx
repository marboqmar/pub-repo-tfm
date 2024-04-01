import '../scss/components/ItemDisplay.scss';
import { Link } from 'react-router-dom';

const Item = () => {
    return (
        <Link to={'/detalles-producto'}>
            <div className={'item'}>
                <span className={'itemTitle'}>La mejor espada del mundo</span>
                <img src={'/item-image.png'}/>
                <span>160€</span>
            </div>
        </Link>
    );
};

const ItemDisplay = () => {
    return (
        <div className={'itemDisplay'}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    );
};

export default ItemDisplay
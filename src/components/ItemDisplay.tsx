const Item = () => {
    return (
        <div className={'item'}>
            <span className={'itemTitle'}>Item title</span>
            <img src={'../../public/item-image.png'}/>
            <span>160€</span>
        </div>
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
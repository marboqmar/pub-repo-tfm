import TotalToPay from "./components/TotalToPay.tsx";

const CartItem = () => {
    return (
        <div className={'cartItem'}>
            <img className={'cartItemImg'} src={'/product-image.png'} alt={'cart item image'} />
            <div>
                <h2>La mejor espada del mundo</h2>
                <div>
                    <span>Cantidad: 1</span>
                    <button>Eliminar</button>
                    <span>160€</span>
                </div>
            </div>
        </div>
    );
};



const Cart = () => {
    return (
        <div>
            <h1>Cesta</h1>
            <div className={'cartDisplay'}>
                <div>
                    <CartItem />
                    <CartItem />
                </div>
                <TotalToPay />
            </div>
        </div>
    );
};

export default Cart;
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

const Total = () => {
    return (
        <div className={'total'}>
            <div>
                <span>Artículos (2)</span>
                <span>320€</span>
            </div>
            <div>
                <span>Envío</span>
                <span>Gratis</span>
            </div>
            <div className={'totalPrice'}>
                <h2>Total</h2>
                <h2>320€</h2>
            </div>
            <button>Pagar</button>
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
                <Total />
            </div>
        </div>
    );
};

export default Cart;
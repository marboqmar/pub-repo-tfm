import TotalToPay from "./components/TotalToPay.tsx";

const PaymentItem = () => {
    return (
        <div className={'paymentItem'}>
            <img className={'cartItemImg'} src={'/product-image.png'} alt={'cart item image'} />
            <div className={'paymentItemText'}>
                <h2>La mejor espada del mundo</h2>
                <span>Cantidad: 1</span>
                <span>160€</span>
            </div>
        </div>
    );
};

const Payment = () => {
    return (
        <div>
            <h1>Revisar artículos y pago</h1>
            <div className={'payment'}>
                <div>
                    <PaymentItem />
                    <PaymentItem />
                </div>
                <TotalToPay />
            </div>
        </div>
    );
};

export default Payment;
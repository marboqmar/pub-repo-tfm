import '../scss/components/TotalToPay.scss';

const TotalToPay = () => {
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

export default TotalToPay;
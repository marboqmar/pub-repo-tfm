import '../scss/components/TotalToPay.scss';
import { Link } from "react-router-dom";

const IsCartOrPayment = () => {
    const currentUrl = window.location.href;

    if (currentUrl.includes('pago')) {
        return (
            <button>Confirmar y pagar</button>
        )
    }
    if (currentUrl.includes('cesta')) {
        return (
            <Link to={'/pago'}>Pagar</Link>
        )
    }

}


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
            <IsCartOrPayment />
        </div>
    );
};

export default TotalToPay;
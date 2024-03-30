import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

const Product = () => {
    return (
        <div className={'product'}>
            <div>
                <h2>La mejor espada del mundo</h2>
                <img className={'productImage'} src={'../../public/product-image.png'} alt={'Imagen espada'}/>
            </div>
            <div className={'productInfo'}>
                <span>160€</span>
                <p>Item description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button>Añadir a la cesta</button>
                <button><i className={'fa-regular fa-heart'}></i>Añadir a favoritos</button>
            </div>
        </div>
    );
};

const Review = () => {
    return (
        <div>
            <div>
                <img src={'../public/user.png'}/>
                <span>Pepito</span>
            </div>
            <p>Review: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    );
};

const ProductDetails = () => {
    return (
        <div>
            <Header />
            <h1>Product details</h1>
            <Product />
            <Review />
            <Review />
            <Review />
            <Review />
            <Footer />
        </div>
    );
};

export default ProductDetails;
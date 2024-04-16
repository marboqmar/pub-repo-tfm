const Product = () => {
    return (
        <div className={'product'}>
            <div>
                <h1>La mejor espada del mundo</h1>
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

const SimilarProduct = () => {
    return (
        <div className={'similarProduct'}>
            <img className={'similarProductImg'} src={'/item-image.png'} alt={'Imagen producto similar'}/>
            <span>Otra espada chulísima</span>
            <span>180€</span>
        </div>
    )
}

const ProductDetails = () => {
    return (
        <div>
            <h1>Product details</h1>
            <Product />
            <div>
                <Review />
                <Review />
                <Review />
            </div>
            <h2>Productos similares</h2>
            <div className={'similarProductDisplay'}>
                <SimilarProduct />
                <SimilarProduct />
                <SimilarProduct />
                <SimilarProduct />
            </div>
        </div>
    );
};

export default ProductDetails;
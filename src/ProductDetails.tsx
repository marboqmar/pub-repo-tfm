import {Button} from "./components/Button/Button.tsx";

const Product = () => {
    return (
        <div className={'product'}>
            <div className={'flex-row'}>
                <img id={'slider-img'} src={'/slider/slider-aerondight.png'} alt={''} />
                <div className={'landing-sword-text flex-column grid__item-6-columns margin-left-auto align-flex-start'}>
                    <h3 id={'landing-sword-title'} className={'h2 margin-top-0'}>{'Aerondight, The Witcher'}</h3>
                    <div className={'underline bgcolor-gray-100'}></div>
                    <p className={'slider-description'}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras libero ipsum, ultricies\n' +
                        'sollicitudin quam ac, dapibus bibendum tellus. Nullam faucibus in nibh accumsan mattis.\n' +
                        'Quisque vel vulputate quam. Ut efficitur dignissim neque, in hendrerit magna tincidunt nec.\n' +
                        'Nullam auctor laoreet posuere. Donec venenatis rhoncus mauris, eget feugiat velit lobortis\n' +
                        'vitae. Mauris porttitor nunc ultrices ligula varius, id pretium velit ullamcorper. Donec\n' +
                        'lacinia vehicula mi porttitor dignissim. Aliquam vel dui nec nibh venenatis fermentum quis\n' +
                        'quis diam.'}</p>
                    <div className={'underline bgcolor-gray-100'}></div>
                    <div className={'margin-top-auto'}>
                        <p className={'h2 slider-price'}><span className={'color-gray crossed-text'}>489€</span><span> - 275€</span></p>
                        <Button color={'primary'} link={'/detalles-producto'} >Añadir a la cesta</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Review = () => {
    return (
        <div>
            <div>
                <img src={'../public/user.png'} alt={''}/>
                <span>Pepito</span>
            </div>
            <p>Review: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    );
};

const SimilarProduct = () => {
    return (
        <Button className={'similarProduct--item flex-column'} color={'none'} paddingSize={'none'} withoutHover borderType={'none'} link={'/detalles-producto'}>
            <img className={'similarProduct--img'} src={'/cart-image.png'} alt={'cart item image'} />
            <span className={'bold'}>Knight’s greatsword</span>
            <span>160€</span>
        </Button>
    )
}

const ProductDetails = () => {
    return (
        <div className={'margin-lat-60'}>
            <h1 className={'productDetails--title'}>Product details</h1>
            <div className={'productDetails--title-line'}></div>
            <div className={'flex-column gap-60'}>
                <Product />
                <div className={'flex-column gap-12'}>
                    <h2 className={'h2 productDetails--subtitles'}>Reviews</h2>
                    <div>
                        <Review />
                        <Review />
                        <Review />
                    </div>
                </div>
                <div className={'flex-column gap-12 margin-bottom-60'}>
                    <h2 className={'h2 productDetails--subtitles'}>Productos similares</h2>
                    <div className={'similarProduct'}>
                        <SimilarProduct />
                        <SimilarProduct />
                        <SimilarProduct />
                        <SimilarProduct />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
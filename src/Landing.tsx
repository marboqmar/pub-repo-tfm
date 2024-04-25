import './scss/style.scss'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {Button} from "./components/Button.tsx";

const Landing = () => {
    const { t } = useTranslation('common')

    return (
        <div className={'display-flex-column gap-60 align-center'}>
            {/*Hero*/}
            <img className={'hero'} src={'/hero.png'}/>
            {/*Claim and call to action*/}
            <div className={'display-flex-column align-center lat-margin-60 gap-60'}>
                <h1 className={'font align-text-center margin-top-0 margin-bottom-0'}>{t('common:homeClaim')}</h1>
                <Link to={'/home'}><Button color={'primary'}>{t('common:visitShop')}</Button></Link>
            </div>
            {/*Slider*/}
            <div className={'slider lat-margin-60'}>
                <h2 className={'font-alt margin-bottom-60'}>{t('common:suggestions')}</h2>
                <div className={'display-flex-row gap-60'}>
                    <img src={'/slider/slider-aerondight.png'} />
                    <div className={'landing-sword-text display-flex-column'}>
                        <h3 id={'landing-sword-title'} className={'h2 margin-top-0'}>Aerondight, The Witcher</h3>
                        <div className={'underline bgcolor-gray-100'}></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras libero ipsum, ultricies
                            sollicitudin quam ac, dapibus bibendum tellus. Nullam faucibus in nibh accumsan mattis.
                            Quisque vel vulputate quam. Ut efficitur dignissim neque, in hendrerit magna tincidunt nec.
                        </p>
                        <p>
                            Nullam auctor laoreet posuere. Donec venenatis rhoncus mauris, eget feugiat velit lobortis
                            vitae. Mauris porttitor nunc ultrices ligula varius, id pretium velit ullamcorper. Donec
                            lacinia vehicula mi porttitor dignissim. Aliquam vel dui nec nibh venenatis fermentum quis
                             quis diam.
                        </p>
                        <div className={'underline bgcolor-gray-100'}></div>
                        <div className={'margin-top-auto'}>
                            <p className={'h2'}><span className={'color-gray crossed-text'}>489€</span><span> - 275€</span></p>
                            <Link to={'/detalles-producto'}><Button color={'primary'}>{t('common:productDetails')}</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/*About us*/}
            <div className={'aboutUs lat-margin-60 display-flex-column'}>
                <h2 className={'font-alt'}>{t('common:aboutUs')}</h2>
                <div className={'display-flex-row gap-60'}>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras libero ipsum, ultricies
                            sollicitudin quam ac, dapibus bibendum tellus. Nullam faucibus in nibh accumsan mattis.
                            Quisque vel vulputate quam. Ut efficitur dignissim neque, in hendrerit magna tincidunt nec.
                        </p>
                        <p>
                            Nullam auctor laoreet posuere. Donec venenatis rhoncus mauris, eget feugiat velit lobortis
                            vitae. Mauris porttitor nunc ultrices ligula varius, id pretium velit ullamcorper. Donec
                            lacinia vehicula mi porttitor dignissim. Aliquam vel dui nec nibh venenatis fermentum quis
                            quis diam.
                        </p>
                    </div>
                    <img src={'/anvil.png'} />
                </div>
            </div>
            {/*Contact*/}
            <div className={'contactUs display-flex-column align-flex-start'}>
                <h2 className={'font-alt'}>{t('common:contact')}</h2>
                <p>{t('common:contactText')}</p>
                <input type={'text'} className={'input-text'}></input>
            </div>
        </div>
    )
}

export default Landing;
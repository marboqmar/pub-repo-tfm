import './scss/style.scss'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {Button} from "./components/Button.tsx";
import {Form} from "./components/Form.tsx";

const Landing = () => {
    const { t } = useTranslation('common')

    return (
        <>
            {/*Hero*/}
            <img className={'hero'} src={'/hero.png'}/>
            <div className={'grid center-hor margin-top-60 gap-60'}>
                {/*Claim and call to action*/}
                <div className={'display-flex-column align-center gap-60'}>
                    <h1 className={'font align-text-center margin-top-0 margin-bottom-0'}>{t('common:homeClaim')}</h1>
                    <Link to={'/home'}><Button color={'primary'}>{t('common:visitShop')}</Button></Link>
                </div>
                {/*Slider*/}
                <div className={'grid__item-14-columns'}>
                    <h2 className={'font-alt margin-bottom-60'}>{t('common:suggestions')}</h2>
                    <div className={'display-flex-row gap-60'}>
                        <img className={'slider-img'} src={'/slider/slider-aerondight.png'} />
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
                <div className={'grid__item-14-columns'}>
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
                        <img className={'aboutUs-img'} src={'/anvil.png'} />
                    </div>
                </div>
                {/*Contact*/}
                <div className={'grid__item-14-columns'}>
                    <h2 className={'font-alt'}>{t('common:contact')}</h2>
                    <p>{t('common:contactText')}</p>
                    <Form children={t('common:landingForm.name')} />
                    <Form children={'E-mail'} />
                    <Form children={t('common:landingForm.message')} />
                    <Button className={'margin-top-60'} color={'primary'}>{t('common:landingForm.sendMessage')}</Button>
                </div>
            </div>
        </>
    )
}

export default Landing;
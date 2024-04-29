import './scss/style.scss'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {Button} from "./components/Button/Button.tsx";
import {Form} from "./components/Form/Form.tsx";
import {SLIDE_CONTENT} from "./lists/SLIDE_CONTENT.tsx";
import {SlideContentModel} from "./models/SlideContentModel.ts";
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import './components/Swipper/swipper.scss'
import {Pagination} from 'swiper/modules';

register();

const Slide = (slide: SlideContentModel) => {
    const { t } = useTranslation('common')

    return (
        <div className={'display-flex-row gap-60'}>
            <img className={'slider-img'} src={slide.image} />
            <div className={'landing-sword-text display-flex-column'}>
                <h3 id={'landing-sword-title'} className={'h2 margin-top-0'}>{slide.swordTitle}</h3>
                <div className={'underline bgcolor-gray-100'}></div>
                <p>{slide.swordDescription}</p>
                <div className={'underline bgcolor-gray-100'}></div>
                <div className={'margin-top-auto'}>
                    <p className={'h2'}><span className={'color-gray crossed-text'}>489€</span><span> - 275€</span></p>
                    <Link to={'/detalles-producto'}><Button color={'primary'}>{t('common:productDetails')}</Button></Link>
                </div>
            </div>
        </div>
    )
}

const Landing = () => {
    const { t } = useTranslation('common')
    register();

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
                        <Swiper
                            slidesPerView={1}
                            loop={true}
                            speed={1000}
                            autoplay={
                            {
                                delay: 4000,
                                disableOnInteraction: false
                            }}
                            spaceBetween={60}
                            modules={[Pagination]}
                            pagination={
                            {
                                // el: '.swiper-pagination',
                                clickable: true
                            }}
                            className="mySwiper"
                        >
                            {SLIDE_CONTENT.map((slide: SlideContentModel) => (
                                <SwiperSlide>
                                    <Slide
                                        image={slide.image}
                                        swordTitle={slide.swordTitle}
                                        swordDescription={slide.swordDescription}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
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
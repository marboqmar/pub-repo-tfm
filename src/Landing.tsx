import "./scss/style.scss";
import { useTranslation } from "react-i18next";
import { Button } from "./components/Button/Button.tsx";
import { Form } from "./components/Form/Form.tsx";
import { SLIDE_CONTENT } from "./lists/SLIDE_CONTENT.ts";
import { SlideContentModel } from "./models";
import { Slide } from "./components/Swipper/Slide.tsx";
import { Link } from "react-router-dom";
import { ItemsFromApiContext } from "./contexts/ItemsFromApiContextProvider.tsx";
import { useCallApi } from "./services/useCallApi.ts";
import { useContext } from "react";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./components/Swipper/swipper.scss";
import { Pagination } from "swiper/modules";

export const Landing = () => {
  const { t } = useTranslation("common");
  const { itemsFromApi } = useContext(ItemsFromApiContext);
  const callApi = () => {
    useCallApi();
  };
  const { i18n } = useTranslation();
  register();

  if (!itemsFromApi) {
    callApi;
  }

  return (
    <>
      {/*Hero*/}
      <img
        className={"hero"}
        src={i18n.language === "es" ? "/hero.png" : "/hero-eng.png"}
        alt={""}
      />
      <div className={"flex-column margin-lat-auto margin-top-60 gap-60"}>
        {/*Claim and call to action*/}
        <div className={"flex-column align-items-center gap-60"}>
          <h1 className={"font align-text-center margin-top-0 margin-bottom-0"}>
            {t("common:homeClaim")}
          </h1>
          <Button component={Link} color={"primary"} to={"/home"}>
            {t("common:visitShop")}
          </Button>
        </div>
        {/*Slider*/}
        <div className={"slider"}>
          <h2 className={"font-alt margin-bottom-60"}>
            {t("common:suggestions")}
          </h2>
          <Swiper
            slidesPerView={1}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={60}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {SLIDE_CONTENT.map((slide: SlideContentModel) => (
              <SwiperSlide key={`${slide.image}${slide.swordTitle}`}>
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
        <div className={"margin-lat-auto"}>
          <h2 className={"font-alt"}>{t("common:aboutUs")}</h2>
          <div className={"flex-row gap-60 margin-lat-auto"}>
            <div className={"aboutUs-text"}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                libero ipsum, ultricies sollicitudin quam ac, dapibus bibendum
                tellus. Nullam faucibus in nibh accumsan mattis. Quisque vel
                vulputate quam. Ut efficitur dignissim neque, in hendrerit magna
                tincidunt nec.
              </p>
              <p>
                Nullam auctor laoreet posuere. Donec venenatis rhoncus mauris,
                eget feugiat velit lobortis vitae. Mauris porttitor nunc
                ultrices ligula varius, id pretium velit ullamcorper. Donec
                lacinia vehicula mi porttitor dignissim. Aliquam vel dui nec
                nibh venenatis fermentum quis quis diam.
              </p>
            </div>
            <img
              className={"aboutUs-img margin-left-auto"}
              src={"/anvil.png"}
              alt={""}
            />
          </div>
        </div>
        {/*Contact*/}
        <div className={"margin-lat-auto"}>
          <h2 className={"font-alt"}>{t("common:contact")}</h2>
          <p>{t("common:contactText")}</p>
          <Form children={t("common:landingForm.name")} />
          <Form children={"E-mail"} />
          <Form children={t("common:landingForm.message")} />
          <Button className={"margin-top-60"} color={"primary"}>
            {t("common:landingForm.sendMessage")}
          </Button>
        </div>
      </div>
    </>
  );
};

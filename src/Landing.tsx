import "./scss/style.scss";
import { useTranslation } from "react-i18next";
import { Button } from "./components/Button/Button.tsx";
import { Form } from "./components/Form/Form.tsx";
import { SLIDE_CONTENT } from "./lists/SLIDE_CONTENT.ts";
import { SlideContentModel } from "./models";
import { Slide } from "./components/Swipper/Slide.tsx";
import { Link } from "react-router-dom";
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
  const { i18n } = useTranslation();
  register();

  return (
    <>
      {/*Hero*/}
      <div className={"position-rel"}>
        <img className={"hero--bg-img"} src={"/hero-bg.png"} alt={""} />
        <img
          className={"hero--img"}
          src={i18n.language === "es" ? "/hero-es.png" : "/hero-en.png"}
          alt={""}
        />
      </div>
      <div
        className={"max-width-1500-centered flex-column margin-ver-60 gap-60"}
      >
        {/*Claim and call to action*/}
        <div className={"flex-column align-items-center gap-60"}>
          <h1
            className={
              "landing-claim h3 align-text-center margin-top-0 margin-bottom-0 margin-lat-60"
            }
          >
            {t("common:homeClaim")}
          </h1>
          <Button component={Link} color={"primary"} to={"/home"}>
            {t("common:visitShop")}
          </Button>
        </div>
        {/*Slider*/}
        <div className={"slider border-gray-300"}>
          <h2 className={"slider--title font-alt border-bottom-gray-300"}>
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
        <div className={"about-us border-gray-300 flex-row"}>
          <div className={"flex-column gap-60"}>
            <h2 className={"font-alt about-us--title"}>
              {t("common:aboutUs")}
            </h2>
            <div className={"about-us--text"}>
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
          </div>
          <img
            className={"about-us--img margin-left-auto"}
            src={"/anvil.png"}
            alt={""}
          />
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

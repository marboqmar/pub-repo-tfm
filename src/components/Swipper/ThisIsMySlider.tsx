import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ItemDetailsModel } from "../../models";
import { ItemDetails } from "../ItemDetails/ItemDetails.tsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { register } from "swiper/element/bundle";
import { useTranslation } from "react-i18next";

export const ThisIsMySlider = ({
  randomProductsList,
}: {
  randomProductsList: ItemDetailsModel[];
}) => {
  const { t } = useTranslation("common");
  register();

  return (
    <div className={"itemDetails border-gray-300"}>
      <h2 className={"itemDetails--title font-alt border-bottom-gray-300"}>
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
        {randomProductsList.map((item: ItemDetailsModel) => (
          <SwiperSlide key={`${item.img}${item.name}`}>
            <ItemDetails item={item} />
            <div
              className={"itemDetails--bullets-container border-top-gray-300"}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

import { SlideContentModel } from "../../models";
import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button.tsx";
import { Link } from "react-router-dom";

export const Slide = (slide: SlideContentModel) => {
  const { t } = useTranslation("common");

  return (
    <div className={"flex-row"}>
      <img id={"slider-img"} src={slide.image} alt={""} />
      <div
        className={
          "landing-sword-text flex-column grid__item-6-columns margin-left-auto align-flex-start"
        }
      >
        <h3 id={"landing-sword-title"} className={"h2 margin-top-0"}>
          {slide.swordTitle}
        </h3>
        <div className={"underline bgcolor-gray-100"}></div>
        <p className={"align-text-left"}>{slide.swordDescription}</p>
        <div className={"underline bgcolor-gray-100"}></div>
        <div className={"margin-top-auto"}>
          <p className={"h2 slider-price"}>
            <span className={"color-gray crossed-text"}>489€</span>
            <span> - 275€</span>
          </p>
          <Button component={Link} color={"primary"} to={"/detalles-producto"}>
            {t("common:productDetails")}
          </Button>
        </div>
      </div>
    </div>
  );
};

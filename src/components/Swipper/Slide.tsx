import { SlideContentModel } from "../../models";
import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button.tsx";
import { Link } from "react-router-dom";

export const Slide = (slide: SlideContentModel) => {
  const { t } = useTranslation("common");

  return (
    <div className={"flex-column"}>
      <div className={"flex-row"}>
        <div
          className={"slider--images-section flex-row border-right-gray-300"}
        >
          <img className={"slider--img"} src={"/swords/anduril.png"} alt={""} />
          <div
            className={
              "slider--img-container margin-lat-24 margin-bottom-24 margin-top-24"
            }
          >
            <img
              className={"slider--img-small"}
              src={"/swords/anduril.png"}
              alt={""}
            />
            <img
              className={"slider--img-small"}
              src={"/swords/anduril.png"}
              alt={""}
            />
          </div>
        </div>
        <div className={"slider--text-section flex-column"}>
          <h3 className={"h2--no-margin slider--sword-title"}>
            {slide.swordTitle}
          </h3>
          <p
            className={
              "h2--no-margin slider--sword-price border-bottom-gray-300"
            }
          >
            <span className={"color-gray crossed-text"}>489€</span>
            <span> - 275€</span>
          </p>
          <p className={"slider--sword-description"}>
            {slide.swordDescription}
          </p>
          <Button
            className={"slider--btn"}
            component={Link}
            color={"primary"}
            withoutBorderRadius
            to={"/detalles-producto"}
            type={"button"}
          >
            {t("common:productDetails")}
          </Button>
        </div>
      </div>
      <div className={"slider--bullets-container border-top-gray-300"}></div>
    </div>
  );
};

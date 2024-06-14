import "./scss/style.scss";
import { useTranslation } from "react-i18next";
import { Button } from "./components/Button/Button.tsx";
import { Link } from "react-router-dom";
import { LandingContact } from "./components/LandingContact/LandingContact.tsx";
import { useRandomSimilarProducts } from "./services/useRandomSimilarProducts.ts";
import { SuggestionsSlider } from "./components/Swipper/SuggestionsSlider.tsx";
import { ItemDetailsModel } from "./models";

export const Landing = () => {
  const { t } = useTranslation("common");
  const { i18n } = useTranslation();
  const randomProductsList: ItemDetailsModel[] = useRandomSimilarProducts(3);

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
        {randomProductsList.length > 0 && (
          <SuggestionsSlider randomProductsList={randomProductsList} />
        )}
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
        <LandingContact />
      </div>
    </>
  );
};

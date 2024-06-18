import "./Footer.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button.tsx";

export const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className={"border-top-gray-light"}>
      <div
        className={
          "footer flex-column align-items-center max-width-1800-centered"
        }
      >
        <div className={"flex-row width-100"}>
          <div className={"footer--section-logo border-right-gray-light"}>
            <Button
              color={"none"}
              withoutHover
              component={Link}
              isLink
              type={undefined}
              paddingSize={"none"}
              borderType={"none"}
              to={"/"}
            >
              <img
                className={"footer--logo"}
                src={"/logotipo.png"}
                alt={"Website logo"}
              />
            </Button>
            <p className={"margin-top-24"}>{t("common:aboutUsContent-2/2")}</p>
          </div>
          <div className={"flex-row"}>
            <div
              className={
                "footer--section-company border-left-gray-light margin-left-auto"
              }
            >
              <p className={"margin-bottom-12"}>
                <strong>COMPANY</strong>
              </p>
              <p>ABOUT US</p>
              <p>OUR PROCESS</p>
              <p>OFFICES</p>
              <Button
                color={"none"}
                withoutHover
                component={Link}
                type={undefined}
                isLink
                paddingSize={"none"}
                borderType={"none"}
                to={"/libreria"}
              >
                {t("common:footer.patterns")}
              </Button>
            </div>
            <div className={"footer--section-social border-left-gray-light"}>
              <p className={"margin-bottom-12"}>
                <strong>SOCIAL</strong>
              </p>
              <p>INSTAGRAM</p>
              <p>X</p>
              <p>PINTEREST</p>
              <p>TIKTOK</p>
              <p>NEWSLETTER</p>
            </div>
            <div className={"footer--section-policies border-left-gray-light"}>
              <p className={"margin-bottom-12"}>
                <strong>POLICIES</strong>
              </p>
              <p>PRIVACY POLICY</p>
              <p>TERMS AND CONDITIONS</p>
              <p>COOKIES SETTINGS</p>
              <p>PURCHASE CONDITIONS</p>
            </div>
          </div>
        </div>
      </div>
      <p className={"footer--bottom border-top-gray-light"}>
        <small>© 2024 FANTASY FORGE</small>
      </p>
    </footer>
  );
};

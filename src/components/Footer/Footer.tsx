import "./Footer.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button.tsx";

export const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className={"flex-column align-items-center border-top-gray"}>
      <div className={"flex-row width-100"}>
        <div className={"footer--section-logo border-right-gray"}>
          <Button
            color={"none"}
            withoutHover
            component={Link}
            isLink
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
            maximus risus, sit amet mattis nunc. Aliquam ut laoreet massa.
            Vivamus dapibus neque eu sem vestibulum, suscipit lacinia erat
            facilisis. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Pellentesque fermentum felis metus, a hendrerit nibh
            rutrum ut. Suspendisse nec metus in ipsum hendrerit commodo. Donec
            bibendum risus lectus, ac auctor eros malesuada a.
          </p>
        </div>
        <div className={"flex-row"}>
          <div
            className={
              "footer--section-company border-left-gray margin-left-auto"
            }
          >
            <p>
              <strong>COMPANY</strong>
            </p>
            <p>ABOUT US</p>
            <p>OUR PROCESS</p>
            <p>OFFICES</p>
            <Button
              color={"none"}
              withoutHover
              component={Link}
              isLink
              paddingSize={"none"}
              borderType={"none"}
              to={"/libreria"}
            >
              {t("common:footer.patterns")}
            </Button>
          </div>
          <div className={"footer--section-social border-left-gray"}>
            <p>
              <strong>SOCIAL</strong>
            </p>
            <p>INSTAGRAM</p>
            <p>X</p>
            <p>PINTEREST</p>
            <p>TIKTOK</p>
            <p>NEWSLETTER</p>
          </div>
          <div className={"footer--section-policies border-left-gray"}>
            <p>
              <strong>POLICIES</strong>
            </p>
            <p>PRIVACY POLICY</p>
            <p>TERMS AND CONDITIONS</p>
            <p>COOKIES SETTINGS</p>
            <p>PURCHASE CONDITIONS</p>
          </div>
        </div>
      </div>
      <p className={"footer--bottom border-top-gray"}>
        <small>© 2024 FANTASY FORGE</small>
      </p>
    </footer>
  );
};

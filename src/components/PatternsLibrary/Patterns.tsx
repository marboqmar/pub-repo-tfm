import "./Patterns.scss";
import { Button } from "../Button/Button.tsx";
import { useTranslation } from "react-i18next";

export const Patterns = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className={"patterns-hero"}>
        <h1>Fantasy Forge Pattern Library</h1>
        <p>These are all the styles used to make your dreams come true!</p>
      </div>
      <div className={"patterns"}>
        <h2 className={"patterns-titles"}>Typography</h2>
        <h1 className={"h1 font-alt"}>Alternative heading 1</h1>
        <h1 className={"h1"}>Heading 1</h1>
        <h2 className={"h2"}>Heading 2</h2>
        <h3 className={"h3"}>Heading 3</h3>
        <h4 className={"h4"}>Heading 4</h4>
        <h5 className={"h5"}>Heading 5</h5>
        <h6 className={"h6"}>Heading 6</h6>
        <p>Body copy</p>
        <small>Small text</small>
        <h1 className={"h1"}>
          <strong>Heading 1 bold</strong>
        </h1>
        <h2 className={"h2"}>
          <strong>Heading 2 bold</strong>
        </h2>
        <h3 className={"h3"}>
          <strong>Heading 3 bold</strong>
        </h3>
        <h4 className={"h4"}>
          <strong>Heading 4 bold</strong>
        </h4>
        <h5 className={"h5"}>
          <strong>Heading 5 bold</strong>
        </h5>
        <h6 className={"h6"}>
          <strong>Heading 6 bold</strong>
        </h6>
        <p>
          <strong>Body copy bold</strong>
        </p>
        <small>
          <strong>Small text bold</strong>
        </small>
        <p>List:</p>
        <ul>
          <li>First item of the list</li>
          <li>Second item of the list</li>
          <li>Third item of the list</li>
        </ul>
        <h2 className={"patterns-titles"}>Buttons</h2>
        <div className={"flex-row gap-36"}>
          <Button className={"btn font patterns-button"} color={"primary"}>
            Active button
          </Button>
          <Button className={"btn font patterns-button"} disabled>
            Disabled button
          </Button>
        </div>
        <h2 className={"patterns-titles"}>Forms</h2>
        <p>Text box:</p>
        <input type={"text"} className={"input-text"}></input>
        <h2 className={"patterns-titles"}>Colours</h2>
        <div>
          <h3>Brand colours</h3>
          <div className={"patterns-colors flex-row bgcolor-primary"}>
            <div className={"color-white"}>
              <p>Primary</p>
              <p>#0066B3</p>
            </div>
            <div>
              <p>Black text</p>
              <p className={"color-white"}>White text</p>
            </div>
            <div>
              <p>Fail</p>
              <p className={"color-white"}>Pass</p>
            </div>
          </div>
          <div className={"patterns-colors flex-row bgcolor-secondary"}>
            <div className={"color-white"}>
              <p>Secondary</p>
              <p>#0066B3</p>
            </div>
            <div>
              <p>Black text</p>
              <p className={"color-white"}>White text</p>
            </div>
            <div>
              <p>Fail</p>
              <p className={"color-white"}>Pass</p>
            </div>
          </div>
          <h3>Gray colours</h3>
          <div className={"patterns-colors flex-row bgcolor-gray-100"}>
            <div>
              <p>Gray 100</p>
              <p>#BDC1C3</p>
            </div>
            <div>
              <p>Black text</p>
              <p className={"color-white"}>White text</p>
            </div>
            <div>
              <p>Pass</p>
              <p className={"color-white"}>Fail</p>
            </div>
          </div>
          <div className={"patterns-colors flex-row bgcolor-gray-300"}>
            <div className={"color-white"}>
              <p>
                <strong>Gray 300</strong>
              </p>
              <p>
                <strong>#9BA0A3</strong>
              </p>
            </div>
            <div>
              <p>
                <strong>Black text</strong>
              </p>
              <p className={"color-white"}>
                <strong>White text</strong>
              </p>
            </div>
            <div>
              <p>
                <strong>Fail</strong>
              </p>
              <p className={"color-white"}>
                <strong>Fail</strong>
              </p>
            </div>
          </div>
          <div className={"patterns-colors flex-row bgcolor-gray-500"}>
            <div className={"color-white"}>
              <p>Gray 500</p>
              <p>#595D60</p>
            </div>
            <div>
              <p>Black text</p>
              <p className={"color-white"}>White text</p>
            </div>
            <div>
              <p>Fail</p>
              <p className={"color-white"}>Pass</p>
            </div>
          </div>
        </div>
        <h2 className={"patterns-titles"}>Borders</h2>
        <div className={"flex-row"}>
          <div className={"flex-column"}>
            <p>6px for buttons:</p>
            <p>12px for input boxes:</p>
          </div>
          <div className={"flex-column"}>
            <div
              className={
                "patterns-borders bgcolor-primary border-radius-12 patterns-border"
              }
            ></div>
            <div
              className={
                "patterns-borders bgcolor-primary border-radius-6 patterns-border"
              }
            ></div>
          </div>
        </div>
        <h2 className={"patterns-titles"}>Grid</h2>
        <h2 className={"patterns-titles"}>Icons</h2>
        <div className={"flex-row gap-36"}>
          <div className={"flex-column align-items-center"}>
            <img className={"icon"} src={"/icons/language.png"} alt={""} />
            <small> {t("common:header.language")}</small>
          </div>
          <div className={"flex-column align-items-center"}>
            <img className={"icon"} src={"/icons/my-account.png"} alt={""} />
            <small> {t("common:header.signIn")}</small>
          </div>
          <div className={"flex-column align-items-center"}>
            <img className={"icon"} src={"/icons/basket.png"} alt={""} />
            <small> {t("common:header.cart")}</small>
          </div>
        </div>
      </div>
      <h3>Testing!!!</h3>
      <div className={"test-body"}>
        <div className={"grid"}>
          <div className={"item-12 first-item colours"}>1/1</div>
        </div>
        <div className={"grid"}>
          <div className={"item-6 first-item colours"}>1/2</div>
          <div className={"item-6 colours"}>1/2</div>
        </div>
        <div className={"grid"}>
          <div className={"item-6 first-item colours"}>6/12</div>
          <div className={"item-2 colours"}>2/12</div>
          <div className={"item-2 colours"}>2/12</div>
          <div className={"item-2 colours"}>2/12</div>
        </div>
      </div>
    </>
  );
};

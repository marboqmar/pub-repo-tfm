import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button.tsx";
import { Bounce, toast, ToastContainer } from "react-toastify";

type Inputs = {
  name: string;
  email: string;
  message: string;
  checkbox: boolean;
};

export const LandingContact = () => {
  const { t } = useTranslation("common");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const notify = () =>
    toast(t("common:landingForm.messageSent"), {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const onSubmit: SubmitHandler<Inputs> = () => {
    notify();
  };

  return (
    <div className={"flex"}>
      <div className={"border-gray-300 flex-grow-1"}>
        <h2 className={"font-alt contact--title"}>{t("common:contact")}</h2>
        <p className={"margin-left-48 margin-ver-24"}>
          {t("common:contactText")}
        </p>
        <form
          className={"border-top-gray-300 form font"}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={"flex-row border-bottom-gray-300"}>
            <div className={"flex-column flex-grow-1"}>
              {/*Name*/}
              <label className={"border-bottom-gray-300"}>
                {t("common:landingForm.name")}
              </label>
              <input
                className={"font"}
                aria-label={"name"}
                {...register("name", { required: true, maxLength: 100 })}
                placeholder={t("common:landingForm.namePlaceholder")}
              />
              {errors.name && (
                <p className={"form--error"}>This field is required</p>
              )}
              {/*Email*/}
              <label className={"border-bottom-gray-300 border-top-gray-300"}>
                Email
              </label>
              <input
                className={"font"}
                aria-label={"email"}
                {...register("email", { required: true, maxLength: 100 })}
                placeholder={t("common:landingForm.emailPlaceholder")}
              />
              {errors.email && (
                <p className={"form--error"}>This field is required</p>
              )}
            </div>
            <div className={"flex-column flex-grow-1 border-left-gray-300"}>
              {/*Message*/}
              <label className={"border-bottom-gray-300"}>
                {t("common:landingForm.message")}
              </label>
              <textarea
                className={"font form--message"}
                aria-label={"message"}
                placeholder={t("common:landingForm.messagePlaceholder")}
                {...register("message", { required: true, maxLength: 500 })}
              />
              {errors.message && (
                <p className={"form--error"}>This field is required</p>
              )}
            </div>
          </div>
          <div className={"flex-column"}>
            <div className={"flex-row contact--form-termsAndConditions gap-12"}>
              {/*Terms and conditions*/}
              <input
                type="checkbox"
                className={"form--checkbox"}
                aria-label={"checkbox"}
                {...register("checkbox", { required: true })}
              />
              <p className={"margin-ver-12"}>
                {t("common:landingForm.termsAndConditions")}
              </p>
            </div>
            {errors.checkbox && (
              <p className={"form--error"}>This field is required</p>
            )}
          </div>
          <Button
            withoutBorderRadius
            color={"primary"}
            className={"width-100"}
            type={"submit"}
          >
            {t("common:landingForm.sendMessage")}
          </Button>
        </form>
        <ToastContainer
          bodyClassName="toast-message toast-message--padding contact--form-toast"
          toastClassName="toast-border"
          position="bottom-right"
          autoClose={4000}
          limit={1}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnHover={false}
          theme="light"
          transition={Bounce}
        />
      </div>
    </div>
  );
};

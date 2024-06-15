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
        <p className={"margin-left-48 "}>{t("common:contactText")}</p>
        <form
          className={"border-top-gray-300 form  contact--form "}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={"flex-row border-bottom-gray-300"}>
            <div className={"flex-column flex-grow-1"}>
              <label className={"border-bottom-gray-300"}>
                {t("common:landingForm.name")}
              </label>
              <input
                className={"font"}
                aria-label={"name"}
                {...register("name", { required: true, maxLength: 200 })}
                placeholder={t("common:landingForm.namePlaceholder")}
              />
              {errors.name && <span>This field is required</span>}
              <label className={"border-bottom-gray-300 border-top-gray-300"}>
                Email
              </label>
              <input
                className={"font"}
                aria-label={"email"}
                {...register("email", { required: true, maxLength: 200 })}
                placeholder={t("common:landingForm.emailPlaceholder")}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className={"flex-column flex-grow-1 border-left-gray-300"}>
              <label className={"border-bottom-gray-300"}>
                {t("common:landingForm.message")}
              </label>
              <textarea
                className={"font contact--form-message"}
                aria-label={"message"}
                placeholder={t("common:landingForm.messagePlaceholder")}
                {...register("message", { required: true, maxLength: 500 })}
              />
              {errors.message && <span>This field is required</span>}
            </div>
          </div>
          <div className={"flex-column"}>
            <div className={"flex-row contact--form-termsAndConditions gap-12"}>
              <input
                type="checkbox"
                className={"contact--form-checkbox"}
                aria-label={"checkbox"}
                {...register("checkbox", { required: true })}
              />
              <p>{t("common:landingForm.termsAndConditions")}</p>
            </div>
            {errors.checkbox && <span>This field is required</span>}
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
          bodyClassName="toast-message contact--form-toast"
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

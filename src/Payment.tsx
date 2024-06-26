import { TotalToPay } from "./components/TotalToPay/TotalToPay.tsx";
import { useTranslation } from "react-i18next";
import { PaymentItemList } from "./components/PaymentItemList/PaymentItemList.tsx";
import { useForm, SubmitHandler } from "react-hook-form";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { ThanksForPurchase } from "./components/ThanksForPurchase/ThanksForPurchase.tsx";
import { useNavigate } from "react-router-dom";
import { useCartOnLocalStorage } from "./services/useCartOnLocalStorage.ts";

type Inputs = {
  address: string;
  country: string;
  city: string;
  postCode: string;
  cardName: string;
  cardNumber: number;
  expiryDate: number;
  CVV: number;
};

export const Payment = () => {
  const { t } = useTranslation("payment");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const toastContent = ThanksForPurchase();
  const navigate = useNavigate();
  const { deleteCart } = useCartOnLocalStorage();

  const notify = () =>
    toast(toastContent, {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const onSubmit: SubmitHandler<Inputs> = () => {
    notify();
    setTimeout(() => {
      navigate("/home");
    }, 4000);
    deleteCart();
  };

  return (
    <div className={"max-width-1500-centered"}>
      <div>
        <h1 className={"siteTitle font-alt"}>{t("payment:title")}</h1>
        <div className={"siteTitle--line"}></div>
      </div>
      <form
        className={"flex-row form font margin-bottom-120"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={"flex-column payment--form"}>
          <PaymentItemList />
          {/* Delivery address */}
          <div className={"flex margin-top-60"}>
            <div className={"border-gray-300 flex-grow-1"}>
              <h2
                className={
                  "font-alt margin-0 padding-32 border-bottom-gray-300"
                }
              >
                {t("payment:deliveryDetails")}
              </h2>

              <div className={"flex-row"}>
                <div className={"flex-column flex-grow-1"}>
                  {/*Address*/}
                  <label className={"border-bottom-gray-300"}>
                    {t("payment:address")}
                  </label>
                  <input
                    className={"font"}
                    aria-label={"address"}
                    {...register("address", {
                      required: true,
                      maxLength: 100,
                    })}
                    placeholder={t("payment:addressPlaceholder")}
                  />
                  {errors.address && (
                    <p className={"form--error"}>
                      {t("common:landingForm.fieldRequired")}
                    </p>
                  )}
                  {/*Country*/}
                  <label
                    className={"border-bottom-gray-300 border-top-gray-300"}
                  >
                    {t("payment:country")}
                  </label>
                  <input
                    className={"font"}
                    aria-label={"country"}
                    {...register("country", {
                      required: true,
                      maxLength: 100,
                    })}
                    placeholder={t("payment:countryPlaceholder")}
                  />
                  {errors.country && (
                    <p className={"form--error"}>
                      {t("common:landingForm.fieldRequired")}
                    </p>
                  )}
                </div>
                <div className={"flex-column flex-grow-1 border-left-gray-300"}>
                  {/*City*/}
                  <label className={"border-bottom-gray-300"}>
                    {t("payment:city")}
                  </label>
                  <input
                    className={"font border-bottom-gray-300"}
                    aria-label={"postCode"}
                    placeholder={t("payment:cityPlaceholder")}
                    {...register("postCode", {
                      required: true,
                      maxLength: 500,
                    })}
                  />
                  {errors.postCode && (
                    <p className={"form--error"}>
                      {t("common:landingForm.fieldRequired")}
                    </p>
                  )}
                  {/*Post code*/}
                  <label
                    className={"border-bottom-gray-300 border-top-gray-300"}
                  >
                    {t("payment:postCode")}
                  </label>
                  <input
                    className={"font"}
                    aria-label={"city"}
                    placeholder={t("payment:postCodePlaceholder")}
                    {...register("city", {
                      required: true,
                      maxLength: 500,
                    })}
                  />
                  {errors.city && (
                    <p className={"form--error"}>
                      {t("common:landingForm.fieldRequired")}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Card details */}
          <div className={"flex margin-top-60"}>
            <div className={"border-gray-300 flex-grow-1"}>
              <h2
                className={
                  "font-alt margin-0 padding-32 border-bottom-gray-300"
                }
              >
                {t("payment:cardDetails")}
              </h2>

              <div className={"flex-row"}>
                <div className={"flex-column flex-grow-1"}>
                  {/*Card name*/}
                  <label className={"border-bottom-gray-300"}>
                    {t("payment:cardName")}
                  </label>
                  <input
                    className={"font"}
                    aria-label={"cardName"}
                    {...register("cardName", {
                      required: true,
                      maxLength: 100,
                    })}
                    placeholder={t("payment:cardNamePlaceholder")}
                  />
                  {errors.cardName && (
                    <p className={"form--error"}>
                      {t("common:landingForm.fieldRequired")}
                    </p>
                  )}
                  {/*Expiry date*/}
                  <label
                    className={"border-bottom-gray-300 border-top-gray-300"}
                  >
                    {t("payment:expiryDate")}
                  </label>
                  <input
                    className={"font"}
                    aria-label={"expiryDate"}
                    {...register("expiryDate", {
                      required: {
                        value: true,
                        message: t("common:landingForm.fieldRequired"),
                      },
                      // minLength: {
                      //   value: 5,
                      //   message: t("common:landingForm.expDateError"),
                      // },
                      // maxLength: {
                      //   value: 5,
                      //   message: t("common:landingForm.expDateError"),
                      // },
                      // pattern: {
                      //   message: "format",
                      //   value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                      // },
                    })}
                    placeholder={"00/00"}
                  />
                  {errors.expiryDate && (
                    <p className={"form--error"}>{errors.expiryDate.message}</p>
                  )}
                </div>
                <div className={"flex-column flex-grow-1 border-left-gray-300"}>
                  {/*Card number*/}
                  <label className={"border-bottom-gray-300"}>
                    {t("payment:cardNumber")}
                  </label>
                  <input
                    className={"font border-bottom-gray-300"}
                    aria-label={"cardNumber"}
                    type="number"
                    placeholder={"0000 0000 0000 0000"}
                    {...register("cardNumber", {
                      required: {
                        value: true,
                        message: t("common:landingForm.fieldRequired"),
                      },
                      // minLength: {
                      //   value: 32,
                      //   message: t("common:landingForm.32char"),
                      // },
                      // maxLength: {
                      //   value: 32,
                      //   message: t("common:landingForm.32char"),
                      // },
                    })}
                  />
                  {errors.cardNumber && (
                    <p className={"form--error"}>{errors.cardNumber.message}</p>
                  )}
                  {/*CVV*/}
                  <label
                    className={"border-bottom-gray-300 border-top-gray-300"}
                  >
                    {t("payment:CVV")}
                  </label>
                  <input
                    className={"font"}
                    aria-label={"CVV"}
                    type="number"
                    placeholder={t("000")}
                    {...register("CVV", {
                      required: {
                        value: true,
                        message: t("common:landingForm.fieldRequired"),
                      },
                      // minLength: {
                      //   value: 3,
                      //   message: t("common:landingForm.3char"),
                      // },
                      // maxLength: {
                      //   value: 3,
                      //   message: t("common:landingForm.3char"),
                      // },
                    })}
                  />
                  {errors.CVV && (
                    <p className={"form--error"}>{errors.CVV.message}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <TotalToPay />
        <ToastContainer
          bodyClassName="toast-message toast-thanks-for-purchase"
          toastClassName="toast-border toast-color"
          position="top-center"
          autoClose={4000}
          limit={1}
          hideProgressBar
          newestOnTop={false}
          rtl={false}
          pauseOnHover={false}
          theme="light"
          transition={Bounce}
        />
      </form>
    </div>
  );
};

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
      closeOnClick: true,
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
        <h1 className={"siteTitle"}>{t("payment:title")}</h1>
        <div className={"siteTitle--line"}></div>
      </div>
      <form className={"payment flex-row"} onSubmit={handleSubmit(onSubmit)}>
        <div className={"flex-column"}>
          <PaymentItemList />
          {/*Form*/}
          <div className={"flex-column gap-12 payment--form margin-bottom-120"}>
            {/* Delivery address */}
            <p className={"h2"}>{t("payment:deliveryDetails")}</p>
            <label>{t("payment:address")}</label>
            <input
              aria-label={"address"}
              {...register("address", { required: true, maxLength: 200 })}
            />
            {errors.address && <span>This field is required</span>}
            <div className={"flex-row gap-18"}>
              <div className={"flex-column flex-grow-1"}>
                <label>{t("payment:country")}</label>
                <input
                  aria-label={"country"}
                  {...register("country", { required: true, maxLength: 80 })}
                />
                {errors.country && <span>This field is required</span>}
              </div>
              <div className={"flex-column flex-grow-1"}>
                <label>{t("payment:postCode")}</label>
                <input
                  aria-label={"postCode"}
                  {...register("postCode", { required: true, maxLength: 80 })}
                />
                {errors.postCode && <span>This field is required</span>}
              </div>
            </div>

            {/* Card details */}
            <p className={"h2 margin-top-60"}>{t("payment:cardDetails")}</p>
            <label>{t("payment:cardName")}</label>
            <input
              aria-label={"cardName"}
              {...register("cardName", { required: true, maxLength: 200 })}
            />
            {errors.cardName && <span>This field is required</span>}
            <label>{t("payment:cardNumber")}</label>
            <input
              type={"number"}
              aria-label={"cardNumber"}
              {...register("cardNumber", {
                required: true,
                maxLength: 100,
                valueAsNumber: true,
              })}
            />
            {errors.cardNumber && <span>This field is required</span>}
            <div className={"flex-row gap-18"}>
              <div className={"flex-column flex-grow-1"}>
                <label>{t("payment:expiryDate")}</label>
                <input
                  type={"number"}
                  aria-label={"expiryDate"}
                  {...register("expiryDate", {
                    required: true,
                    maxLength: 5,
                    valueAsNumber: true,
                  })}
                />
                {errors.expiryDate && <span>This field is required</span>}
              </div>
              <div className={"flex-column flex-grow-1"}>
                <label>{t("payment:CVV")}</label>
                <input
                  type={"number"}
                  aria-label={"CVV"}
                  {...register("CVV", {
                    required: true,
                    maxLength: 3,
                    valueAsNumber: true,
                  })}
                />
                {errors.CVV && <span>This field is required</span>}
              </div>
            </div>
          </div>
        </div>
        <TotalToPay />
      </form>
      <ToastContainer
        bodyClassName="toast-message toast-thanks-for-purchase"
        toastClassName="toast-border"
        position="top-center"
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
  );
};

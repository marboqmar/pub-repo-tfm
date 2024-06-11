import { TotalToPay } from "./components/TotalToPay/TotalToPay.tsx";
import { useTranslation } from "react-i18next";
import { PaymentItemList } from "./components/PaymentItemList/PaymentItemList.tsx";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRef } from "react";

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
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const myRefname = useRef(null);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleClick = () => myRefname.current.click();

  return (
    <div className={"margin-lat-60"}>
      <div>
        <h1 className={"cartTitle"}>{t("payment:title")}</h1>
        <div className={"cartTitle--line"}></div>
      </div>
      <div className={"flex-row"}>
        <PaymentItemList />
        <TotalToPay />
      </div>
      <form
        className={"flex-column gap-12 payment--form"}
        onSubmit={handleSubmit(onSubmit)}
      >
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
          aria-label={"cardNumber"}
          {...register("cardNumber", { required: true, maxLength: 100 })}
        />
        {errors.cardNumber && <span>This field is required</span>}

        <div className={"flex-row gap-18"}>
          <div className={"flex-column flex-grow-1"}>
            <label>{t("payment:expiryDate")}</label>
            <input
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
              aria-label={"CVV"}
              {...register("CVV", { required: true, maxLength: 3 })}
            />
            {errors.CVV && <span>This field is required</span>}
          </div>
        </div>

        {/* TODO hide submit button and click it programmatically*/}
        {/* Submit */}
        <input type="submit" ref={myRefname}></input>
      </form>

      <button onClick={handleClick}>test</button>
    </div>
  );
};

import { ReactNode } from "react";
import classNames from "classnames";

interface FormProps {
  large?: boolean;
  children: ReactNode;
}

export const Form = ({ large, children }: FormProps) => {
  const classes = classNames({
    "input-text": true,
    "input-large": large,
  });

  return (
    <form>
      <p className={"margin-bottom-24"}>{children}</p>
      <input type={"text"} className={classes}></input>
    </form>
  );
};

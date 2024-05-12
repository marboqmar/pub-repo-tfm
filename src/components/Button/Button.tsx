import "./Button.scss";
import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

export type ButtonColor = "primary" | "none";

export type PaddingSizes = "none" | "small";

export type BorderType = "none" | "squareBlack";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  withoutHover?: boolean;
  paddingSize?: PaddingSizes;
  borderType?: BorderType;
  link?: string;
}

export const Button = ({
  className = "",
  color,
  withoutHover,
  paddingSize,
  borderType,
  link,
  disabled,
  children,
  ...rest
}: ButtonProps) => {
  const classes = classNames({
    btn: true,
    font: true,
    [className]: className,
    [`btn--color-${color}`]: color,
    "btn--withoutHover": withoutHover,
    [`btn--paddingSize-${paddingSize}`]: paddingSize,
    [`btn--border-${borderType}`]: borderType,
    "btn--disabled": disabled,
  });

  if (!link) {
    return (
      <button className={classes} disabled={disabled} {...rest}>
        {children}
      </button>
    );
  }
  return (
    <Link to={`${link}`} className={classes}>
      {children}
    </Link>
  );
};

import "./Button.scss";
import { ButtonHTMLAttributes, ComponentType, ReactHTML } from "react";
import classNames from "classnames";

export type ButtonColor = "primary" | "none";

export type PaddingSizes = "none" | "small";

export type BorderType = "none" | "squareBlack";

export type ButtonType = "submit" | "reset" | "button" | undefined;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  withoutHover?: boolean;
  paddingSize?: PaddingSizes;
  borderType?: BorderType;
  withoutBorderRadius?: boolean;
  component?: ComponentType<any> | keyof ReactHTML;
  isLink?: boolean;
  type?: ButtonType;
  to?: string;
  href?: string;
  role?: string;
}

export const Button = ({
  className = "",
  color,
  withoutHover,
  withoutBorderRadius,
  paddingSize,
  borderType,
  component = "button",
  isLink,
  type = "button",
  role,
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
    "btn--withoutBorderRadius": withoutBorderRadius,
    [`btn--paddingSize-${paddingSize}`]: paddingSize,
    [`btn--border-${borderType}`]: borderType,
    component: "button",
    type: "button",
    "btn--link": isLink,
    "btn--disabled": disabled,
  });
  const Component = component;

  return (
    <Component
      className={classes}
      disabled={disabled}
      role={role}
      type={type}
      {...rest}
    >
      {children}
    </Component>
  );
};

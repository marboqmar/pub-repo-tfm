import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

export type ButtonSizes = 'sm' | 'md' | 'lg';

export type ButtonColor = 'primary' | 'none';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSizes;
    color?: ButtonColor;
    withoutHover?: boolean;
    withoutPadding?: boolean;
    notOutlined?: boolean;
}

export const Button = ({ className = '', size, color, withoutHover, withoutPadding, notOutlined, disabled, children, ...rest }: ButtonProps) => {
    const classes = classNames ({
        'btn': true,
        'font': true,
        [className]: className,
        [`btn--${size}`]: size,
        [`btn--color-${color}`]: color,
        'btn--withoutHover': withoutHover,
        'btn--withoutPadding': withoutPadding,
        'btn--notOutlined': notOutlined,
        'btn--disabled': disabled
    })

    return <button className={classes} disabled={disabled} {...rest}>{children}</button>
}
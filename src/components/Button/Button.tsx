import './Button.scss'
import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

export type ButtonColor = 'primary' | 'none';

export type PaddingSizes = 'none' | 'small';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: ButtonColor;
    withoutHover?: boolean;
    paddingSize?: PaddingSizes;
    squareBlackBorder?: boolean;
}

export const Button = ({ className = '', color, withoutHover, paddingSize, squareBlackBorder, disabled, children, ...rest }: ButtonProps) => {
    const classes = classNames ({
        'btn': true,
        'font': true,
        [className]: className,
        [`btn--color-${color}`]: color,
        'btn--withoutHover': withoutHover,
        [`btn--paddingSize-${paddingSize}`]: paddingSize,
        'btn--squareBlackBorder': squareBlackBorder,
        'btn--disabled': disabled
    })

    return <button className={classes} disabled={disabled} {...rest}>{children}</button>
}
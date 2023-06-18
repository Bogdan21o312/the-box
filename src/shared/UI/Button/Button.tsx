import {ButtonHTMLAttributes, FC} from "react"
import classes from "./Button.module.scss"
import {ButtonProps} from "./ButtonProps";

export const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({children, variant, iconRight, iconLeft, oneHundredPercentWidth, rotateIcon, ...otherProps}) => {

    // Array classes button
    const classesButton = [classes.main]

    // Variant
    variant === "secondary" && classesButton.push(classes.secondary)

    // One Hundred Percent Width
    oneHundredPercentWidth && classesButton.push(classes.oneHundredPercentWidth)

    // Icon classes
    const classesIcon = [classes.icon]
    rotateIcon && classesIcon.push(classes.rotateIcon)

    return (
        <button className={classesButton.join(' ')} {...otherProps}>
            {iconLeft && <div className={classesIcon.join(' ')}>{iconLeft}</div>}
            <span>{children}</span>
            {iconRight && <div className={classesIcon.join(' ')}>{iconRight}</div>}
        </button>
    )
}

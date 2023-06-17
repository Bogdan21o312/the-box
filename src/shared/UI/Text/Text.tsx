import {FC} from "react"
import classes from "./Text.module.scss"
import {TextProps} from "./TextProps";

export const Text: FC<TextProps> = ({children, type, color, center, elementType}) => {

    // Element Type
    const TagName = elementType || "div";

    // Array classes
    const classesText = [classes.main]

    // Center
    center && classesText.push(classes.center)

    // Type
    type === "titleImmense" && classesText.push(classes.titleImmense)
    type === "titleBig" && classesText.push(classes.titleBig)
    type === "title" && classesText.push(classes.title)
    type === "titleSmall" && classesText.push(classes.titleSmall)
    type === "textBig" && classesText.push(classes.textBig)
    type === "textSmall" && classesText.push(classes.textSmall)

    // Color
    color === "mainSecondary" && classesText.push(classes.colorMainSecondary)
    color === "orange" && classesText.push(classes.colorOrange)
    color === "bluePrimary" && classesText.push(classes.colorBluePrimary)
    color === "blueSecondary" && classesText.push(classes.colorBlueSecondary)
    color === "red" && classesText.push(classes.colorRed)
    color === "white" && classesText.push(classes.colorWhite)

    return (
        <TagName className={classesText.join(' ')}>
            {children}
        </TagName>
    )
}

import {FC} from "react"
import classes from "./Text.module.scss"
import {TextProps} from "./TextProps";

export const Text: FC<TextProps> = ({children, type, color, center, elementType}) => {

    // Element Type
    const TagName = elementType || "div";

    // Main
    const classMain = classes.main
    const classesText = [classMain]

    // Center
    const classCenter = classes.center

    center && classesText.push(classCenter)

    // Type
    const classTitleImmense = classes.titleImmense
    const classTitleBig = classes.titleBig
    const classTitle = classes.title
    const classTitleSmall = classes.titleSmall
    const classTextBig = classes.textBig
    const classTextSmall = classes.textSmall

    type === "titleImmense" && classesText.push(classTitleImmense)
    type === "titleBig" && classesText.push(classTitleBig)
    type === "title" && classesText.push(classTitle)
    type === "titleSmall" && classesText.push(classTitleSmall)
    type === "textBig" && classesText.push(classTextBig)
    type === "textSmall" && classesText.push(classTextSmall)

    // Color
    const classColorMainSecondary = classes.colorMainSecondary
    const classColorOrange = classes.colorOrange
    const classColorBluePrimary = classes.colorBluePrimary
    const classColorBlueSecondary = classes.colorBlueSecondary
    const classColorRed = classes.colorRed
    const classColorWhite = classes.colorWhite

    color === "mainSecondary" && classesText.push(classColorMainSecondary)
    color === "orange" && classesText.push(classColorOrange)
    color === "bluePrimary" && classesText.push(classColorBluePrimary)
    color === "blueSecondary" && classesText.push(classColorBlueSecondary)
    color === "red" && classesText.push(classColorRed)
    color === "white" && classesText.push(classColorWhite)

    return (
        <TagName className={classesText.join(' ')}>
            {children}
        </TagName>
    )
}

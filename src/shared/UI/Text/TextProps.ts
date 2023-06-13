import {ElementType, ReactNode} from "react"

export type TextProps<E extends ElementType = ElementType> = {
    children: ReactNode
    type?: "titleImmense" | "titleBig" | "title" | "titleSmall" | "textBig" | "textSmall"
    color?: "mainSecondary" | "orange" | "bluePrimary" | "blueSecondary" | "red" | "white"
    center?: boolean
    elementType?: E
}

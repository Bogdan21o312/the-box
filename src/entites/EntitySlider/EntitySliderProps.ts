import {ReactNode} from "react"

type CommonEntitySliderProps = {
    children: ReactNode
    slidesToShow?: number
}

type CustomButtonEntitySliderProps = CommonEntitySliderProps & {
    baseButtons?: never
    currentSlideCustom?: number
    setCurrentSlideCustom?: (slide: number) => void
}
type BaseButtonEntitySliderProps = CommonEntitySliderProps & {
    baseButtons?: boolean
    currentSlideCustom?: never
    setCurrentSlideCustom?: never
}


export type  EntitySliderProps = BaseButtonEntitySliderProps | CustomButtonEntitySliderProps

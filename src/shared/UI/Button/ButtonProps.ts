import {ReactNode} from "react"

export type ButtonProps =  {
    children: ReactNode
    variant?: "secondary"
    rotateIcon?: boolean
    iconRight?: ReactNode
    iconLeft?: ReactNode
    oneHundredPercentWidth?: boolean
}

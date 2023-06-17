import {ElementType, ReactNode} from "react"

export type FullScreenProps<E extends ElementType = ElementType> = {
    children: ReactNode
    includingHeaders: boolean
    elementType?: E
}

import {ReactNode} from "react"

export interface SectionProps {
    children: ReactNode
    withoutBottomPadding?: boolean
    withoutTopPadding?: boolean
}

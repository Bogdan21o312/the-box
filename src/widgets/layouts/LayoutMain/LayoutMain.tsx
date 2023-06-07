import {FC, ReactNode} from "react"
import {Main} from "./Main"
import {Header} from "./Header"
import {Footer} from "./Footer"

interface LayoutMainProps {
    children?: ReactNode
}

export const LayoutMain: FC<LayoutMainProps> = ({children}) => {
    return (
        <>
            <Header/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </>
    )
}

import {FC, ReactNode} from "react"
import {Main} from "./Main"
import {Header} from "./Header"
import {Footer} from "./Footer"

interface LayoutMainProps {
    children: ReactNode
}

export const LayoutTemplateName: FC<LayoutMainProps> = ({children}) => {

    return (
        <body>
        <Header/>
        <Main>
            {children}
        </Main>
        <Footer/>
        </body>
    )
}

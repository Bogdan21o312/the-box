import {FC, ReactNode} from "react"
import classes from "./Main.module.scss"

interface MainProps {
    children?: ReactNode
}

export const Main:FC<MainProps> = ({children}) => {
    return (
        <main className={classes.main}>
            {children}
        </main>
    )
}

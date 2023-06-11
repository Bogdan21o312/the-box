import {FC} from "react"
import classes from "./Container.module.scss"
import {ContainerProps} from "./ContainerProps";

export const Container:FC<ContainerProps> = ({children}) => {
    return (
        <div className={classes.container}>
            {children}
        </div>
    )
}

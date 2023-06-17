import {FC} from "react"
import classes from "./Container.module.scss"
import {ContainerProps} from "./ContainerProps";

export const Container:FC<ContainerProps> = ({children, nonRetreat}) => {

    // Array classes Container
    const classesContainer = [classes.container]

    // nonRetreat
    !nonRetreat && classesContainer.push(classes.retreat)


    return (
        <div className={classesContainer.join(' ')}>
            {children}
        </div>
    )
}

'use client'
import {FC} from "react"
import classes from "./EntityContainer.module.scss"
import {EntityContainerProps} from "./EntityContainerProps";
import {Ibg} from "@/shared";

export const EntityContainer:FC<EntityContainerProps> = ({children, nonRetreat, alt, src, modClassImage}) => {

    // Array classes entity container
    const classesContainer = [classes.container]

    // nonRetreat
    !nonRetreat && classesContainer.push(classes.retreat)

    return (
        <div className={classesContainer.join(' ')}>
            {children}
            {src || alt ? <Ibg src={src!} alt={alt!} modClass={`${classes.ibg} ${modClassImage}`} /> : null}
        </div>
    )
}

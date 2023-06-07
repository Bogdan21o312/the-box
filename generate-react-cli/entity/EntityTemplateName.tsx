import {FC} from "react"
import classes from "./EntityTemplateName.module.scss"
import {EntityTemplateNameProps} from "./EntityTemplateNameProps";

export const EntityTemplateName:FC<EntityTemplateNameProps> = ({children}) => {
    return (
        <div className={classes.main}>
            {children}
        </div>
    )
}

import {FC} from "react"
import classes from "./TemplateName.module.scss"
import {TemplateNameProps} from "./TemplateNameProps";

export const TemplateName:FC<TemplateNameProps> = ({children}) => {
    return (
        <div className={classes.main}>
            {children}
        </div>
    )
}

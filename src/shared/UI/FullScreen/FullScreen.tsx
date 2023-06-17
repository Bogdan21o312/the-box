import {FC} from "react"
import classes from "./FullScreen.module.scss"
import {FullScreenProps} from "./FullScreenProps";

export const FullScreen:FC<FullScreenProps> = ({children, includingHeaders, elementType}) => {

    // Element Type
    const TagName = elementType || "div";

    // Array classes full Screen
    const classesFullScreen = [classes.main]

    includingHeaders && classesFullScreen.push(classes.includingHeaders)

    return (
        <TagName className={classesFullScreen.join(' ')}>
            {children}
        </TagName>
    )
}

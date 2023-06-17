import {FC} from "react"
import classes from "./Section.module.scss"
import {SectionProps} from "./SectionProps";

export const Section:FC<SectionProps> = ({children, withoutTopPadding, withoutBottomPadding}) => {

    // Array classes section
    const classesSection = [classes.main]

    // Without top padding
    !withoutTopPadding?  classesSection.push(classes.paddingTop) : ''

    // Without bottom padding
    !withoutBottomPadding?  classesSection.push(classes.paddingBottom) : ''

    return (
        <section className={classesSection.join(' ')}>
            {children}
        </section>
    )
}

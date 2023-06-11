import {FC} from "react"
import classes from "./MenuItems.module.scss"
import {MenuItemsProps} from "./MenuItemsProps";
import {menuItems} from "./constants";
import Link from "next/link";

export const MenuItems:FC<MenuItemsProps> = ({className}) => {
    return (
        <ul className={`${classes.list} ${className}`}>
            {menuItems.map(item =>
                <li key={item.link} className={classes.item}>
                    <Link className={classes.link} href={item.link}>{item.text}</Link>
                </li>
            )}
        </ul>
    )
}

import classes from "./MenuMobile.module.scss"
import {MenuItems} from "../components";
import {useState} from "react";
import {bodyToggleLock} from "@/shared";

export const MenuMobile = () => {
    const [isMobileMenu, setMobileMenu] = useState(false)

    function toggleMobileMenu() {
        setMobileMenu(!isMobileMenu)
        bodyToggleLock()
    }

    const isClassMobile = isMobileMenu ? classes.mobileMenuOpen : ''

    return (
        <>
            <MenuItems className={`${classes.mobileMenu} ${isClassMobile}`}/>
            <button onClick={toggleMobileMenu}
                    className={`${classes.iconMenu} ${isMobileMenu ? classes.iconMenuOpen : ''}`}><span></span></button>
        </>
    );
};

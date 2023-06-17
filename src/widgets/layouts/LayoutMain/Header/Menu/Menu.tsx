'use client'
import {FC} from "react";
import {TypeDevice} from "@/shared";
import {MenuMobile} from "./MenuMobile";
import {MenuItems} from "./components";

export const Menu:FC<TypeDevice> = ({isTouchDevice}) => {
    return (
            <nav>
                {isTouchDevice ? <MenuMobile /> : <MenuItems />}
            </nav>
    );
};

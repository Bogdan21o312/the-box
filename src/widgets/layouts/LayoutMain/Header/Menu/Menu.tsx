'use client'
import {MenuMobile} from "@/widgets/layouts/LayoutMain/Header/Menu/MenuMobile";
import {MenuItems} from "@/widgets/layouts/LayoutMain/Header/Menu/components";

export const Menu = ({isMobileView}) => {
    return (
        <nav>
            {isMobileView ? <MenuMobile /> : <MenuItems />}
        </nav>
    );
};

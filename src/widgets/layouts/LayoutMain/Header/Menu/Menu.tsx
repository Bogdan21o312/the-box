'use client'
import {useDeviceType} from "@/shared";
import {MenuMobile} from "@/widgets/layouts/LayoutMain/Header/Menu/MenuMobile";
import {MenuItems} from "@/widgets/layouts/LayoutMain/Header/Menu/components";
import {useMediaQuery} from "@/shared/lib";
import {useIsTouchDevice} from "@/shared/lib/hooks/useIsTouchDevice";

export const Menu = () => {
    // const is = useMediaQuery()
    const {isMobile, isTablet} = useDeviceType();
    // const a = useIsTouchDevice()
    return (
        <nav>
            {isMobile ?
                <MenuMobile/>
                :
                <MenuItems/>
            }
        </nav>
    );
};

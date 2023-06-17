import classes from "./Header.module.scss"
import {Menu} from "./Menu";
import {IconLogo, useDeviceType} from "@/shared";
import {headers} from "next/headers";
import {EntityContainer} from "@/entites"
export const Header = () => {
    const {isTouchDevice} = useDeviceType(headers)
    return (
        <header className={classes.header}>
            <EntityContainer>
                <div className={classes.content}>
                    <div className={classes.logo}>
                        <IconLogo/>
                    </div>
                    <Menu isTouchDevice={isTouchDevice} />
                </div>
            </EntityContainer>
        </header>
    )
}

import classes from "./Header.module.scss"
import {IconLogo} from "@/assets";
import {Menu} from "./Menu";
import {Container, useDeviceType} from "@/shared";
import {headers} from "next/headers";

export const Header = () => {
    const {isTouchDevice} = useDeviceType(headers)
    return (
        <header className={classes.header}>
            <Container>
                <div className={classes.content}>
                    <div className={classes.logo}>
                        <IconLogo/>
                    </div>
                    <Menu isTouchDevice={isTouchDevice}/>
                </div>
            </Container>
        </header>
    )
}

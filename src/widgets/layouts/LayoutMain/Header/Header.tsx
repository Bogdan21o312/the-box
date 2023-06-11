import classes from "./Header.module.scss"
import {IconLogo} from "@/assets";
import {Menu} from "./Menu";
import {Container} from "@/shared";
import {headers} from "next/headers";

export const Header = () => {
    const userAgent = headers().get('user-agent')!.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    );
    return (
        <header className={classes.header}>
            <Container>
                <div className={classes.content}>
                    <div className={classes.logo}>
                        <IconLogo/>
                    </div>
                    <Menu isMobileView={userAgent}/>
                </div>
            </Container>
        </header>
    )
}

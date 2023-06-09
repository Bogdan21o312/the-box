import classes from "./Header.module.scss"
import {IconLogo} from "@/assets";
import {Menu} from "./Menu";
import {Container} from "@/shared";
export const Header = () => {

    return (
        <header className={classes.header}>
            <Container>
                <div className={classes.content}>
                    <div className={classes.logo}>
                        <IconLogo/>
                    </div>
                    <Menu/>
                </div>
            </Container>
        </header>
    )
}

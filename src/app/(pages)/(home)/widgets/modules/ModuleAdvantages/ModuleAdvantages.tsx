import classes from "./ModuleAdvantages.module.scss"
import {IconTools, Section, Text} from "@/shared";
import {EntityContainer} from "@/entites";
export const ModuleAdvantages = () => {
    return (
        <Section>
            <EntityContainer>
                <div className={classes.title}>
                    <Text type={"titleBig"} center>
                        Our Reputations
                    </Text>
                </div>
                <div className={classes.items}>
                    <div className={classes.item}>
                        <div className={classes.itemIcon}>
                            <IconTools/>
                        </div>
                        <div className={classes.itemTitle}>
                            <Text type={"title"}>
                                Best Services
                            </Text>
                        </div>
                        <div className={classes.itemText}>
                            <Text type={"textSmall"} color={"blueSecondary"}>
                                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
                            </Text>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.itemIcon}>
                            <IconTools/>
                        </div>
                        <div className={classes.itemTitle}>
                            <Text type={"title"}>
                                Best Services
                            </Text>
                        </div>
                        <div className={classes.itemText}>
                            <Text type={"textSmall"} color={"blueSecondary"}>
                                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
                            </Text>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.itemIcon}>
                            <IconTools/>
                        </div>
                        <div className={classes.itemTitle}>
                            <Text type={"title"}>
                                Best Services
                            </Text>
                        </div>
                        <div className={classes.itemText}>
                            <Text type={"textSmall"} color={"blueSecondary"}>
                                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
                            </Text>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.itemIcon}>
                            <IconTools/>
                        </div>
                        <div className={classes.itemTitle}>
                            <Text type={"title"}>
                                Best Services
                            </Text>
                        </div>
                        <div className={classes.itemText}>
                            <Text type={"textSmall"} color={"blueSecondary"}>
                                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
                            </Text>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.itemIcon}>
                            <IconTools/>
                        </div>
                        <div className={classes.itemTitle}>
                            <Text type={"title"}>
                                Best Services
                            </Text>
                        </div>
                        <div className={classes.itemText}>
                            <Text type={"textSmall"} color={"blueSecondary"}>
                                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
                            </Text>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.itemIcon}>
                            <IconTools/>
                        </div>
                        <div className={classes.itemTitle}>
                            <Text type={"title"}>
                                Best Services
                            </Text>
                        </div>
                        <div className={classes.itemText}>
                            <Text type={"textSmall"} color={"blueSecondary"}>
                                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
                            </Text>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.itemIcon}>
                            <IconTools/>
                        </div>
                        <div className={classes.itemTitle}>
                            <Text type={"title"}>
                                Best Services
                            </Text>
                        </div>
                        <div className={classes.itemText}>
                            <Text type={"textSmall"} color={"blueSecondary"}>
                                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
                            </Text>
                        </div>
                    </div>
                </div>
            </EntityContainer>
        </Section>
    );
};

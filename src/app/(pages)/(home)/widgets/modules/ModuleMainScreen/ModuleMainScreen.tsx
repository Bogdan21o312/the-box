"use client"
import {EntityContainer} from "@/entites";
import {Section, FullScreen, Text, Ibg} from "@/shared";
import classes from "./ModuleMainScreen.module.scss"
import imageSrc from "public/image.jpg"
import {EntityPresentationViewer} from "./entites";

export const ModuleMainScreen = () => {

    return (
        <Section withoutTopPadding>
            <FullScreen includingHeaders>
                <EntityContainer nonRetreat>
                    <div className={classes.content}>
                        <div className={classes.title}>
                            <Text type={"titleImmense"}>
                                Building things is our mission.
                            </Text>
                        </div>
                    </div>
                    <Ibg src={imageSrc} alt={'Image'} modClass={classes.ibgBG}/>
                </EntityContainer>
                <div className={classes.presentationViewer}>
                    <EntityPresentationViewer/>
                </div>
            </FullScreen>
        </Section>
    );
};

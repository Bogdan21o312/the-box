"use client"
import {EntitySlider, EntityContainer} from "@/entites";
import {Section,FullScreen, Text} from "@/shared";
import classes from "./ModuleMainScreen.module.scss"
import imageSrc from "public/image.jpg"
import {EntityPresentationViewer} from "./entites";

export const ModuleMainScreen = () => {

    return (
        <Section withoutTopPadding>
            <EntitySlider>
                <FullScreen includingHeaders>
                    <EntityContainer nonRetreat src={imageSrc} alt={'Image'} modClassImage={classes.ibgBG}>
                        <div className={classes.title}>
                            <Text type={"titleImmense"}>
                                Building things is our mission.
                            </Text>
                        </div>
                        <div className={classes.presentationViewer}>
                            <EntityPresentationViewer/>
                        </div>
                    </EntityContainer>
                </FullScreen>
            </EntitySlider>
        </Section>
    );
};

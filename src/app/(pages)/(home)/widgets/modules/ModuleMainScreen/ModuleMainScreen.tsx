"use client"
import {EntitySlider} from "@/entites";
import {Container, Text} from "@/shared";
import classes from "./ModuleMainScreen.module.scss"
import {Ibg} from "@/shared/UI";
import imageSrc from "public/image.jpg"
import {EntityPresentationViewer} from "./entites";

export const ModuleMainScreen = () => {

    return (
        <section className={classes.section}>
            <Container nonRetreat>
                <div className={classes.title}>
                    <Text type={"titleImmense"}>
                        Building things is our mission.
                    </Text>
                </div>
                <div className={classes.presentationViewer}>
                    <EntityPresentationViewer/>
                </div>
            </Container>
            <Ibg src={imageSrc} alt={'Image'} modClass={classes.ibg}/>
        </section>
    );
};

{/*<EntitySlider currentSlideCustom={currentSlide} setCurrentSlideCustom={setCurrentSlide}>*/
}
{/*    <div>slide 1</div>*/
}
{/*    <div>slide 2</div>*/
}
{/*    <div>slide 3</div>*/
}
{/*    <div>slide 4</div>*/
}
{/*    <div>slide 5</div>*/
}
{/*</EntitySlider>*/
}

"use client"
import {EntityContainer} from "@/entites";
import {Section, FullScreen, Text, Ibg} from "@/shared";
import classes from "./ModuleMainScreen.module.scss"
import imageSrc from "public/image.jpg"
import {EntityPresentationViewer} from "./entites";
import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";
import SwiperCore, {Controller} from 'swiper';
import { getMainSlider } from "./services";
SwiperCore.use([Controller]);
export function ModuleMainScreen () {
    const [firstSwiper, setFirstSwiper] = useState<null | any>(null);
    const [secondSwiper, setSecondSwiper] = useState<null | any>(null);
    const data = getMainSlider()
    return (
        <Section withoutTopPadding>
            <EntityContainer nonRetreat>
                <Swiper
                    loop={true}
                    onSwiper={setFirstSwiper}
                    controller={{ control: secondSwiper }}
                >
                    <SwiperSlide>
                        <FullScreen includingHeaders>
                            <div className={classes.content}>
                                <div className={classes.title}>
                                    <Text type={"titleImmense"}>
                                        Building things is our mission.
                                    </Text>
                                </div>
                            </div>
                            <Ibg src={imageSrc} alt={'Image'} modClass={classes.ibgBG}/>
                        </FullScreen>
                    </SwiperSlide>
                    <SwiperSlide>
                        <FullScreen includingHeaders>
                            <div className={classes.content}>
                                <div className={classes.title}>
                                    <Text type={"titleImmense"}>
                                        Building things is our mission.
                                    </Text>
                                </div>
                            </div>
                            <Ibg src={imageSrc} alt={'Image'} modClass={classes.ibgBG}/>
                        </FullScreen>
                    </SwiperSlide>
                </Swiper>
            </EntityContainer>
            <div className={classes.presentationViewer}>
                <EntityPresentationViewer setSecondSwiper={setSecondSwiper} firstSwiper={firstSwiper}/>
            </div>
        </Section>
    );
};

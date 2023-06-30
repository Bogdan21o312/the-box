'use client'
import {EntityContainer} from "@/entites";
import {Section, FullScreen, Text, Ibg} from "@/shared";
import classes from "./ModuleMainScreen.module.scss"
import {EntityPresentationViewer} from "./entites";
import {Swiper, SwiperSlide} from "swiper/react";
import {getMainSlider} from "@/app/(pages)/(home)/widgets/modules/ModuleMainScreen/services";
export async function ModuleMainScreen () {
    const data = await getMainSlider()

    return (
        <Section withoutTopPadding>
            <EntityContainer nonRetreat>
                <Swiper
                    loop={true}
                    // onSwiper={setFirstSwiper}
                    // controller={{ control: secondSwiper }}
                >
                    {data.data && data.data.map(slides =>
                        <SwiperSlide key={slides.id}>
                            <FullScreen includingHeaders>
                                <div className={classes.content}>
                                    <div className={classes.title}>
                                        <Text type={"titleImmense"}>
                                            {slides.attributes.Title}
                                        </Text>
                                    </div>
                                </div>
                                <Ibg src={`http://localhost:1337${slides.attributes.Image.data.attributes.url}`} alt={'Image'} modClass={classes.ibgBG}/>
                            </FullScreen>
                        </SwiperSlide>
                    )}
                </Swiper>
            </EntityContainer>
            <div className={classes.presentationViewer}>
                <EntityPresentationViewer data={data} />
            </div>
        </Section>
    );
};

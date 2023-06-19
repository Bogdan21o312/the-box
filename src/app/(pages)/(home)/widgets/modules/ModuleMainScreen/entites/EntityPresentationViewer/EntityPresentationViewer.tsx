import classes from "./EntityPresentationViewer.module.scss"
import {IconArrow, Text, Button} from "@/shared";
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperType, Navigation} from 'swiper';
import {useRef} from "react";
import {
    EntityPresentationViewerProps
} from "./EntityPresentationViewerProps";

export const EntityPresentationViewer = ({setSecondSwiper, firstSwiper}: EntityPresentationViewerProps) => {
    const swiperRef = useRef<SwiperType>();

    return (
        <div className={classes.main}>
            <Swiper
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                loop={true}
                onSwiper={setSecondSwiper} controller={{control: firstSwiper}}
            >
                <SwiperSlide>
                    <div className={classes.blockText}>
                        <div className={classes.blockTextItem}>
                            <Text type={"title"} color={'white'} center>
                                Feature Projects 01
                            </Text>
                        </div>
                        <div className={classes.blockTextItem}>
                            <Text color={'white'} center>
                                The National University of Architecture
                            </Text>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.blockText}>
                        <div className={classes.blockTextItem}>
                            <Text type={"title"} color={'white'} center>
                                Feature Projects 02
                            </Text>
                        </div>
                        <div className={classes.blockTextItem}>
                            <Text color={'white'} center>
                                The National University of Architecture
                            </Text>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className={classes.buttons}>
                <Button onClick={() => swiperRef.current?.slidePrev()} iconLeft={<IconArrow/>} oneHundredPercentWidth>
                    Back
                </Button>
                <Button onClick={() => swiperRef.current?.slideNext()} iconRight={<IconArrow/>} rotateIcon
                        oneHundredPercentWidth>
                    Next
                </Button>
            </div>
        </div>
    )
}

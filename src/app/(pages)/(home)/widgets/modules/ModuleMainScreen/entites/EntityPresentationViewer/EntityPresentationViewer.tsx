import classes from "./EntityPresentationViewer.module.scss"
import {IconArrow, Text, Button} from "@/shared";
import {Swiper, SwiperSlide} from "swiper/react";
import {
    EntityPresentationViewerProps
} from "./EntityPresentationViewerProps";

export async function EntityPresentationViewer({setSecondSwiper, firstSwiper, data}: EntityPresentationViewerProps) {
    return (
        <div className={classes.main}>
            <Swiper
                loop={true}
            >
                {data.data.map(item =>
                    <SwiperSlide key={item.id}>
                        <div className={classes.blockText}>
                            <div className={classes.blockTextItem}>
                                <Text type={"title"} color={'white'} center>
                                    {item.attributes.TitlePresantation}
                                </Text>
                            </div>
                            <div className={classes.blockTextItem}>
                                <Text color={'white'} center>
                                    {item.attributes.TextPresantation}
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
            <div className={classes.buttons}>
                <Button iconLeft={<IconArrow/>} oneHundredPercentWidth>
                    Back
                </Button>
                <Button iconRight={<IconArrow/>} rotateIcon
                        oneHundredPercentWidth>
                    Next
                </Button>
            </div>
        </div>
    )
}

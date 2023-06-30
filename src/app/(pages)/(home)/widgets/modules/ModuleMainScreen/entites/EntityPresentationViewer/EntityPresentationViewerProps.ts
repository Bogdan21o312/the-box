import {Response} from "@/app/(pages)/(home)/widgets/modules/ModuleMainScreen/services/type";

type TypeBlockText = {
    title: string
    text: string
}

export type EntityPresentationViewerProps = {
    setSecondSwiper: (swiper: null | any) => void
    firstSwiper: null
    data: Response
}

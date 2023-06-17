import {StaticImageData} from "next/image";

export interface IbgProps {
    src: string | StaticImageData
    alt: string
    modClass: string
}

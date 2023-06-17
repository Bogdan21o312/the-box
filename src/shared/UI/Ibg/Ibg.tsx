import Image from "next/image";
import classes from "./Ibg.module.scss";
import { FC } from "react";
import { IbgProps } from "./IbgProps";

export const Ibg: FC<IbgProps> = ({ src, alt, modClass }) => {

    return (
        <div className={`${classes.clIbg} ${modClass}`}>
            <Image src={src} alt={alt} />
        </div>
    );
};


import classes from "./Ibg.module.scss";
import { FC } from "react";
import {TypeIbg} from "@/shared";

export const Ibg: FC<TypeIbg> = ({ src, alt, modClass }) => {

    return (
        <div className={`${classes.clIbg} ${modClass}`}>
            <img src={src!} alt={alt!} />
        </div>
    );
};


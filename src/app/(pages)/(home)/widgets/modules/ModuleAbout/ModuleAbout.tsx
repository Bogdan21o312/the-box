'use client'
import classes from "./ModuleAbout.module.scss"
import {ABOUT_US_PAGE_URL, Button, Ibg, Section, Text} from "@/shared";
import {EntityContainer} from "@/entites";
import imageSrc from "public/image-02.jpg"
import {useRouter} from "next/navigation";
import Image from "next/image";

export const ModuleAbout = () => {

    const router = useRouter();

    const handleButtonClick = () => {
        router.push(ABOUT_US_PAGE_URL);
    };

    return (
        <Section>
            <EntityContainer>
                <div className={classes.body}>
                    <div className={classes.content}>
                        <div className={classes.title}>
                            <Text type={"titleBig"} color={"white"}>About us</Text>
                        </div>
                        <div className={classes.text}>
                            <Text color={"white"} type={'textSmall'}>
                                For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way.
                            </Text>
                        </div>
                        <div className={classes.text}>
                            <Text color={"white"} type={'textSmall'}>
                                We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.
                            </Text>
                        </div>
                        <div className={classes.button}>
                            <Button onClick={handleButtonClick}>
                                More on Our History
                            </Button>
                        </div>
                        <button></button>
                    </div>
                    <Image src={imageSrc} alt={''} className={classes.image}/>
                </div>
            </EntityContainer>
        </Section>
    );
};

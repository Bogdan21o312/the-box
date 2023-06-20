'use client'
import {ModuleMainScreen, ModuleAdvantages, ModuleAbout} from "./widgets";
import ImageUploader from "@/app/(pages)/(home)/ImageUploader";
export default function Home() {

    return (
        <>
            <ImageUploader/>
            {/*<ModuleMainScreen/>*/}
            <ModuleAdvantages/>
            <ModuleAbout/>
        </>
    )
}

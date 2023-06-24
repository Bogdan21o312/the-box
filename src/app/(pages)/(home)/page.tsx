'use client'
import {ModuleMainScreen, ModuleAdvantages, ModuleAbout} from "./widgets";
import ImageUploader from "@/app/(pages)/(home)/ImageUploader";
export default function Home() {

    return (
        <>
            <ModuleMainScreen/>
            <ModuleAdvantages/>
            <ModuleAbout/>
        </>
    )
}

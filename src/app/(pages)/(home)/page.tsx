'use client'
import { useState } from "react";
import {ModuleMainScreen, ModuleAdvantages, ModuleAbout} from "./widgets";
export default function Home() {
    const [isLoading, setLoading] = useState('')
    return (
        <>
            <ModuleMainScreen/>
            <ModuleAdvantages/>
            <ModuleAbout/>
        </>
    )
}

'use client'
import {useState, useLayoutEffect} from "react"

export const useMediaQuery = () => {
    const [matches, setMatches] = useState(false)

    useLayoutEffect(() => {
        const media = window.matchMedia('(max-width: 1200px)')
        if (media.matches !== matches) {
            setMatches(media.matches)
        }
        const listener = () => setMatches(media.matches)
        window.addEventListener("resize", listener)
        return () => window.removeEventListener("resize", listener)
    }, [matches])

    return matches
}

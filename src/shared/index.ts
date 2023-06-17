// Constants
export {
    // Page paths
    HOME_PAGE_URL, PROJECTS_PAGE_URL, SERVICES_PAGE_URL, ABOUT_US_PAGE_URL, CONTACT_US_PAGE_URL, PROJECT_PAGE_URL,

    // Regex
    regexTabletType, regexMobileType
} from "./constants"

// UI
export {
    Preloader,
    Text,
    Button,
    Ibg,
    FullScreen,
    Section
} from "./UI"

// Lib
export {
    // Hooks
    useDeviceType,

    //Helpers
    bodyLock,
    bodyUnlock,
    bodyToggleLock
} from "./lib"

// Types

export type {TypeDevice, TypeIbg} from "./types"

// Assets

export {IconArrow, IconLogo} from "./assets"

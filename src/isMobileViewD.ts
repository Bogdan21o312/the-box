import {headers} from "next/headers";

const headersList = headers();
const userAgent = headersList.get('user-agent');
export let isMobileView = userAgent!.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
);

'use client'
import {useState, useLayoutEffect} from 'react';

export const useDeviceType = () => {
    const [isMobile, setIsMobile] = useState<boolean>();
    const [isTablet, setIsTablet] = useState<boolean>();

    useLayoutEffect(() => {
        function checkDeviceType() {
            const userAgent = navigator.userAgent;
            const isMobileDevice = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(userAgent);
            const isTabletDevice = /iPad/i.test(userAgent);

            setIsMobile(isMobileDevice);
            setIsTablet(isTabletDevice);
        }

        checkDeviceType();

        window.addEventListener('resize', checkDeviceType);

        return () => {
            window.removeEventListener('resize', checkDeviceType);
        };
    }, []);

    return {isMobile, isTablet};
}

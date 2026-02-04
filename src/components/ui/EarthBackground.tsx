import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
// @ts-ignore
import GLOBE from 'vanta/dist/vanta.globe.min';

const EarthBackground: React.FC = () => {
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const myRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!vantaEffect && myRef.current) {
            setVantaEffect(
                GLOBE({
                    el: myRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0x3b82f6,
                    color2: 0x60a5fa,
                    size: 1.1, // Increased size for more presence
                    backgroundColor: 0x0,
                    showLines: true, // Ensure lines are visible
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div
            ref={myRef}
            className="fixed top-0 left-0 w-full h-full -z-20 opacity-40"
            style={{ pointerEvents: 'none' }}
        />
    );
};

export default EarthBackground;

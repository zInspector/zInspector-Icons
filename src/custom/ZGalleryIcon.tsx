import React from "react";
import type { IconProps } from "../types";
import Svg, { Path, Rect } from "react-native-svg";

export const ZGalleryIcon: React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    weight = "regular"
}) => {
    const strokeWidth =
        weight === "thin" ? 8 :
            weight === "light" ? 12 :
                weight === "bold" ? 24 :
                    16; // default regular

    return (
        <Svg width={size} height={size} viewBox="0 0 256 256" fill="none">
        <Rect x="84.1997" y="41" width="137.999" height="137.999" rx="9" stroke={color} strokeWidth={strokeWidth}/>
        <Path d="M55.5999 80.3984L42.0155 82.2342C33.1964 83.4259 27.0445 91.5848 28.3246 100.391L43.7674 206.638C45.0112 215.196 52.8292 221.216 61.4205 220.233L178.799 206.798" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
        </Svg>
    );
};



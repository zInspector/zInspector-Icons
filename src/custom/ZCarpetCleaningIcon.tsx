import React from "react";
import type { IconProps } from "../types";
import Svg, { Path, Circle, Line } from "react-native-svg";

export const ZCarpetCleaningIcon: React.FC<IconProps> = ({
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
            <Circle cx="61.2807" cy="175.843" r="41.7807" stroke={color} strokeWidth={strokeWidth}/>
            <Path d="M31.105 145.5L31.105 112.422C31.105 107.451 35.1344 103.422 40.105 103.422H121.631C145.487 103.422 192.918 124.639 194.032 209.009C194.054 210.666 192.709 212.053 191.052 212.053H82.5" stroke={color} strokeWidth={strokeWidth}/>
            <Path d="M157.842 115.491V33C157.842 31.8954 158.737 31 159.842 31H228.263C229.367 31 230.263 31.8954 230.263 33V212.053M230.263 212.053H218.193M230.263 212.053H242.333" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
        </Svg>
    );
};



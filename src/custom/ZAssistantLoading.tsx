import React from "react";
import type { IconProps } from "../types";
import Svg, { Path, Circle, Line } from "react-native-svg";

export const ZAssistantLoadingIcon: React.FC<IconProps> = ({
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
        <Svg width={size} height={size}  viewBox="0 0 256 256" fill="none">
            <Path d="M168,40.7a96,96,0,1,1-80,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" strokeWidth={strokeWidth}/>            
            <Path d="M128,80 Q128,128 176,128 Q128,128 128,176 Q128,128 80,128 Q128,128 128,80 Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" strokeWidth={strokeWidth}/>
        </Svg>
    );
};



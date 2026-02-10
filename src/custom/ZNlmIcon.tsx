import React from "react";
import type { IconProps } from "../types";
import Svg, { Path, Circle, Line } from "react-native-svg";

export const ZNlmIcon: React.FC<IconProps> = ({
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
            <Path d="M21 194L226 38" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
            <Path d="M160.5 56.5L149.25 45.25L140.828 36.8284C139.266 35.2663 136.734 35.2663 135.172 36.8284L50.1716 121.828C49.4214 122.579 49 123.596 49 124.657V147M194.5 93L224.872 124.336C225.596 125.083 226 126.081 226 127.12V218C226 220.209 224.209 222 222 222H164.5C162.291 222 160.5 220.209 160.5 218V159.5C160.5 157.291 158.709 155.5 156.5 155.5H119.5C117.291 155.5 115.5 157.291 115.5 159.5V218C115.5 220.209 113.709 222 111.5 222H53C50.7909 222 49 220.209 49 218V198.5" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
        </Svg>
    );
};



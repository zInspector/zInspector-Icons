import React from "react";
import type { IconProps } from "../types";
import Svg, { Path, Circle, Line } from "react-native-svg";

export const ZMoveOutIcon: React.FC<IconProps> = ({
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
        <Path d="M202.5 217.5H43.5C41.2909 217.5 39.5 215.709 39.5 213.5V118.657C39.5 117.596 39.9214 116.579 40.6716 115.828L123.907 32.5931C125.374 31.126 127.719 31.0242 129.308 32.3588L189 82.5M202.5 102L238.5 147C238.617 147.182 238.486 147.421 238.27 147.421M126.5 147.421H238.27M238.27 147.421L202.5 192.5" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
        </Svg>
    );
};



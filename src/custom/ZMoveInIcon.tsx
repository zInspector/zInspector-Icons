import React from "react";
import type { IconProps } from "../types";
import Svg, { Path, Circle, Line } from "react-native-svg";

export const ZMoveInIcon: React.FC<IconProps> = ({
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
        <Path d="M60.5464 217.586H219.546C221.756 217.586 223.546 215.795 223.546 213.586V118.743C223.546 117.682 223.125 116.665 222.375 115.914L139.14 32.6791C137.672 31.212 135.327 31.1102 133.738 32.4447L74.0464 82.5859M100.503 192.586L136.503 147.586C136.619 147.404 136.489 147.165 136.272 147.165M24.5028 147.165L136.272 147.165M136.272 147.165L100.503 102.086" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
    </Svg>
    );
};



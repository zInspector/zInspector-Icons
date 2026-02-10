import React from "react";
import type { IconProps } from "../types";
import Svg, { Path, Circle, Line } from "react-native-svg";

export const ZPreInspectionIcon: React.FC<IconProps> = ({
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
            <Path d="M145.33 153.706C149.722 149.48 153.015 144.006 154.591 137.654C159.048 119.697 148.105 101.527 130.148 97.0702C112.192 92.6131 94.0216 103.557 89.5646 121.513C85.1076 139.47 96.0512 157.64 114.008 162.097C125.613 164.977 137.306 161.426 145.33 153.706ZM145.33 153.706L170.881 178.327" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
            <Path d="M211.828 83.3284L156.172 27.6716C155.421 26.9214 154.404 26.5 153.343 26.5H70.5C56.1406 26.5 44.5 38.1406 44.5 52.5V223C44.5 225.209 46.2909 227 48.5 227H209C211.209 227 213 225.209 213 223V86.1569C213 85.096 212.579 84.0786 211.828 83.3284Z" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
        </Svg>
    );
};



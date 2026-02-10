import React from "react";
import type { IconProps } from "../types";
import Svg, { Path, Circle, Line } from "react-native-svg";

export const ZInspectionIcon: React.FC<IconProps> = ({
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
            <Path d="M140 52.5L128.75 41.25L120.328 32.8284C118.766 31.2663 116.234 31.2663 114.672 32.8284L29.6716 117.828C28.9214 118.579 28.5 119.596 28.5 120.657V214C28.5 216.209 30.2909 218 32.5 218H91C93.2091 218 95 216.209 95 214V155.5C95 153.291 96.7909 151.5 99 151.5H136C138.209 151.5 140 153.291 140 155.5V214C140 216.209 141.791 218 144 218H201.5C203.709 218 205.5 216.209 205.5 214V121.5" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
            <Path d="M210.271 96.7945C213.515 91.6353 215.392 85.529 215.392 78.9844C215.392 60.4828 200.394 45.4844 181.892 45.4844C163.391 45.4844 148.392 60.4828 148.392 78.9844C148.392 97.4859 163.391 112.484 181.892 112.484C193.849 112.484 204.343 106.22 210.271 96.7945ZM210.271 96.7945L241 114.536" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
        </Svg>
    );
};



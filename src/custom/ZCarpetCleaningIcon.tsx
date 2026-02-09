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

    if (weight === "fill") {
        return (
            <Svg
                width={size}
                height={size}
                viewBox="0 0 256 256"
                fill="none"
            >
                <Path
                    d="M56,216a32,32,0,1,1,32-32A32,32,0,0,1,56,216Zm120-40H91.4a38.6,38.6,0,0,0,3.6-16A40,40,0,0,0,56,120H40V104a32,32,0,0,1,32-32h80V40H112a8,8,0,0,1,0-16h80a8,8,0,0,1,8,8V216a8,8,0,0,1-16,0V176Z"
                    fill={color}
                />
            </Svg>
        );
    }

    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 256 256"
            fill="none"
        >
            <Circle
                cx="56"
                cy="184"
                r="32"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M86.3,172.9A32.1,32.1,0,0,0,56,120H40V104a32,32,0,0,1,32-32h80"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M86.3,172.9H184V216"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Line
                x1="216"
                y1="216"
                x2="232"
                y2="216"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M200,24H152V176"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M200,24H232V176"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Line
                x1="184"
                y1="216"
                x2="248"
                y2="216"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

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
        <Svg
            width={size}
            height={size}
            viewBox="0 0 256 256"
            fill="none"
        >
            <Circle
                cx="61.2807"
                cy="175.843"
                r="42.7807"
                stroke={color}
                strokeWidth={strokeWidth}
            />
            <Path
                d="M31.105 142V104.422C31.105 103.87 31.5527 103.422 32.105 103.422H121.631C145.677 103.422 193.674 124.978 194.05 211.033C194.053 211.585 193.605 212.053 193.052 212.053H89"
                stroke={color}
                strokeWidth={strokeWidth}
            />
            <Path
                d="M157.842 115.491V33C157.842 31.8954 158.737 31 159.842 31H228.263C229.367 31 230.263 31.8954 230.263 33V212.053M230.263 212.053H218.193M230.263 212.053H242.333"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
        </Svg>
    );
};

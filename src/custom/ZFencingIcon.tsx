import React from "react";
import type { IconProps } from "../types";
import Svg, { Path, Circle, Line } from "react-native-svg";

export const ZFencingIcon: React.FC<IconProps> = ({
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
            <Path d="M70.5 53.5H34.5C32.2909 53.5 30.5 55.2909 30.5 57.5V199.5C30.5 201.709 32.2909 203.5 34.5 203.5H70.5C72.7091 203.5 74.5 201.709 74.5 199.5V57.5C74.5 55.2909 72.7091 53.5 70.5 53.5Z" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
            <Path d="M146 53.5H110C107.791 53.5 106 55.2909 106 57.5V199.5C106 201.709 107.791 203.5 110 203.5H146C148.209 203.5 150 201.709 150 199.5V57.5C150 55.2909 148.209 53.5 146 53.5Z" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
            <Path d="M221 53.5H185C182.791 53.5 181 55.2909 181 57.5V199.5C181 201.709 182.791 203.5 185 203.5H221C223.209 203.5 225 201.709 225 199.5V57.5C225 55.2909 223.209 53.5 221 53.5Z" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
            <Path d="M177 97H154C151.791 97 150 98.7909 150 101V113C150 115.209 151.791 117 154 117H177C179.209 117 181 115.209 181 113V101C181 98.7909 179.209 97 177 97Z" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
            <Path d="M102 97H79C76.7909 97 75 98.7909 75 101V113C75 115.209 76.7909 117 79 117H102C104.209 117 106 115.209 106 113V101C106 98.7909 104.209 97 102 97Z" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
            <Path d="M177 150H154C151.791 150 150 151.791 150 154V166C150 168.209 151.791 170 154 170H177C179.209 170 181 168.209 181 166V154C181 151.791 179.209 150 177 150Z" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
            <Path d="M102 150H79C76.7909 150 75 151.791 75 154V166C75 168.209 76.7909 170 79 170H102C104.209 170 106 168.209 106 166V154C106 151.791 104.209 150 102 150Z" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
        </Svg>

    );
};



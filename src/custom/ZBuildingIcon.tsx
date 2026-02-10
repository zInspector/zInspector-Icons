import React from "react";
import type { IconProps } from "../types";
import Svg, { Path, Circle, Line } from "react-native-svg";

export const ZBuildingIcon: React.FC<IconProps> = ({
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
            <Path d="M108.5 129.613L88.0749 109.187L83.4882 104.601C81.9262 103.039 79.3938 103.039 77.8317 104.601L23.1717 159.255C22.4215 160.005 22 161.022 22 162.083V221.669C22 223.878 23.7909 225.669 26 225.669H61.8302C64.0394 225.669 65.8302 223.878 65.8302 221.669V185.844C65.8302 183.635 67.6211 181.844 69.8302 181.844H91.4898C93.6989 181.844 95.4898 183.635 95.4898 185.844V221.669C95.4898 223.878 97.2806 225.669 99.4898 225.669H108.5" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
            <Path d="M151.322 65.6016H164.887" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
            <Path d="M151.322 101.773H164.887" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
            <Path d="M151.322 136.141H164.887" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
            <Path d="M151.322 175.023H164.887" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
            <Path d="M192.018 65.6016H205.583" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
            <Path d="M192.018 101.773H205.583" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
            <Path d="M192.018 136.141H205.583" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
            <Path d="M192.018 175.023H205.583" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
            <Path d="M127 222.5V29C127 26.7909 128.791 25 131 25H228C230.209 25 232 26.7909 232 29V222.5C232 224.709 230.209 226.5 228 226.5H131C128.791 226.5 127 224.709 127 222.5Z" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
        </Svg>
    );
};



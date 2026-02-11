import React from "react";
import type { IconProps } from "../types";
import Svg, { Path, Circle, Line } from "react-native-svg";

export const ZMagicWandIcon: React.FC<IconProps> = ({
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
            <Path d="M94.6543 45.5518C95.8191 48.6993 98.3007 51.1809 101.448 52.3457L107.269 54.5L101.448 56.6543C98.3991 57.7827 95.9751 60.147 94.7676 63.1553L94.6543 63.4482L92.5 69.2686L90.3457 63.4482C89.1809 60.3007 86.6993 57.8191 83.5518 56.6543L77.7305 54.5L83.5518 52.3457C86.6993 51.1809 89.1809 48.6993 90.3457 45.5518L92.5 39.7305L94.6543 45.5518Z" stroke={color} strokeWidth={strokeWidth} fill={color}/>
            <Path d="M207.5 138.66C208.656 141.262 210.737 143.344 213.339 144.5C210.737 145.656 208.656 147.737 207.5 150.339C206.344 147.737 204.262 145.656 201.66 144.5C204.263 143.344 206.344 141.263 207.5 138.66Z" stroke={color} strokeWidth={strokeWidth} fill="none"/>
            <Path d="M176.5 181.66C177.656 184.262 179.737 186.344 182.339 187.5C179.737 188.656 177.656 190.737 176.5 193.339C175.344 190.737 173.262 188.656 170.66 187.5C173.263 186.344 175.344 184.263 176.5 181.66Z" stroke={color} strokeWidth={strokeWidth} fill="none"/>
            <Path d="M120.455 98.6865L179.852 39.2895C182.195 36.9464 185.994 36.9464 188.337 39.2895L215.915 66.8667C218.258 69.2098 218.258 73.0088 215.915 75.352L156.518 134.749" stroke={color} strokeWidth={strokeWidth} fill="none"/>
            <Path d="M39.1382 180.007L136.719 82.4266L172.781 118.489L75.2006 216.07C72.8574 218.413 69.0585 218.413 66.7153 216.07L39.1381 188.493C36.795 186.149 36.795 182.351 39.1382 180.007Z" stroke={color} strokeWidth={strokeWidth} fill="none"/>
        </Svg>
    );
};



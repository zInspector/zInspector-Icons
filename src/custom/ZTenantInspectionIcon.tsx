import React from "react";
import type { IconProps } from "../types";
import Svg, { Path, Circle, Line } from "react-native-svg";

export const ZTenantInspectionIcon: React.FC<IconProps> = ({
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
            <Path d="M144.208 129.159C134.719 143.898 118.166 153.659 99.3333 153.659C69.8781 153.659 46 129.781 46 100.326C46 70.8703 69.8781 46.9922 99.3333 46.9922C107.442 46.9922 115.129 48.8019 122.01 52.0395" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M14 217.664C23.4667 180.864 59.5733 153.664 99.3333 153.664C139.093 153.664 175.2 180.864 184.667 217.664" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M200.664 103.706C205.056 99.48 208.348 94.0056 209.925 87.6537C214.382 69.6971 203.438 51.5272 185.482 47.0702C167.525 42.6131 149.355 53.5568 144.898 71.5134C140.441 89.4701 151.385 107.64 169.341 112.097C180.946 114.977 192.64 111.426 200.664 103.706ZM200.664 103.706L226.214 128.327" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
        </Svg>
    );
};



import React from "react";
import type { IconProps } from "../types";
import Svg, { Path } from "react-native-svg";

export const MyCustomIcon: React.FC<IconProps> = ({
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
      {/* Ejemplo: un arbolito genérico */}
      <Path
        d="M128 24L56 152h144L128 24z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M128 152v80"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </Svg>
  );
};

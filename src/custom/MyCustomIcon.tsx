import React from "react";
import type { IconProps } from "../types";
import Svg, { Path } from "react-native-svg";

export const MyCustomIcon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth =
    weight === "thin" ? 1 :
    weight === "light" ? 1.5 :
    weight === "bold" ? 3 :
    2; // default regular

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

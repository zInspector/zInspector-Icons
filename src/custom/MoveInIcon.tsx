import React from "react";
import type { IconProps } from "../types";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";

export const MoveInIcon: React.FC<IconProps> = ({
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
        <G clipPath="url(#clip0_1_24)">
          <Path
            d="M42.34 114.34L122.34 34.34C123.083 33.5962 123.965 33.0061 124.936 32.6035C125.908 32.2009 126.949 31.9937 128 31.9937C129.051 31.9937 130.092 32.2009 131.064 32.6035C132.035 33.0061 132.917 33.5962 133.66 34.34L213.66 114.34C214.403 115.084 214.992 115.966 215.393 116.937C215.795 117.908 216.001 118.949 216 120V216H40L40 192"
            fill={color}
          />
          <Path
            d="M40 150L171 150"
            fill={color}
          />
          <Path
            d="M139 182L171 149.5L139 117"
            fill={color}
          />
        </G>
        <Defs>
          <ClipPath id="clip0_1_2">
            <Rect width="256" height="256" fill="white"/>
          </ClipPath>
        </Defs>
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
      <G clipPath="url(#clip0_1_24)">
        <Path
          d="M42.34 114.34L122.34 34.34C123.083 33.5962 123.965 33.0061 124.936 32.6035C125.908 32.2009 126.949 31.9937 128 31.9937C129.051 31.9937 130.092 32.2009 131.064 32.6035C132.035 33.0061 132.917 33.5962 133.66 34.34L213.66 114.34C214.403 115.084 214.992 115.966 215.393 116.937C215.795 117.908 216.001 118.949 216 120V216H40L40 192"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M40 150L171 150"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M139 182L171 149.5L139 117"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_24">
          <Rect width="256" height="256" fill="white"/>
        </ClipPath>
      </Defs>
    </Svg>
  );
};

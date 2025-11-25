import React from "react";
import type { IconProps } from "../types";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";

export const MoveOutIcon: React.FC<IconProps> = ({
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
        <G clipPath="url(#clip0_3_35)">
          <Path
            d="M213.66 114.34L133.66 34.34C132.917 33.5962 132.035 33.0061 131.064 32.6035C130.092 32.2009 129.051 31.9937 128 31.9937C126.949 31.9937 125.908 32.2009 124.936 32.6035C123.965 33.0061 123.083 33.5962 122.34 34.34L42.34 114.34C41.5973 115.084 41.0084 115.966 40.6069 116.937C40.2054 117.908 39.9992 118.949 40 120V216H216L216 192"
            fill={color}
          />
          <Path
            d="M67 150L198 150"
            fill={color}
          />
          <Path
            d="M166 182L198 149.5L166 117"
            fill={color}
          />
        </G>
        <Defs>
          <ClipPath id="clip0_1_12">
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
      <G clipPath="url(#clip0_3_35)">
        <Path
          d="M213.66 114.34L133.66 34.34C132.917 33.5962 132.035 33.0061 131.064 32.6035C130.092 32.2009 129.051 31.9937 128 31.9937C126.949 31.9937 125.908 32.2009 124.936 32.6035C123.965 33.0061 123.083 33.5962 122.34 34.34L42.34 114.34C41.5973 115.084 41.0084 115.966 40.6069 116.937C40.2054 117.908 39.9992 118.949 40 120V216H216L216 192"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M67 150L198 150"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M166 182L198 149.5L166 117"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3_35">
          <Rect width="256" height="256" fill="white"/>
        </ClipPath>
      </Defs>
    </Svg>
  );
};

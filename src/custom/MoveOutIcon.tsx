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
        <G clipPath="url(#clip0_1_12)">
          <Path
            d="M186 128L220 161L186 194"
            fill={color}
          />
          <Path
            d="M39 214H159V118.003C159.001 116.952 158.86 115.912 158.586 114.941C158.312 113.969 157.911 113.087 157.405 112.343L102.859 32.3462C102.353 31.6024 101.751 31.0124 101.089 30.6098C100.427 30.2072 99.7168 30 99 30C98.2832 30 97.5734 30.2072 96.9112 30.6098C96.2491 31.0124 95.6475 31.6024 95.1409 32.3462L40.5955 112.343C40.0891 113.087 39.6876 113.969 39.4138 114.941C39.14 115.912 38.9994 116.952 39 118.003V214Z"
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
      <G clipPath="url(#clip0_1_12)">
        <Path
          d="M186 128L220 161L186 194"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M39 214H159V118.003C159.001 116.952 158.86 115.912 158.586 114.941C158.312 113.969 157.911 113.087 157.405 112.343L102.859 32.3462C102.353 31.6024 101.751 31.0124 101.089 30.6098C100.427 30.2072 99.7168 30 99 30C98.2832 30 97.5734 30.2072 96.9112 30.6098C96.2491 31.0124 95.6475 31.6024 95.1409 32.3462L40.5955 112.343C40.0891 113.087 39.6876 113.969 39.4138 114.941C39.14 115.912 38.9994 116.952 39 118.003V214Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_12">
          <Rect width="256" height="256" fill="white"/>
        </ClipPath>
      </Defs>
    </Svg>
  );
};

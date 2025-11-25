import React from "react";
import * as Phosphor from "phosphor-react";
import type { IconProps } from "./types";
import { createIconComponent, IconPack as IconPackType } from "./IconFactory";

// Custom icon implementado solo para web (sin react-native-svg)
const MyCustomIconWeb: React.FC<IconProps> = ({
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
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ejemplo: un arbolito genérico */}
      <path
        d="M128 24L56 152h144L128 24z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M128 152v80"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};



// MoveIn icon for web
const MoveInIconWeb: React.FC<IconProps> = ({
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
      <svg
        width={size}
        height={size}
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_2)">
          <path
            d="M96 217H216V121.003C216.001 119.952 215.86 118.912 215.586 117.941C215.312 116.969 214.911 116.087 214.405 115.343L159.859 35.3462C159.353 34.6024 158.751 34.0124 158.089 33.6098C157.427 33.2072 156.717 33 156 33C155.283 33 154.573 33.2072 153.911 33.6098C153.249 34.0124 152.647 34.6024 152.141 35.3462L97.5955 115.343C97.0891 116.087 96.6876 116.969 96.4138 117.941C96.14 118.912 95.9994 119.952 96 121.003V217Z"
            fill={color}
          />
          <path
            d="M34 123L68 156L34 189"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2">
            <rect width="256" height="256" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_2)">
        <path
          d="M96 217H216V121.003C216.001 119.952 215.86 118.912 215.586 117.941C215.312 116.969 214.911 116.087 214.405 115.343L159.859 35.3462C159.353 34.6024 158.751 34.0124 158.089 33.6098C157.427 33.2072 156.717 33 156 33C155.283 33 154.573 33.2072 153.911 33.6098C153.249 34.0124 152.647 34.6024 152.141 35.3462L97.5955 115.343C97.0891 116.087 96.6876 116.969 96.4138 117.941C96.14 118.912 95.9994 119.952 96 121.003V217Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34 123L68 156L34 189"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_2">
          <rect width="256" height="256" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

// MoveOut icon for web
const MoveOutIconWeb: React.FC<IconProps> = ({
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
      <svg
        width={size}
        height={size}
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_12)">
          <path
            d="M186 128L220 161L186 194"
            fill={color}
          />
          <path
            d="M39 214H159V118.003C159.001 116.952 158.86 115.912 158.586 114.941C158.312 113.969 157.911 113.087 157.405 112.343L102.859 32.3462C102.353 31.6024 101.751 31.0124 101.089 30.6098C100.427 30.2072 99.7168 30 99 30C98.2832 30 97.5734 30.2072 96.9112 30.6098C96.2491 31.0124 95.6475 31.6024 95.1409 32.3462L40.5955 112.343C40.0891 113.087 39.6876 113.969 39.4138 114.941C39.14 115.912 38.9994 116.952 39 118.003V214Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_1_12">
            <rect width="256" height="256" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_12)">
        <path
          d="M186 128L220 161L186 194"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M39 214H159V118.003C159.001 116.952 158.86 115.912 158.586 114.941C158.312 113.969 157.911 113.087 157.405 112.343L102.859 32.3462C102.353 31.6024 101.751 31.0124 101.089 30.6098C100.427 30.2072 99.7168 30 99 30C98.2832 30 97.5734 30.2072 96.9112 30.6098C96.2491 31.0124 95.6475 31.6024 95.1409 32.3462L40.5955 112.343C40.0891 113.087 39.6876 113.969 39.4138 114.941C39.14 115.912 38.9994 116.952 39 118.003V214Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_12">
          <rect width="256" height="256" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

const customIcons: Record<string, React.ComponentType<IconProps>> = {
  MyCustomIcon: MyCustomIconWeb,
  MoveInIcon: MoveInIconWeb,
  MoveOutIcon: MoveOutIconWeb
};

// Filtrar solo los componentes de iconos, excluyendo IconContext
const { IconContext, ...phosphorIcons } = Phosphor;

const iconPack: IconPackType = {
  ...phosphorIcons,
  ...customIcons
};

export const Icon = createIconComponent(iconPack);
export type { IconProps } from "./types";
export { iconPack }; // por si querés inspeccionar o listar iconos

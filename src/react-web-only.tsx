import React from "react";
import * as Phosphor from "phosphor-react";
import type { IconProps } from "./types";
import { createIconComponent, IconPack as IconPackType } from "./IconFactory";


// ZCarpetCleaningIcon icon for web
const ZCarpetCleaningIconWeb: React.FC<IconProps> = ({
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
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none">
      <circle cx="61.2807" cy="175.843" r="41.7807" stroke={color} strokeWidth={strokeWidth}/>
      <path d="M31.105 145.5L31.105 112.422C31.105 107.451 35.1344 103.422 40.105 103.422H121.631C145.487 103.422 192.918 124.639 194.032 209.009C194.054 210.666 192.709 212.053 191.052 212.053H82.5" stroke={color} strokeWidth={strokeWidth}/>
      <path d="M157.842 115.491V33C157.842 31.8954 158.737 31 159.842 31H228.263C229.367 31 230.263 31.8954 230.263 33V212.053M230.263 212.053H218.193M230.263 212.053H242.333" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
    </svg>
  );

};
// ZMoveOutIcon icon for web
const ZMoveOutIconWeb: React.FC<IconProps> = ({
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
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none">
      <path d="M202.5 217.5H43.5C41.2909 217.5 39.5 215.709 39.5 213.5V118.657C39.5 117.596 39.9214 116.579 40.6716 115.828L123.907 32.5931C125.374 31.126 127.719 31.0242 129.308 32.3588L189 82.5M202.5 102L238.5 147C238.617 147.182 238.486 147.421 238.27 147.421M126.5 147.421H238.27M238.27 147.421L202.5 192.5" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
    </svg>
  );

};

// ZMoveInIcon icon for web
const ZMoveInIconWeb: React.FC<IconProps> = ({
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
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none">
        <path d="M60.5464 217.586H219.546C221.756 217.586 223.546 215.795 223.546 213.586V118.743C223.546 117.682 223.125 116.665 222.375 115.914L139.14 32.6791C137.672 31.212 135.327 31.1102 133.738 32.4447L74.0464 82.5859M100.503 192.586L136.503 147.586C136.619 147.404 136.489 147.165 136.272 147.165M24.5028 147.165L136.272 147.165M136.272 147.165L100.503 102.086" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
    </svg>
  );

};

// ZGalleryIcon icon for web
const ZGalleryIconWeb: React.FC<IconProps> = ({
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
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none">
      <rect x="84.1997" y="41" width="137.999" height="137.999" rx="9" stroke={color} strokeWidth={strokeWidth}/>
      <path d="M55.5999 80.3984L42.0155 82.2342C33.1964 83.4259 27.0445 91.5848 28.3246 100.391L43.7674 206.638C45.0112 215.196 52.8292 221.216 61.4205 220.233L178.799 206.798" stroke={color} strokeWidth={strokeWidth} stroke-linecap="round"/>
    </svg>
  );

};

const customIcons: Record<string, React.ComponentType<IconProps>> = {
  ZCarpetCleaningIcon: ZCarpetCleaningIconWeb,
  ZMoveOutIcon: ZMoveOutIconWeb,
  ZMoveInIcon: ZMoveInIconWeb,
  ZGalleryIcon: ZGalleryIconWeb
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

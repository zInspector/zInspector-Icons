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
      />
      <path
        d="M128 152v80"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

const customIcons: Record<string, React.ComponentType<IconProps>> = {
  MyCustomIcon: MyCustomIconWeb
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

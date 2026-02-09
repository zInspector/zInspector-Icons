import React from "react";
import * as Phosphor from "phosphor-react";
import type { IconProps } from "./types";
import { createIconComponent, IconPack as IconPackType } from "./IconFactory";

// Importa todos tus custom icons (podés hacer un index en ./custom si preferís)
import { MyCustomIcon } from "./custom/MyCustomIcon";
import { MoveInIcon } from "./custom/MoveInIcon";
import { MoveOutIcon } from "./custom/MoveOutIcon";
import { ZCarpetCleaningIcon } from "./custom/ZCarpetCleaningIcon";

const customIcons: Record<string, React.ComponentType<IconProps>> = {
  MyCustomIcon,
  MoveInIcon,
  MoveOutIcon,
  ZCarpetCleaningIcon
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

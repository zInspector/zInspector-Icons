import React from "react";
import * as Phosphor from "@phosphor-icons/react";
import type { IconProps } from "./types";
import { createIconComponent, IconPack as IconPackType } from "./IconFactory";
import { customIcons } from "./custom-web";


// Filtrar solo los componentes de iconos, excluyendo IconContext
const { IconContext, ...phosphorIcons } = Phosphor;

const iconPack = {
  ...phosphorIcons,
  ...customIcons
} as unknown as IconPackType;

export const Icon = createIconComponent(iconPack);
export type { IconProps } from "./types";
export { iconPack }; // por si querés inspeccionar o listar iconos

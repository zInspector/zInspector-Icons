import React from "react";
import * as PhosphorNative from "phosphor-react-native";
import type { IconProps } from "./types";
import { createIconComponent, IconPack as IconPackType } from "./IconFactory";

import { MyCustomIcon } from "./custom/MyCustomIcon";
import { MoveInIcon } from "./custom/MoveInIcon";
import { MoveOutIcon } from "./custom/MoveOutIcon";

const customIcons: Record<string, React.ComponentType<IconProps>> = {
  MyCustomIcon,
  MoveInIcon,
  MoveOutIcon
};

// Filtrar solo los componentes de iconos, excluyendo IconContext
const { IconContext, ...phosphorNativeIcons } = PhosphorNative;

const iconPack: IconPackType = {
  ...phosphorNativeIcons,
  ...customIcons
};

export const Icon = createIconComponent(iconPack);
export type { IconProps } from "./types";
export { iconPack };

import React from "react";
import * as PhosphorNative from "phosphor-react-native";
import type { IconProps } from "./types";
import { createIconComponent, IconPack as IconPackType } from "./IconFactory";

import { MyCustomIcon } from "./custom/MyCustomIcon";

const customIcons: Record<string, React.ComponentType<IconProps>> = {
  MyCustomIcon
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

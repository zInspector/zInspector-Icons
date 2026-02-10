import React from "react";
import * as PhosphorNative from "phosphor-react-native";
import type { IconProps } from "./types";
import { createIconComponent, IconPack as IconPackType } from "./IconFactory";


import { ZCarpetCleaningIcon } from "./custom/ZCarpetCleaningIcon";
import { ZMoveOutIcon } from "./custom/ZMoveOutIcon";
import { ZMoveInIcon } from "./custom/ZMoveInIcon";
import { ZGalleryIcon } from "./custom/ZGalleryIcon";

const customIcons: Record<string, React.ComponentType<IconProps>> = {
  ZCarpetCleaningIcon,
  ZMoveOutIcon,
  ZMoveInIcon,
  ZGalleryIcon
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

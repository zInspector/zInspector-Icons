import React from "react";
import * as PhosphorNative from "phosphor-react-native";
import type { IconProps } from "./types";
import { createIconComponent, IconPack as IconPackType } from "./IconFactory";


import { ZCarpetCleaningIcon } from "./custom/ZCarpetCleaningIcon";
import { ZMoveOutIcon } from "./custom/ZMoveOutIcon";
import { ZMoveInIcon } from "./custom/ZMoveInIcon";
import { ZGalleryIcon } from "./custom/ZGalleryIcon";
import { ZBuildingIcon } from "./custom/ZBuildingIcon";
import { ZInspectionIcon } from "./custom/ZInspectionIcon";
import { ZNlmIcon } from "./custom/ZNlmIcon";
import { ZTenantInspectionIcon } from "./custom/ZTenantInspectionIcon";
import { ZPreInspectionIcon } from "./custom/ZPreInspectionIcon";
import { ZFencingIcon } from "./custom/ZFencingIcon";
import { ZMagicWandIcon } from "./custom/ZMagicWandIcon";


const customIcons: Record<string, React.ComponentType<IconProps>> = {
  ZCarpetCleaningIcon,
  ZMoveOutIcon,
  ZMoveInIcon,
  ZGalleryIcon,
  ZBuildingIcon,
  ZInspectionIcon,
  ZNlmIcon,
  ZTenantInspectionIcon,
  ZPreInspectionIcon,
  ZFencingIcon,
  ZMagicWandIcon
};

// Filtrar solo los componentes de iconos, excluyendo IconContext
const { IconContext, ...phosphorNativeIcons } = PhosphorNative;

const iconPack = {
  ...phosphorNativeIcons,
  ...customIcons
} as unknown as IconPackType;

export const Icon = createIconComponent(iconPack);
export type { IconProps } from "./types";
export { iconPack };

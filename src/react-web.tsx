import React from "react";
import * as Phosphor from "phosphor-react";
import type { IconProps } from "./types";
import { createIconComponent, IconPack as IconPackType } from "./IconFactory";

// Importa todos tus custom icons (podés hacer un index en ./custom si preferís)
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
  ZFencingIcon,
  ZTenantInspectionIcon,
  ZPreInspectionIcon,
  ZMagicWandIcon
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

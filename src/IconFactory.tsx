import React from "react";
import type { IconProps } from "./types";

export type IconComponent = React.ComponentType<IconProps>;

export type IconPack = Record<string, IconComponent>;

export interface IconWrapperProps extends IconProps {
  /** Unique icon name (e.g. "House", "MyCustomIcon") */
  name: string;
}

export function createIconComponent(iconPack: IconPack) {
  const Icon: React.FC<IconWrapperProps> = ({
    name,
    size = 24,
    color = "#000",
    weight = "regular"
  }) => {
    const Comp = iconPack[name];

    if (!Comp) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`[@zinspector/icons] Icon "${name}" not found in IconPack`);
      }
      return null;
    }

    return <Comp size={size} color={color} weight={weight} />;
  };

  return Icon;
}

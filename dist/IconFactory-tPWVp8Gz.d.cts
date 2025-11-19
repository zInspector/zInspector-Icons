import React from 'react';

type IconWeight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
interface IconProps {
    size?: number;
    color?: string;
    weight?: IconWeight;
}

type IconComponent = React.ComponentType<IconProps>;
type IconPack = Record<string, IconComponent>;
interface IconWrapperProps extends IconProps {
    /** Unique icon name (e.g. "House", "MyCustomIcon") */
    name: string;
}

export type { IconPack as I, IconWrapperProps as a, IconProps as b };

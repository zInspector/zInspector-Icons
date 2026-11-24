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
declare function createIconComponent(iconPack: IconPack): React.FC<IconWrapperProps>;

export { type IconPack as I, type IconWrapperProps as a, type IconProps as b, createIconComponent as c, type IconComponent as d, type IconWeight as e };

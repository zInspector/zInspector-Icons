export type IconWeight =
  | "thin"
  | "light"
  | "regular"
  | "bold"
  | "fill"
  | "duotone";

export interface IconProps {
  size?: number;
  color?: string;
  weight?: IconWeight;
}

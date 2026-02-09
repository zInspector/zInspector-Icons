import React from "react";
import * as Phosphor from "phosphor-react";
import type { IconProps } from "./types";
import { createIconComponent, IconPack as IconPackType } from "./IconFactory";

// Custom icon implementado solo para web (sin react-native-svg)
const MyCustomIconWeb: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth =
    weight === "thin" ? 8 :
      weight === "light" ? 12 :
        weight === "bold" ? 24 :
          16; // default regular

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ejemplo: un arbolito genérico */}
      <path
        d="M128 24L56 152h144L128 24z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M128 152v80"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};



// MoveIn icon for web
const MoveInIconWeb: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth =
    weight === "thin" ? 8 :
      weight === "light" ? 12 :
        weight === "bold" ? 24 :
          16; // default regular

  if (weight === "fill") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_24)">
          <path
            d="M42.34 114.34L122.34 34.34C123.083 33.5962 123.965 33.0061 124.936 32.6035C125.908 32.2009 126.949 31.9937 128 31.9937C129.051 31.9937 130.092 32.2009 131.064 32.6035C132.035 33.0061 132.917 33.5962 133.66 34.34L213.66 114.34C214.403 115.084 214.992 115.966 215.393 116.937C215.795 117.908 216.001 118.949 216 120V216H40L40 192"
            fill={color}
          />
          <path
            d="M40 150L171 150"
            fill={color}
          />
          <path
            d="M139 182L171 149.5L139 117"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_1_24">
            <rect width="256" height="256" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_24)">
        <path
          d="M42.34 114.34L122.34 34.34C123.083 33.5962 123.965 33.0061 124.936 32.6035C125.908 32.2009 126.949 31.9937 128 31.9937C129.051 31.9937 130.092 32.2009 131.064 32.6035C132.035 33.0061 132.917 33.5962 133.66 34.34L213.66 114.34C214.403 115.084 214.992 115.966 215.393 116.937C215.795 117.908 216.001 118.949 216 120V216H40L40 192"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 150L171 150"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M139 182L171 149.5L139 117"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_2">
          <rect width="256" height="256" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

// MoveOut icon for web
const MoveOutIconWeb: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth =
    weight === "thin" ? 8 :
      weight === "light" ? 12 :
        weight === "bold" ? 24 :
          16; // default regular

  if (weight === "fill") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3_35)">
          <path
            d="M213.66 114.34L133.66 34.34C132.917 33.5962 132.035 33.0061 131.064 32.6035C130.092 32.2009 129.051 31.9937 128 31.9937C126.949 31.9937 125.908 32.2009 124.936 32.6035C123.965 33.0061 123.083 33.5962 122.34 34.34L42.34 114.34C41.5973 115.084 41.0084 115.966 40.6069 116.937C40.2054 117.908 39.9992 118.949 40 120V216H216L216 192"
            fill={color}
          />
          <path
            d="M67 150L198 150"
            fill={color}
          />
          <path
            d="M166 182L198 149.5L166 117"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_3_35">
            <rect width="256" height="256" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3_35)">
        <path
          d="M213.66 114.34L133.66 34.34C132.917 33.5962 132.035 33.0061 131.064 32.6035C130.092 32.2009 129.051 31.9937 128 31.9937C126.949 31.9937 125.908 32.2009 124.936 32.6035C123.965 33.0061 123.083 33.5962 122.34 34.34L42.34 114.34C41.5973 115.084 41.0084 115.966 40.6069 116.937C40.2054 117.908 39.9992 118.949 40 120V216H216L216 192"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M67 150L198 150"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M166 182L198 149.5L166 117"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_12">
          <rect width="256" height="256" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
// ZCarpetCleaningIcon icon for web
const ZCarpetCleaningIconWeb: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth =
    weight === "thin" ? 8 :
      weight === "light" ? 12 :
        weight === "bold" ? 24 :
          16; // default regular

  if (weight === "fill") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M56,216a32,32,0,1,1,32-32A32,32,0,0,1,56,216Zm120-40H91.4a38.6,38.6,0,0,0,3.6-16A40,40,0,0,0,56,120H40V104a32,32,0,0,1,32-32h80V40H112a8,8,0,0,1,0-16h80a8,8,0,0,1,8,8V216a8,8,0,0,1-16,0V176Z"
          fill={color}
        />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="56"
        cy="184"
        r="32"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M86.3,172.9A32.1,32.1,0,0,0,56,120H40V104a32,32,0,0,1,32-32h80"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M86.3,172.9H184V216"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="216"
        y1="216"
        x2="232"
        y2="216"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M200,24H152V176"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M200,24H232V176"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="184"
        y1="216"
        x2="248"
        y2="216"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const customIcons: Record<string, React.ComponentType<IconProps>> = {
  MyCustomIcon: MyCustomIconWeb,
  MoveInIcon: MoveInIconWeb,
  MoveOutIcon: MoveOutIconWeb,
  ZCarpetCleaningIcon: ZCarpetCleaningIconWeb
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

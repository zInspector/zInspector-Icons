// src/svg-generator.ts
import * as Phosphor from "phosphor-react";

// src/custom/MyCustomIcon.tsx
import Svg, { Path } from "react-native-svg";
import { jsx, jsxs } from "react/jsx-runtime";
var MyCustomIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  return /* @__PURE__ */ jsxs(
    Svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 256 256",
      fill: "none",
      children: [
        /* @__PURE__ */ jsx(
          Path,
          {
            d: "M128 24L56 152h144L128 24z",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          Path,
          {
            d: "M128 152v80",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
};

// src/custom/ZCarpetCleaningIcon.tsx
import Svg2, { Path as Path2, Circle, Line } from "react-native-svg";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ZCarpetCleaningIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  if (weight === "fill") {
    return /* @__PURE__ */ jsx2(
      Svg2,
      {
        width: size,
        height: size,
        viewBox: "0 0 256 256",
        fill: "none",
        children: /* @__PURE__ */ jsx2(
          Path2,
          {
            d: "M56,216a32,32,0,1,1,32-32A32,32,0,0,1,56,216Zm120-40H91.4a38.6,38.6,0,0,0,3.6-16A40,40,0,0,0,56,120H40V104a32,32,0,0,1,32-32h80V40H112a8,8,0,0,1,0-16h80a8,8,0,0,1,8,8V216a8,8,0,0,1-16,0V176Z",
            fill: color
          }
        )
      }
    );
  }
  return /* @__PURE__ */ jsxs2(
    Svg2,
    {
      width: size,
      height: size,
      viewBox: "0 0 256 256",
      fill: "none",
      children: [
        /* @__PURE__ */ jsx2(
          Circle,
          {
            cx: "56",
            cy: "184",
            r: "32",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx2(
          Path2,
          {
            d: "M86.3,172.9A32.1,32.1,0,0,0,56,120H40V104a32,32,0,0,1,32-32h80",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx2(
          Path2,
          {
            d: "M86.3,172.9H184V216",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx2(
          Line,
          {
            x1: "216",
            y1: "216",
            x2: "232",
            y2: "216",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx2(
          Path2,
          {
            d: "M200,24H152V176",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx2(
          Path2,
          {
            d: "M200,24H232V176",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx2(
          Line,
          {
            x1: "184",
            y1: "216",
            x2: "248",
            y2: "216",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
};

// src/svg-generator.ts
import { renderToStaticMarkup } from "react-dom/server";
import React from "react";
var { IconContext, ...phosphorIcons } = Phosphor;
var customIcons = {
  MyCustomIcon,
  ZCarpetCleaningIcon
};
var allIcons = {
  ...phosphorIcons,
  ...customIcons
};
function componentToSvg(Component, name) {
  try {
    if (name === "MyCustomIcon") {
      return `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M128 24L56 152h144L128 24z" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M128 152v80" stroke="currentColor" stroke-width="16" stroke-linecap="round"/>
      </svg>`;
    }
    if (name === "ZCarpetCleaningIcon") {
      return `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="56" cy="184" r="32" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M86.3,172.9A32.1,32.1,0,0,0,56,120H40V104a32,32,0,0,1,32-32h80" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M86.3,172.9H184V216" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="216" y1="216" x2="232" y2="216" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M200,24H152V176" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M200,24H232V176" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="184" y1="216" x2="248" y2="216" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
    }
    const element = React.createElement(Component, {
      size: 24,
      color: "currentColor",
      weight: "regular"
    });
    return renderToStaticMarkup(element);
  } catch (error) {
    console.warn(`Error converting ${name} to SVG:`, error);
    return null;
  }
}
function generateAllSvgs() {
  const svgs = {};
  Object.entries(allIcons).forEach(([name, Component]) => {
    const svg = componentToSvg(Component, name);
    if (svg) {
      svgs[name] = svg;
    }
  });
  return svgs;
}
function generateSvgFileContent() {
  const svgs = generateAllSvgs();
  const svgEntries = Object.entries(svgs).map(([name, svg]) => `  ${name}: \`${svg}\``).join(",\n");
  return `/**
 * Archivo generado autom\xE1ticamente - NO EDITAR MANUALMENTE
 * Generado desde componentes React el ${(/* @__PURE__ */ new Date()).toISOString()}
 */

const RAW_SVGS: Record<string, string> = {
${svgEntries}
};

/**
 * Devuelve el SVG como string seg\xFAn el nombre \xFAnico.
 * Ej: getIconSvg("House") \u2192 "<svg ...>..."
 */
export function getIconSvg(name: string): string | null {
  return RAW_SVGS[name] ?? null;
}

/**
 * Devuelve todos los nombres disponibles (\xFAtil para debug o pickers simples en JS).
 */
export function listIconNames(): string[] {
  return Object.keys(RAW_SVGS);
}

/**
 * Devuelve el n\xFAmero total de iconos disponibles
 */
export function getIconCount(): number {
  return Object.keys(RAW_SVGS).length;
}
`;
}
export {
  generateAllSvgs,
  generateSvgFileContent
};
//# sourceMappingURL=svg-generator.js.map
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
  const strokeWidth = weight === "thin" ? 1 : weight === "light" ? 1.5 : weight === "bold" ? 3 : 2;
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

// src/svg-generator.ts
import { renderToStaticMarkup } from "react-dom/server";
import React from "react";
var { IconContext, ...phosphorIcons } = Phosphor;
var customIcons = {
  MyCustomIcon
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
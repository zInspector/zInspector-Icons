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
import Svg2, { Path as Path2, Circle } from "react-native-svg";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ZCarpetCleaningIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
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
            cx: "61.2807",
            cy: "175.843",
            r: "42.7807",
            stroke: color,
            strokeWidth
          }
        ),
        /* @__PURE__ */ jsx2(
          Path2,
          {
            d: "M31.105 142V104.422C31.105 103.87 31.5527 103.422 32.105 103.422H121.631C145.677 103.422 193.674 124.978 194.05 211.033C194.053 211.585 193.605 212.053 193.052 212.053H89",
            stroke: color,
            strokeWidth
          }
        ),
        /* @__PURE__ */ jsx2(
          Path2,
          {
            d: "M157.842 115.491V33C157.842 31.8954 158.737 31 159.842 31H228.263C229.367 31 230.263 31.8954 230.263 33V212.053M230.263 212.053H218.193M230.263 212.053H242.333",
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
      return `<svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="61.2807" cy="175.843" r="42.7807" stroke="#212121" stroke-width="11"/>
<path d="M31.105 142V104.422C31.105 103.87 31.5527 103.422 32.105 103.422H121.631C145.677 103.422 193.674 124.978 194.05 211.033C194.053 211.585 193.605 212.053 193.052 212.053H89" stroke="#212121" stroke-width="11"/>
<path d="M157.842 115.491V33C157.842 31.8954 158.737 31 159.842 31H228.263C229.367 31 230.263 31.8954 230.263 33V212.053M230.263 212.053H218.193M230.263 212.053H242.333" stroke="#212121" stroke-width="11" stroke-linecap="round"/>
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
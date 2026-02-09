"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/svg-generator.ts
var svg_generator_exports = {};
__export(svg_generator_exports, {
  generateAllSvgs: () => generateAllSvgs,
  generateSvgFileContent: () => generateSvgFileContent
});
module.exports = __toCommonJS(svg_generator_exports);
var Phosphor = __toESM(require("phosphor-react"), 1);

// src/custom/MyCustomIcon.tsx
var import_react_native_svg = __toESM(require("react-native-svg"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var MyCustomIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_react_native_svg.default,
    {
      width: size,
      height: size,
      viewBox: "0 0 256 256",
      fill: "none",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_react_native_svg.Path,
          {
            d: "M128 24L56 152h144L128 24z",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_react_native_svg.Path,
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
var import_react_native_svg2 = __toESM(require("react-native-svg"), 1);
var import_jsx_runtime2 = require("react/jsx-runtime");
var ZCarpetCleaningIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  if (weight === "fill") {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react_native_svg2.default,
      {
        width: size,
        height: size,
        viewBox: "0 0 256 256",
        fill: "none",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react_native_svg2.Path,
          {
            d: "M56,216a32,32,0,1,1,32-32A32,32,0,0,1,56,216Zm120-40H91.4a38.6,38.6,0,0,0,3.6-16A40,40,0,0,0,56,120H40V104a32,32,0,0,1,32-32h80V40H112a8,8,0,0,1,0-16h80a8,8,0,0,1,8,8V216a8,8,0,0,1-16,0V176Z",
            fill: color
          }
        )
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    import_react_native_svg2.default,
    {
      width: size,
      height: size,
      viewBox: "0 0 256 256",
      fill: "none",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react_native_svg2.Circle,
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
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react_native_svg2.Path,
          {
            d: "M86.3,172.9A32.1,32.1,0,0,0,56,120H40V104a32,32,0,0,1,32-32h80",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react_native_svg2.Path,
          {
            d: "M86.3,172.9H184V216",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react_native_svg2.Line,
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
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react_native_svg2.Path,
          {
            d: "M200,24H152V176",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react_native_svg2.Path,
          {
            d: "M200,24H232V176",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react_native_svg2.Line,
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
var import_server = require("react-dom/server");
var import_react = __toESM(require("react"), 1);
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
    const element = import_react.default.createElement(Component, {
      size: 24,
      color: "currentColor",
      weight: "regular"
    });
    return (0, import_server.renderToStaticMarkup)(element);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateAllSvgs,
  generateSvgFileContent
});
//# sourceMappingURL=svg-generator.cjs.map
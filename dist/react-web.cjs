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

// src/react-web.tsx
var react_web_exports = {};
__export(react_web_exports, {
  Icon: () => Icon,
  iconPack: () => iconPack
});
module.exports = __toCommonJS(react_web_exports);
var Phosphor = __toESM(require("phosphor-react"), 1);

// src/IconFactory.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function createIconComponent(iconPack2) {
  const Icon2 = ({
    name,
    size = 24,
    color = "#000",
    weight = "regular"
  }) => {
    const Comp = iconPack2[name];
    if (!Comp) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`[@zinspector/icons] Icon "${name}" not found in IconPack`);
      }
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, { size, color, weight });
  };
  return Icon2;
}

// src/custom/ZCarpetCleaningIcon.tsx
var import_react_native_svg = __toESM(require("react-native-svg"), 1);
var import_jsx_runtime2 = require("react/jsx-runtime");
var ZCarpetCleaningIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react_native_svg.default, { width: size, height: size, viewBox: "0 0 256 256", fill: "none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_native_svg.Circle, { cx: "61.2807", cy: "175.843", r: "41.7807", stroke: color, strokeWidth }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_native_svg.Path, { d: "M31.105 145.5L31.105 112.422C31.105 107.451 35.1344 103.422 40.105 103.422H121.631C145.487 103.422 192.918 124.639 194.032 209.009C194.054 210.666 192.709 212.053 191.052 212.053H82.5", stroke: color, strokeWidth }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_native_svg.Path, { d: "M157.842 115.491V33C157.842 31.8954 158.737 31 159.842 31H228.263C229.367 31 230.263 31.8954 230.263 33V212.053M230.263 212.053H218.193M230.263 212.053H242.333", stroke: color, strokeWidth, "stroke-linecap": "round" })
  ] });
};

// src/custom/ZMoveOutIcon.tsx
var import_react_native_svg2 = __toESM(require("react-native-svg"), 1);
var import_jsx_runtime3 = require("react/jsx-runtime");
var ZMoveOutIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native_svg2.default, { width: size, height: size, viewBox: "0 0 256 256", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native_svg2.Path, { d: "M202.5 217.5H43.5C41.2909 217.5 39.5 215.709 39.5 213.5V118.657C39.5 117.596 39.9214 116.579 40.6716 115.828L123.907 32.5931C125.374 31.126 127.719 31.0242 129.308 32.3588L189 82.5M202.5 102L238.5 147C238.617 147.182 238.486 147.421 238.27 147.421M126.5 147.421H238.27M238.27 147.421L202.5 192.5", stroke: color, strokeWidth, "stroke-linecap": "round" }) });
};

// src/custom/ZMoveInIcon.tsx
var import_react_native_svg3 = __toESM(require("react-native-svg"), 1);
var import_jsx_runtime4 = require("react/jsx-runtime");
var ZMoveInIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_native_svg3.default, { width: size, height: size, viewBox: "0 0 256 256", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_native_svg3.Path, { d: "M60.5464 217.586H219.546C221.756 217.586 223.546 215.795 223.546 213.586V118.743C223.546 117.682 223.125 116.665 222.375 115.914L139.14 32.6791C137.672 31.212 135.327 31.1102 133.738 32.4447L74.0464 82.5859M100.503 192.586L136.503 147.586C136.619 147.404 136.489 147.165 136.272 147.165M24.5028 147.165L136.272 147.165M136.272 147.165L100.503 102.086", stroke: color, strokeWidth, "stroke-linecap": "round" }) });
};

// src/custom/ZGalleryIcon.tsx
var import_react_native_svg4 = __toESM(require("react-native-svg"), 1);
var import_jsx_runtime5 = require("react/jsx-runtime");
var ZGalleryIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react_native_svg4.default, { width: size, height: size, viewBox: "0 0 256 256", fill: "none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_native_svg4.Rect, { x: "84.1997", y: "41", width: "137.999", height: "137.999", rx: "9", stroke: color, strokeWidth }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_native_svg4.Path, { d: "M55.5999 80.3984L42.0155 82.2342C33.1964 83.4259 27.0445 91.5848 28.3246 100.391L43.7674 206.638C45.0112 215.196 52.8292 221.216 61.4205 220.233L178.799 206.798", stroke: color, strokeWidth, "stroke-linecap": "round" })
  ] });
};

// src/react-web.tsx
var customIcons = {
  ZCarpetCleaningIcon,
  ZMoveOutIcon,
  ZMoveInIcon,
  ZGalleryIcon
};
var { IconContext, ...phosphorIcons } = Phosphor;
var iconPack = {
  ...phosphorIcons,
  ...customIcons
};
var Icon = createIconComponent(iconPack);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Icon,
  iconPack
});
//# sourceMappingURL=react-web.cjs.map
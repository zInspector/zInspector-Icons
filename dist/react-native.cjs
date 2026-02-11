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

// src/react-native.tsx
var react_native_exports = {};
__export(react_native_exports, {
  Icon: () => Icon,
  iconPack: () => iconPack
});
module.exports = __toCommonJS(react_native_exports);
var PhosphorNative = __toESM(require("phosphor-react-native"), 1);

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

// src/custom/ZBuildingIcon.tsx
var import_react_native_svg5 = __toESM(require("react-native-svg"), 1);
var import_jsx_runtime6 = require("react/jsx-runtime");
var ZBuildingIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_native_svg5.default, { width: size, height: size, viewBox: "0 0 256 256", fill: "none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_native_svg5.Path, { d: "M108.5 129.613L88.0749 109.187L83.4882 104.601C81.9262 103.039 79.3938 103.039 77.8317 104.601L23.1717 159.255C22.4215 160.005 22 161.022 22 162.083V221.669C22 223.878 23.7909 225.669 26 225.669H61.8302C64.0394 225.669 65.8302 223.878 65.8302 221.669V185.844C65.8302 183.635 67.6211 181.844 69.8302 181.844H91.4898C93.6989 181.844 95.4898 183.635 95.4898 185.844V221.669C95.4898 223.878 97.2806 225.669 99.4898 225.669H108.5", stroke: color, strokeWidth, "stroke-linecap": "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_native_svg5.Path, { d: "M151.322 65.6016H164.887", stroke: color, strokeWidth, "stroke-linecap": "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_native_svg5.Path, { d: "M151.322 101.773H164.887", stroke: color, strokeWidth, "stroke-linecap": "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_native_svg5.Path, { d: "M151.322 136.141H164.887", stroke: color, strokeWidth, "stroke-linecap": "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_native_svg5.Path, { d: "M151.322 175.023H164.887", stroke: color, strokeWidth, "stroke-linecap": "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_native_svg5.Path, { d: "M192.018 65.6016H205.583", stroke: color, strokeWidth, "stroke-linecap": "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_native_svg5.Path, { d: "M192.018 101.773H205.583", stroke: color, strokeWidth, "stroke-linecap": "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_native_svg5.Path, { d: "M192.018 136.141H205.583", stroke: color, strokeWidth, "stroke-linecap": "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_native_svg5.Path, { d: "M192.018 175.023H205.583", stroke: color, strokeWidth, "stroke-linecap": "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_native_svg5.Path, { d: "M127 222.5V29C127 26.7909 128.791 25 131 25H228C230.209 25 232 26.7909 232 29V222.5C232 224.709 230.209 226.5 228 226.5H131C128.791 226.5 127 224.709 127 222.5Z", stroke: color, strokeWidth, "stroke-linecap": "round" })
  ] });
};

// src/custom/ZInspectionIcon.tsx
var import_react_native_svg6 = __toESM(require("react-native-svg"), 1);
var import_jsx_runtime7 = require("react/jsx-runtime");
var ZInspectionIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_native_svg6.default, { width: size, height: size, viewBox: "0 0 256 256", fill: "none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_native_svg6.Path, { d: "M140 52.5L128.75 41.25L120.328 32.8284C118.766 31.2663 116.234 31.2663 114.672 32.8284L29.6716 117.828C28.9214 118.579 28.5 119.596 28.5 120.657V214C28.5 216.209 30.2909 218 32.5 218H91C93.2091 218 95 216.209 95 214V155.5C95 153.291 96.7909 151.5 99 151.5H136C138.209 151.5 140 153.291 140 155.5V214C140 216.209 141.791 218 144 218H201.5C203.709 218 205.5 216.209 205.5 214V121.5", stroke: color, strokeWidth, "stroke-linecap": "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_native_svg6.Path, { d: "M210.271 96.7945C213.515 91.6353 215.392 85.529 215.392 78.9844C215.392 60.4828 200.394 45.4844 181.892 45.4844C163.391 45.4844 148.392 60.4828 148.392 78.9844C148.392 97.4859 163.391 112.484 181.892 112.484C193.849 112.484 204.343 106.22 210.271 96.7945ZM210.271 96.7945L241 114.536", stroke: color, strokeWidth, "stroke-linecap": "round" })
  ] });
};

// src/custom/ZNlmIcon.tsx
var import_react_native_svg7 = __toESM(require("react-native-svg"), 1);
var import_jsx_runtime8 = require("react/jsx-runtime");
var ZNlmIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_react_native_svg7.default, { width: size, height: size, viewBox: "0 0 256 256", fill: "none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_native_svg7.Path, { d: "M21 194L226 38", stroke: color, strokeWidth, "stroke-linecap": "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_native_svg7.Path, { d: "M160.5 56.5L149.25 45.25L140.828 36.8284C139.266 35.2663 136.734 35.2663 135.172 36.8284L50.1716 121.828C49.4214 122.579 49 123.596 49 124.657V147M194.5 93L224.872 124.336C225.596 125.083 226 126.081 226 127.12V218C226 220.209 224.209 222 222 222H164.5C162.291 222 160.5 220.209 160.5 218V159.5C160.5 157.291 158.709 155.5 156.5 155.5H119.5C117.291 155.5 115.5 157.291 115.5 159.5V218C115.5 220.209 113.709 222 111.5 222H53C50.7909 222 49 220.209 49 218V198.5", stroke: color, strokeWidth, "stroke-linecap": "round" })
  ] });
};

// src/custom/ZTenantInspectionIcon.tsx
var import_react_native_svg8 = __toESM(require("react-native-svg"), 1);
var import_jsx_runtime9 = require("react/jsx-runtime");
var ZTenantInspectionIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_react_native_svg8.default, { width: size, height: size, viewBox: "0 0 256 256", fill: "none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_native_svg8.Path, { d: "M144.208 129.159C134.719 143.898 118.166 153.659 99.3333 153.659C69.8781 153.659 46 129.781 46 100.326C46 70.8703 69.8781 46.9922 99.3333 46.9922C107.442 46.9922 115.129 48.8019 122.01 52.0395", stroke: color, strokeWidth, "stroke-linecap": "round", "stroke-linejoin": "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_native_svg8.Path, { d: "M14 217.664C23.4667 180.864 59.5733 153.664 99.3333 153.664C139.093 153.664 175.2 180.864 184.667 217.664", stroke: color, strokeWidth, "stroke-linecap": "round", "stroke-linejoin": "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_native_svg8.Path, { d: "M200.664 103.706C205.056 99.48 208.348 94.0056 209.925 87.6537C214.382 69.6971 203.438 51.5272 185.482 47.0702C167.525 42.6131 149.355 53.5568 144.898 71.5134C140.441 89.4701 151.385 107.64 169.341 112.097C180.946 114.977 192.64 111.426 200.664 103.706ZM200.664 103.706L226.214 128.327", stroke: color, strokeWidth, "stroke-linecap": "round" })
  ] });
};

// src/custom/ZPreInspectionIcon.tsx
var import_react_native_svg9 = __toESM(require("react-native-svg"), 1);
var import_jsx_runtime10 = require("react/jsx-runtime");
var ZPreInspectionIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_react_native_svg9.default, { width: size, height: size, viewBox: "0 0 256 256", fill: "none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_native_svg9.Path, { d: "M145.33 153.706C149.722 149.48 153.015 144.006 154.591 137.654C159.048 119.697 148.105 101.527 130.148 97.0702C112.192 92.6131 94.0216 103.557 89.5646 121.513C85.1076 139.47 96.0512 157.64 114.008 162.097C125.613 164.977 137.306 161.426 145.33 153.706ZM145.33 153.706L170.881 178.327", stroke: color, strokeWidth, "stroke-linecap": "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_native_svg9.Path, { d: "M211.828 83.3284L156.172 27.6716C155.421 26.9214 154.404 26.5 153.343 26.5H70.5C56.1406 26.5 44.5 38.1406 44.5 52.5V223C44.5 225.209 46.2909 227 48.5 227H209C211.209 227 213 225.209 213 223V86.1569C213 85.096 212.579 84.0786 211.828 83.3284Z", stroke: color, strokeWidth, "stroke-linecap": "round" })
  ] });
};

// src/custom/ZFencingIcon.tsx
var import_react_native_svg10 = __toESM(require("react-native-svg"), 1);
var import_jsx_runtime11 = require("react/jsx-runtime");
var ZFencingIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_react_native_svg10.default, { width: size, height: size, viewBox: "0 0 256 256", fill: "none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_native_svg10.Path, { d: "M70.5 53.5H34.5C32.2909 53.5 30.5 55.2909 30.5 57.5V199.5C30.5 201.709 32.2909 203.5 34.5 203.5H70.5C72.7091 203.5 74.5 201.709 74.5 199.5V57.5C74.5 55.2909 72.7091 53.5 70.5 53.5Z", stroke: color, strokeWidth, "stroke-linecap": "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_native_svg10.Path, { d: "M146 53.5H110C107.791 53.5 106 55.2909 106 57.5V199.5C106 201.709 107.791 203.5 110 203.5H146C148.209 203.5 150 201.709 150 199.5V57.5C150 55.2909 148.209 53.5 146 53.5Z", stroke: color, strokeWidth, "stroke-linecap": "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_native_svg10.Path, { d: "M221 53.5H185C182.791 53.5 181 55.2909 181 57.5V199.5C181 201.709 182.791 203.5 185 203.5H221C223.209 203.5 225 201.709 225 199.5V57.5C225 55.2909 223.209 53.5 221 53.5Z", stroke: color, strokeWidth, "stroke-linecap": "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_native_svg10.Path, { d: "M177 97H154C151.791 97 150 98.7909 150 101V113C150 115.209 151.791 117 154 117H177C179.209 117 181 115.209 181 113V101C181 98.7909 179.209 97 177 97Z", stroke: color, strokeWidth, "stroke-linecap": "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_native_svg10.Path, { d: "M102 97H79C76.7909 97 75 98.7909 75 101V113C75 115.209 76.7909 117 79 117H102C104.209 117 106 115.209 106 113V101C106 98.7909 104.209 97 102 97Z", stroke: color, strokeWidth, "stroke-linecap": "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_native_svg10.Path, { d: "M177 150H154C151.791 150 150 151.791 150 154V166C150 168.209 151.791 170 154 170H177C179.209 170 181 168.209 181 166V154C181 151.791 179.209 150 177 150Z", stroke: color, strokeWidth, "stroke-linecap": "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_native_svg10.Path, { d: "M102 150H79C76.7909 150 75 151.791 75 154V166C75 168.209 76.7909 170 79 170H102C104.209 170 106 168.209 106 166V154C106 151.791 104.209 150 102 150Z", stroke: color, strokeWidth, "stroke-linecap": "round" })
  ] });
};

// src/custom/ZMagicWandIcon.tsx
var import_react_native_svg11 = __toESM(require("react-native-svg"), 1);
var import_jsx_runtime12 = require("react/jsx-runtime");
var ZMagicWandIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react_native_svg11.default, { width: size, height: size, viewBox: "0 0 256 256", fill: "none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_native_svg11.Path, { d: "M94.6543 45.5518C95.8191 48.6993 98.3007 51.1809 101.448 52.3457L107.269 54.5L101.448 56.6543C98.3991 57.7827 95.9751 60.147 94.7676 63.1553L94.6543 63.4482L92.5 69.2686L90.3457 63.4482C89.1809 60.3007 86.6993 57.8191 83.5518 56.6543L77.7305 54.5L83.5518 52.3457C86.6993 51.1809 89.1809 48.6993 90.3457 45.5518L92.5 39.7305L94.6543 45.5518Z", stroke: color, strokeWidth, fill: color }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_native_svg11.Path, { d: "M207.5 138.66C208.656 141.262 210.737 143.344 213.339 144.5C210.737 145.656 208.656 147.737 207.5 150.339C206.344 147.737 204.262 145.656 201.66 144.5C204.263 143.344 206.344 141.263 207.5 138.66Z", stroke: color, strokeWidth, fill: color }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_native_svg11.Path, { d: "M176.5 181.66C177.656 184.262 179.737 186.344 182.339 187.5C179.737 188.656 177.656 190.737 176.5 193.339C175.344 190.737 173.262 188.656 170.66 187.5C173.263 186.344 175.344 184.263 176.5 181.66Z", stroke: color, strokeWidth, fill: color }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_native_svg11.Path, { d: "M120.455 98.6865L179.852 39.2895C182.195 36.9464 185.994 36.9464 188.337 39.2895L215.915 66.8667C218.258 69.2098 218.258 73.0088 215.915 75.352L156.518 134.749", stroke: color, strokeWidth, fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_native_svg11.Path, { d: "M39.1382 180.007L136.719 82.4266L172.781 118.489L75.2006 216.07C72.8574 218.413 69.0585 218.413 66.7153 216.07L39.1381 188.493C36.795 186.149 36.795 182.351 39.1382 180.007Z", stroke: color, strokeWidth, fill: color })
  ] });
};

// src/react-native.tsx
var customIcons = {
  ZCarpetCleaningIcon,
  ZMoveOutIcon,
  ZMoveInIcon,
  ZGalleryIcon,
  ZBuildingIcon,
  ZInspectionIcon,
  ZNlmIcon,
  ZTenantInspectionIcon,
  ZPreInspectionIcon,
  ZFencingIcon,
  ZMagicWandIcon
};
var { IconContext, ...phosphorNativeIcons } = PhosphorNative;
var iconPack = {
  ...phosphorNativeIcons,
  ...customIcons
};
var Icon = createIconComponent(iconPack);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Icon,
  iconPack
});
//# sourceMappingURL=react-native.cjs.map
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

// src/react-web-only.tsx
var react_web_only_exports = {};
__export(react_web_only_exports, {
  Icon: () => Icon,
  iconPack: () => iconPack
});
module.exports = __toCommonJS(react_web_only_exports);
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

// src/react-web-only.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var MyCustomIconWeb = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 256 256",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "path",
          {
            d: "M128 24L56 152h144L128 24z",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "path",
          {
            d: "M128 152v80",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            fill: "none"
          }
        )
      ]
    }
  );
};
var MoveInIconWeb = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  if (weight === "fill") {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "svg",
      {
        width: size,
        height: size,
        viewBox: "0 0 256 256",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_973_27224)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "path",
              {
                d: "M246.067 113.79L178.984 42.1909C176.468 39.5074 173.057 38 169.5 38C165.943 38 162.532 39.5074 160.016 42.1909L92.9328 113.79C91.6809 115.116 90.6886 116.695 90.0134 118.434C89.3383 120.173 88.9938 122.039 89.0001 123.921V209.84C89.0001 211.739 89.7069 213.56 90.9649 214.903C92.223 216.246 93.9293 217 95.7084 217H149.375C151.154 217 152.86 216.246 154.119 214.903C155.377 213.56 156.083 211.739 156.083 209.84V159.721H182.917V209.84C182.917 211.739 183.623 213.56 184.881 214.903C186.14 216.246 187.846 217 189.625 217H243.292C245.071 217 246.777 216.246 248.035 214.903C249.293 213.56 250 211.739 250 209.84V123.921C250.006 122.039 249.662 120.173 248.987 118.434C248.311 116.695 247.319 115.116 246.067 113.79ZM236.583 202.68H196.333V152.561C196.333 150.662 195.627 148.841 194.368 147.498C193.11 146.155 191.404 145.401 189.625 145.401H149.375C147.596 145.401 145.89 146.155 144.632 147.498C143.373 148.841 142.667 150.662 142.667 152.561V202.68H102.417V123.921L169.5 52.3221L236.583 123.921V202.68Z",
                fill: color
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "path",
              {
                d: "M29.8023 73.0076C32.4722 70.3303 36.8092 70.3313 39.4797 73.0076L82.9972 116.648C85.6676 119.326 85.6676 123.674 82.9972 126.352L39.4797 169.992C36.8092 172.669 32.4722 172.67 29.8023 169.992C27.1325 167.315 27.1335 162.966 29.8023 160.288L61.6494 128.361L-5.99999 128.361L-6 114.639L61.6494 114.639L29.8023 82.7123C27.1335 80.0343 27.1324 75.685 29.8023 73.0076Z",
                fill: color
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_973_27224", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "256", height: "256", fill: "white" }) }) })
        ]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 256 256",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "path",
          {
            d: "M236.583 202.68H196.333V152.561C196.333 150.662 195.627 148.841 194.368 147.498C193.11 146.155 191.404 145.401 189.625 145.401H149.375C147.596 145.401 145.89 146.155 144.632 147.498C143.373 148.841 142.667 150.662 142.667 152.561V202.68H102.417V123.921L169.5 52.3221L236.583 123.921V202.68Z",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "path",
          {
            d: "M29.8023 73.0076L39.4797 73.0076L82.9972 116.648C85.6676 119.326 85.6676 123.674 82.9972 126.352L39.4797 169.992C36.8092 172.669 32.4722 172.67 29.8023 169.992C27.1325 167.315 27.1335 162.966 29.8023 160.288L61.6494 128.361L29.8023 82.7123C27.1335 80.0343 27.1324 75.685 29.8023 73.0076Z",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "path",
          {
            d: "M-6 128.361H61.6494",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            fill: "none"
          }
        )
      ]
    }
  );
};
var customIcons = {
  MyCustomIcon: MyCustomIconWeb,
  MoveInIcon: MoveInIconWeb
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
//# sourceMappingURL=react-web-only.cjs.map
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

// src/custom/MyCustomIcon.tsx
var import_react_native_svg = __toESM(require("react-native-svg"), 1);
var import_jsx_runtime2 = require("react/jsx-runtime");
var MyCustomIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    import_react_native_svg.default,
    {
      width: size,
      height: size,
      viewBox: "0 0 256 256",
      fill: "none",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react_native_svg.Path,
          {
            d: "M128 24L56 152h144L128 24z",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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

// src/custom/MoveInIcon.tsx
var import_react_native_svg2 = __toESM(require("react-native-svg"), 1);
var import_jsx_runtime3 = require("react/jsx-runtime");
var MoveInIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  if (weight === "fill") {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      import_react_native_svg2.default,
      {
        width: size,
        height: size,
        viewBox: "0 0 256 256",
        fill: "none",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react_native_svg2.G, { clipPath: "url(#clip0_1_2)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_react_native_svg2.Path,
              {
                d: "M96 217H216V121.003C216.001 119.952 215.86 118.912 215.586 117.941C215.312 116.969 214.911 116.087 214.405 115.343L159.859 35.3462C159.353 34.6024 158.751 34.0124 158.089 33.6098C157.427 33.2072 156.717 33 156 33C155.283 33 154.573 33.2072 153.911 33.6098C153.249 34.0124 152.647 34.6024 152.141 35.3462L97.5955 115.343C97.0891 116.087 96.6876 116.969 96.4138 117.941C96.14 118.912 95.9994 119.952 96 121.003V217Z",
                fill: color
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_react_native_svg2.Path,
              {
                d: "M34 123L68 156L34 189",
                fill: color
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native_svg2.Defs, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native_svg2.ClipPath, { id: "clip0_1_2", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native_svg2.Rect, { width: "256", height: "256", fill: "white" }) }) })
        ]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    import_react_native_svg2.default,
    {
      width: size,
      height: size,
      viewBox: "0 0 256 256",
      fill: "none",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react_native_svg2.G, { clipPath: "url(#clip0_1_2)", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_react_native_svg2.Path,
            {
              d: "M96 217H216V121.003C216.001 119.952 215.86 118.912 215.586 117.941C215.312 116.969 214.911 116.087 214.405 115.343L159.859 35.3462C159.353 34.6024 158.751 34.0124 158.089 33.6098C157.427 33.2072 156.717 33 156 33C155.283 33 154.573 33.2072 153.911 33.6098C153.249 34.0124 152.647 34.6024 152.141 35.3462L97.5955 115.343C97.0891 116.087 96.6876 116.969 96.4138 117.941C96.14 118.912 95.9994 119.952 96 121.003V217Z",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_react_native_svg2.Path,
            {
              d: "M34 123L68 156L34 189",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native_svg2.Defs, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native_svg2.ClipPath, { id: "clip0_1_2", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native_svg2.Rect, { width: "256", height: "256", fill: "white" }) }) })
      ]
    }
  );
};

// src/custom/MoveOutIcon.tsx
var import_react_native_svg3 = __toESM(require("react-native-svg"), 1);
var import_jsx_runtime4 = require("react/jsx-runtime");
var MoveOutIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  if (weight === "fill") {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      import_react_native_svg3.default,
      {
        width: size,
        height: size,
        viewBox: "0 0 256 256",
        fill: "none",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react_native_svg3.G, { clipPath: "url(#clip0_1_12)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_react_native_svg3.Path,
              {
                d: "M186 128L220 161L186 194",
                fill: color
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_react_native_svg3.Path,
              {
                d: "M39 214H159V118.003C159.001 116.952 158.86 115.912 158.586 114.941C158.312 113.969 157.911 113.087 157.405 112.343L102.859 32.3462C102.353 31.6024 101.751 31.0124 101.089 30.6098C100.427 30.2072 99.7168 30 99 30C98.2832 30 97.5734 30.2072 96.9112 30.6098C96.2491 31.0124 95.6475 31.6024 95.1409 32.3462L40.5955 112.343C40.0891 113.087 39.6876 113.969 39.4138 114.941C39.14 115.912 38.9994 116.952 39 118.003V214Z",
                fill: color
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_native_svg3.Defs, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_native_svg3.ClipPath, { id: "clip0_1_12", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_native_svg3.Rect, { width: "256", height: "256", fill: "white" }) }) })
        ]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    import_react_native_svg3.default,
    {
      width: size,
      height: size,
      viewBox: "0 0 256 256",
      fill: "none",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react_native_svg3.G, { clipPath: "url(#clip0_1_12)", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_react_native_svg3.Path,
            {
              d: "M186 128L220 161L186 194",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_react_native_svg3.Path,
            {
              d: "M39 214H159V118.003C159.001 116.952 158.86 115.912 158.586 114.941C158.312 113.969 157.911 113.087 157.405 112.343L102.859 32.3462C102.353 31.6024 101.751 31.0124 101.089 30.6098C100.427 30.2072 99.7168 30 99 30C98.2832 30 97.5734 30.2072 96.9112 30.6098C96.2491 31.0124 95.6475 31.6024 95.1409 32.3462L40.5955 112.343C40.0891 113.087 39.6876 113.969 39.4138 114.941C39.14 115.912 38.9994 116.952 39 118.003V214Z",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_native_svg3.Defs, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_native_svg3.ClipPath, { id: "clip0_1_12", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_native_svg3.Rect, { width: "256", height: "256", fill: "white" }) }) })
      ]
    }
  );
};

// src/react-native.tsx
var customIcons = {
  MyCustomIcon,
  MoveInIcon,
  MoveOutIcon
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
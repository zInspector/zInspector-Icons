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
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react_native_svg2.G, { clipPath: "url(#clip0_1_24)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_react_native_svg2.Path,
              {
                d: "M42.34 114.34L122.34 34.34C123.083 33.5962 123.965 33.0061 124.936 32.6035C125.908 32.2009 126.949 31.9937 128 31.9937C129.051 31.9937 130.092 32.2009 131.064 32.6035C132.035 33.0061 132.917 33.5962 133.66 34.34L213.66 114.34C214.403 115.084 214.992 115.966 215.393 116.937C215.795 117.908 216.001 118.949 216 120V216H40L40 192",
                fill: color
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_react_native_svg2.Path,
              {
                d: "M40 150L171 150",
                fill: color
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_react_native_svg2.Path,
              {
                d: "M139 182L171 149.5L139 117",
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
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react_native_svg2.G, { clipPath: "url(#clip0_1_24)", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_react_native_svg2.Path,
            {
              d: "M42.34 114.34L122.34 34.34C123.083 33.5962 123.965 33.0061 124.936 32.6035C125.908 32.2009 126.949 31.9937 128 31.9937C129.051 31.9937 130.092 32.2009 131.064 32.6035C132.035 33.0061 132.917 33.5962 133.66 34.34L213.66 114.34C214.403 115.084 214.992 115.966 215.393 116.937C215.795 117.908 216.001 118.949 216 120V216H40L40 192",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_react_native_svg2.Path,
            {
              d: "M40 150L171 150",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_react_native_svg2.Path,
            {
              d: "M139 182L171 149.5L139 117",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native_svg2.Defs, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native_svg2.ClipPath, { id: "clip0_1_24", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native_svg2.Rect, { width: "256", height: "256", fill: "white" }) }) })
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
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react_native_svg3.G, { clipPath: "url(#clip0_3_35)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_react_native_svg3.Path,
              {
                d: "M213.66 114.34L133.66 34.34C132.917 33.5962 132.035 33.0061 131.064 32.6035C130.092 32.2009 129.051 31.9937 128 31.9937C126.949 31.9937 125.908 32.2009 124.936 32.6035C123.965 33.0061 123.083 33.5962 122.34 34.34L42.34 114.34C41.5973 115.084 41.0084 115.966 40.6069 116.937C40.2054 117.908 39.9992 118.949 40 120V216H216L216 192",
                fill: color
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_react_native_svg3.Path,
              {
                d: "M67 150L198 150",
                fill: color
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_react_native_svg3.Path,
              {
                d: "M166 182L198 149.5L166 117",
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
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react_native_svg3.G, { clipPath: "url(#clip0_3_35)", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_react_native_svg3.Path,
            {
              d: "M213.66 114.34L133.66 34.34C132.917 33.5962 132.035 33.0061 131.064 32.6035C130.092 32.2009 129.051 31.9937 128 31.9937C126.949 31.9937 125.908 32.2009 124.936 32.6035C123.965 33.0061 123.083 33.5962 122.34 34.34L42.34 114.34C41.5973 115.084 41.0084 115.966 40.6069 116.937C40.2054 117.908 39.9992 118.949 40 120V216H216L216 192",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_react_native_svg3.Path,
            {
              d: "M67 150L198 150",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_react_native_svg3.Path,
            {
              d: "M166 182L198 149.5L166 117",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_native_svg3.Defs, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_native_svg3.ClipPath, { id: "clip0_3_35", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_native_svg3.Rect, { width: "256", height: "256", fill: "white" }) }) })
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
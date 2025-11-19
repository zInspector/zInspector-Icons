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

// src/custom/MyCustomIcon.tsx
var import_react_native_svg = __toESM(require("react-native-svg"), 1);
var import_jsx_runtime2 = require("react/jsx-runtime");
var MyCustomIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 1 : weight === "light" ? 1.5 : weight === "bold" ? 3 : 2;
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

// src/react-web.tsx
var customIcons = {
  MyCustomIcon
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
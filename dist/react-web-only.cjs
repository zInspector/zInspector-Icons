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
var HomeArrowIconWeb = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  const isFilled = weight === "fill";
  if (isFilled) {
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
              d: "M252.245 119.125L185.245 46.9312C182.927 44.2812 179.682 42.6667 176.267 42.6667C172.851 42.6667 169.606 44.2812 167.288 46.9312L100.288 119.125C99.5308 119.979 98.916 121.062 98.4734 122.229C98.0308 123.396 97.9934 124.604 98.0001 125.813V217.771C98.0001 219.396 98.7027 221.062 99.9547 222.271C101.207 223.479 102.892 224.25 104.667 224.25H156.667C158.442 224.25 160.127 223.479 161.379 222.271C162.631 221.062 163.333 219.396 163.333 217.771V166.062H189.333V217.771C189.333 219.396 190.036 221.062 191.288 222.271C192.54 223.479 194.225 224.25 196 224.25H250.667C252.442 224.25 254.127 223.479 255.379 222.271C256.631 221.062 257.333 219.396 257.333 217.771V125.813C257.34 124.604 257.302 123.396 256.86 122.229C256.417 121.062 255.802 119.979 252.245 119.125Z",
              fill: color
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "path",
            {
              d: "M90.294 133.458C93.560 129.958 93.560 124.042 90.294 120.542L46.144 76.3917C42.877 73.1458 36.960 73.1458 33.694 76.3917C30.427 79.6375 30.427 85.5542 33.694 88.8L70.587 128L33.694 167.2C30.427 170.446 30.427 176.362 33.694 179.608C36.960 182.854 42.877 182.854 46.144 179.608L90.294 133.458ZM0 128L60.746 138.833L85.333 138.833V128V121.167L-60.746 121.167L0 128Z",
              fill: color
            }
          )
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
            d: "M243.333 210.562H202.667V158.854C202.667 157.229 201.965 155.667 200.712 154.479C199.460 153.292 197.775 152.542 196 152.542H156.667C154.892 152.542 153.207 153.292 151.955 154.479C150.702 155.667 150 157.229 150 158.854V210.562H109.333V130.146L176.267 57.146L243.333 130.146V210.562Z",
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
            d: "M90.294 133.458L46.144 179.608C42.877 182.854 36.960 182.854 33.694 179.608C30.427 176.362 30.427 170.446 33.694 167.2L70.587 128L33.694 88.8C30.427 85.554 30.427 79.638 33.694 76.392C36.960 73.146 42.877 73.146 46.144 76.392L90.294 120.542C93.560 124.042 93.560 129.958 90.294 133.458Z",
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
            d: "M0 128H85.333",
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
  HomeArrowIcon: HomeArrowIconWeb
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
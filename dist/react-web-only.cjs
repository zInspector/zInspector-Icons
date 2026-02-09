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
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_1_24)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "path",
              {
                d: "M42.34 114.34L122.34 34.34C123.083 33.5962 123.965 33.0061 124.936 32.6035C125.908 32.2009 126.949 31.9937 128 31.9937C129.051 31.9937 130.092 32.2009 131.064 32.6035C132.035 33.0061 132.917 33.5962 133.66 34.34L213.66 114.34C214.403 115.084 214.992 115.966 215.393 116.937C215.795 117.908 216.001 118.949 216 120V216H40L40 192",
                fill: color
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "path",
              {
                d: "M40 150L171 150",
                fill: color
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "path",
              {
                d: "M139 182L171 149.5L139 117",
                fill: color
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_1_24", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "256", height: "256", fill: "white" }) }) })
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
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_1_24)", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "path",
            {
              d: "M42.34 114.34L122.34 34.34C123.083 33.5962 123.965 33.0061 124.936 32.6035C125.908 32.2009 126.949 31.9937 128 31.9937C129.051 31.9937 130.092 32.2009 131.064 32.6035C132.035 33.0061 132.917 33.5962 133.66 34.34L213.66 114.34C214.403 115.084 214.992 115.966 215.393 116.937C215.795 117.908 216.001 118.949 216 120V216H40L40 192",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "path",
            {
              d: "M40 150L171 150",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "path",
            {
              d: "M139 182L171 149.5L139 117",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_1_2", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "256", height: "256", fill: "white" }) }) })
      ]
    }
  );
};
var MoveOutIconWeb = ({
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
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_3_35)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "path",
              {
                d: "M213.66 114.34L133.66 34.34C132.917 33.5962 132.035 33.0061 131.064 32.6035C130.092 32.2009 129.051 31.9937 128 31.9937C126.949 31.9937 125.908 32.2009 124.936 32.6035C123.965 33.0061 123.083 33.5962 122.34 34.34L42.34 114.34C41.5973 115.084 41.0084 115.966 40.6069 116.937C40.2054 117.908 39.9992 118.949 40 120V216H216L216 192",
                fill: color
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "path",
              {
                d: "M67 150L198 150",
                fill: color
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "path",
              {
                d: "M166 182L198 149.5L166 117",
                fill: color
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_3_35", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "256", height: "256", fill: "white" }) }) })
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
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_3_35)", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "path",
            {
              d: "M213.66 114.34L133.66 34.34C132.917 33.5962 132.035 33.0061 131.064 32.6035C130.092 32.2009 129.051 31.9937 128 31.9937C126.949 31.9937 125.908 32.2009 124.936 32.6035C123.965 33.0061 123.083 33.5962 122.34 34.34L42.34 114.34C41.5973 115.084 41.0084 115.966 40.6069 116.937C40.2054 117.908 39.9992 118.949 40 120V216H216L216 192",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "path",
            {
              d: "M67 150L198 150",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "path",
            {
              d: "M166 182L198 149.5L166 117",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_1_12", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "256", height: "256", fill: "white" }) }) })
      ]
    }
  );
};
var ZCarpetCleaningIconWeb = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: size, height: size, viewBox: "0 0 256 256", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: "61.2807", cy: "175.843", r: "42.7807", stroke: color, strokeWidth }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M31.105 142V104.422C31.105 103.87 31.5527 103.422 32.105 103.422H121.631C145.677 103.422 193.674 124.978 194.05 211.033C194.053 211.585 193.605 212.053 193.052 212.053H89", stroke: color, strokeWidth }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M157.842 115.491V33C157.842 31.8954 158.737 31 159.842 31H228.263C229.367 31 230.263 31.8954 230.263 33V212.053M230.263 212.053H218.193M230.263 212.053H242.333", stroke: color, strokeWidth, strokeLinecap: "round" })
  ] });
};
var ZMoveOutIconWeb = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: size, height: size, viewBox: "0 0 256 256", fill: "none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M152.359 28.5185L232.359 108.519C233.852 110 235.036 111.764 235.841 113.708C236.646 115.651 237.057 117.735 237.049 119.839V215.839C237.049 217.96 236.207 219.995 234.706 221.495C233.206 222.996 231.171 223.839 229.049 223.839H53.0494C50.9277 223.839 48.8929 222.996 47.3926 221.495C45.8923 219.995 45.0494 217.96 45.0494 215.839V208.839C45.0494 208.286 45.4971 207.839 46.0494 207.839H61.0494H141.049H221.049V119.839L141.049 39.8385L82.5424 90.5484C82.1458 90.8921 81.551 90.8708 81.1801 90.4995L71.2872 80.5979C70.8771 80.1875 70.9013 79.5154 71.3397 79.1354L129.739 28.5185C132.74 25.5202 136.808 23.8359 141.049 23.8359C145.291 23.8359 149.359 25.5202 152.359 28.5185Z", fill: "#212121" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M79.4424 100.5C81.1286 100.5 82.7515 101.157 83.9521 102.336L127.949 145.533C128.544 146.117 129.019 146.811 129.343 147.578C129.667 148.345 129.833 149.168 129.833 150C129.833 150.832 129.667 151.655 129.343 152.422C129.019 153.188 128.545 153.883 127.95 154.467L127.949 154.466L83.9521 197.664C82.7515 198.843 81.1286 199.5 79.4424 199.5C77.7562 199.5 76.1333 198.843 74.9326 197.664C73.731 196.484 73.0508 194.878 73.0508 193.197C73.0509 191.517 73.7311 189.911 74.9326 188.731L107.972 156.3H15.8887C14.2031 156.3 12.581 155.642 11.3809 154.464C10.18 153.285 9.5 151.68 9.5 150C9.5 148.32 10.18 146.715 11.3809 145.536C12.581 144.358 14.2031 143.7 15.8887 143.7H107.972L74.9326 111.269C73.7311 110.089 73.0509 108.483 73.0508 106.803C73.0508 105.122 73.731 103.516 74.9326 102.336C76.1333 101.157 77.7562 100.5 79.4424 100.5Z", fill: "#212121", stroke: color, strokeWidth })
  ] });
};
var customIcons = {
  MyCustomIcon: MyCustomIconWeb,
  MoveInIcon: MoveInIconWeb,
  MoveOutIcon: MoveOutIconWeb,
  ZCarpetCleaningIcon: ZCarpetCleaningIconWeb,
  ZMoveOutIcon: ZMoveOutIconWeb
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
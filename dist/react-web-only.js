// src/react-web-only.tsx
import * as Phosphor from "phosphor-react";

// src/IconFactory.tsx
import { jsx } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx(Comp, { size, color, weight });
  };
  return Icon2;
}

// src/react-web-only.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var MyCustomIconWeb = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 256 256",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx2(
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
        /* @__PURE__ */ jsx2(
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
    return /* @__PURE__ */ jsxs(
      "svg",
      {
        width: size,
        height: size,
        viewBox: "0 0 256 256",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxs("g", { clipPath: "url(#clip0_1_24)", children: [
            /* @__PURE__ */ jsx2(
              "path",
              {
                d: "M42.34 114.34L122.34 34.34C123.083 33.5962 123.965 33.0061 124.936 32.6035C125.908 32.2009 126.949 31.9937 128 31.9937C129.051 31.9937 130.092 32.2009 131.064 32.6035C132.035 33.0061 132.917 33.5962 133.66 34.34L213.66 114.34C214.403 115.084 214.992 115.966 215.393 116.937C215.795 117.908 216.001 118.949 216 120V216H40L40 192",
                fill: color
              }
            ),
            /* @__PURE__ */ jsx2(
              "path",
              {
                d: "M40 150L171 150",
                fill: color
              }
            ),
            /* @__PURE__ */ jsx2(
              "path",
              {
                d: "M139 182L171 149.5L139 117",
                fill: color
              }
            )
          ] }),
          /* @__PURE__ */ jsx2("defs", { children: /* @__PURE__ */ jsx2("clipPath", { id: "clip0_1_24", children: /* @__PURE__ */ jsx2("rect", { width: "256", height: "256", fill: "white" }) }) })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 256 256",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsxs("g", { clipPath: "url(#clip0_1_24)", children: [
          /* @__PURE__ */ jsx2(
            "path",
            {
              d: "M42.34 114.34L122.34 34.34C123.083 33.5962 123.965 33.0061 124.936 32.6035C125.908 32.2009 126.949 31.9937 128 31.9937C129.051 31.9937 130.092 32.2009 131.064 32.6035C132.035 33.0061 132.917 33.5962 133.66 34.34L213.66 114.34C214.403 115.084 214.992 115.966 215.393 116.937C215.795 117.908 216.001 118.949 216 120V216H40L40 192",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx2(
            "path",
            {
              d: "M40 150L171 150",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx2(
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
        /* @__PURE__ */ jsx2("defs", { children: /* @__PURE__ */ jsx2("clipPath", { id: "clip0_1_2", children: /* @__PURE__ */ jsx2("rect", { width: "256", height: "256", fill: "white" }) }) })
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
    return /* @__PURE__ */ jsxs(
      "svg",
      {
        width: size,
        height: size,
        viewBox: "0 0 256 256",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxs("g", { clipPath: "url(#clip0_3_35)", children: [
            /* @__PURE__ */ jsx2(
              "path",
              {
                d: "M213.66 114.34L133.66 34.34C132.917 33.5962 132.035 33.0061 131.064 32.6035C130.092 32.2009 129.051 31.9937 128 31.9937C126.949 31.9937 125.908 32.2009 124.936 32.6035C123.965 33.0061 123.083 33.5962 122.34 34.34L42.34 114.34C41.5973 115.084 41.0084 115.966 40.6069 116.937C40.2054 117.908 39.9992 118.949 40 120V216H216L216 192",
                fill: color
              }
            ),
            /* @__PURE__ */ jsx2(
              "path",
              {
                d: "M67 150L198 150",
                fill: color
              }
            ),
            /* @__PURE__ */ jsx2(
              "path",
              {
                d: "M166 182L198 149.5L166 117",
                fill: color
              }
            )
          ] }),
          /* @__PURE__ */ jsx2("defs", { children: /* @__PURE__ */ jsx2("clipPath", { id: "clip0_3_35", children: /* @__PURE__ */ jsx2("rect", { width: "256", height: "256", fill: "white" }) }) })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 256 256",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsxs("g", { clipPath: "url(#clip0_3_35)", children: [
          /* @__PURE__ */ jsx2(
            "path",
            {
              d: "M213.66 114.34L133.66 34.34C132.917 33.5962 132.035 33.0061 131.064 32.6035C130.092 32.2009 129.051 31.9937 128 31.9937C126.949 31.9937 125.908 32.2009 124.936 32.6035C123.965 33.0061 123.083 33.5962 122.34 34.34L42.34 114.34C41.5973 115.084 41.0084 115.966 40.6069 116.937C40.2054 117.908 39.9992 118.949 40 120V216H216L216 192",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx2(
            "path",
            {
              d: "M67 150L198 150",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx2(
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
        /* @__PURE__ */ jsx2("defs", { children: /* @__PURE__ */ jsx2("clipPath", { id: "clip0_1_12", children: /* @__PURE__ */ jsx2("rect", { width: "256", height: "256", fill: "white" }) }) })
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
  return /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 256 256", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx2("circle", { cx: "61.2807", cy: "175.843", r: "42.7807", stroke: color, "stroke-width": strokeWidth }),
    /* @__PURE__ */ jsx2("path", { d: "M31.105 142V104.422C31.105 103.87 31.5527 103.422 32.105 103.422H121.631C145.677 103.422 193.674 124.978 194.05 211.033C194.053 211.585 193.605 212.053 193.052 212.053H89", stroke: color, "stroke-width": strokeWidth }),
    /* @__PURE__ */ jsx2("path", { d: "M157.842 115.491V33C157.842 31.8954 158.737 31 159.842 31H228.263C229.367 31 230.263 31.8954 230.263 33V212.053M230.263 212.053H218.193M230.263 212.053H242.333", stroke: color, "stroke-width": strokeWidth })
  ] });
};
var customIcons = {
  MyCustomIcon: MyCustomIconWeb,
  MoveInIcon: MoveInIconWeb,
  MoveOutIcon: MoveOutIconWeb,
  ZCarpetCleaningIcon: ZCarpetCleaningIconWeb
};
var { IconContext, ...phosphorIcons } = Phosphor;
var iconPack = {
  ...phosphorIcons,
  ...customIcons
};
var Icon = createIconComponent(iconPack);
export {
  Icon,
  iconPack
};
//# sourceMappingURL=react-web-only.js.map
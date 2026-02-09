// src/react-native.tsx
import * as PhosphorNative from "phosphor-react-native";

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

// src/custom/MyCustomIcon.tsx
import Svg, { Path } from "react-native-svg";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var MyCustomIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  return /* @__PURE__ */ jsxs(
    Svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 256 256",
      fill: "none",
      children: [
        /* @__PURE__ */ jsx2(
          Path,
          {
            d: "M128 24L56 152h144L128 24z",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx2(
          Path,
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
import Svg2, { Path as Path2, G, Defs, ClipPath, Rect } from "react-native-svg";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var MoveInIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  if (weight === "fill") {
    return /* @__PURE__ */ jsxs2(
      Svg2,
      {
        width: size,
        height: size,
        viewBox: "0 0 256 256",
        fill: "none",
        children: [
          /* @__PURE__ */ jsxs2(G, { clipPath: "url(#clip0_1_24)", children: [
            /* @__PURE__ */ jsx3(
              Path2,
              {
                d: "M42.34 114.34L122.34 34.34C123.083 33.5962 123.965 33.0061 124.936 32.6035C125.908 32.2009 126.949 31.9937 128 31.9937C129.051 31.9937 130.092 32.2009 131.064 32.6035C132.035 33.0061 132.917 33.5962 133.66 34.34L213.66 114.34C214.403 115.084 214.992 115.966 215.393 116.937C215.795 117.908 216.001 118.949 216 120V216H40L40 192",
                fill: color
              }
            ),
            /* @__PURE__ */ jsx3(
              Path2,
              {
                d: "M40 150L171 150",
                fill: color
              }
            ),
            /* @__PURE__ */ jsx3(
              Path2,
              {
                d: "M139 182L171 149.5L139 117",
                fill: color
              }
            )
          ] }),
          /* @__PURE__ */ jsx3(Defs, { children: /* @__PURE__ */ jsx3(ClipPath, { id: "clip0_1_2", children: /* @__PURE__ */ jsx3(Rect, { width: "256", height: "256", fill: "white" }) }) })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs2(
    Svg2,
    {
      width: size,
      height: size,
      viewBox: "0 0 256 256",
      fill: "none",
      children: [
        /* @__PURE__ */ jsxs2(G, { clipPath: "url(#clip0_1_24)", children: [
          /* @__PURE__ */ jsx3(
            Path2,
            {
              d: "M42.34 114.34L122.34 34.34C123.083 33.5962 123.965 33.0061 124.936 32.6035C125.908 32.2009 126.949 31.9937 128 31.9937C129.051 31.9937 130.092 32.2009 131.064 32.6035C132.035 33.0061 132.917 33.5962 133.66 34.34L213.66 114.34C214.403 115.084 214.992 115.966 215.393 116.937C215.795 117.908 216.001 118.949 216 120V216H40L40 192",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx3(
            Path2,
            {
              d: "M40 150L171 150",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx3(
            Path2,
            {
              d: "M139 182L171 149.5L139 117",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        ] }),
        /* @__PURE__ */ jsx3(Defs, { children: /* @__PURE__ */ jsx3(ClipPath, { id: "clip0_1_24", children: /* @__PURE__ */ jsx3(Rect, { width: "256", height: "256", fill: "white" }) }) })
      ]
    }
  );
};

// src/custom/MoveOutIcon.tsx
import Svg3, { Path as Path3, G as G2, Defs as Defs2, ClipPath as ClipPath2, Rect as Rect2 } from "react-native-svg";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var MoveOutIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  if (weight === "fill") {
    return /* @__PURE__ */ jsxs3(
      Svg3,
      {
        width: size,
        height: size,
        viewBox: "0 0 256 256",
        fill: "none",
        children: [
          /* @__PURE__ */ jsxs3(G2, { clipPath: "url(#clip0_3_35)", children: [
            /* @__PURE__ */ jsx4(
              Path3,
              {
                d: "M213.66 114.34L133.66 34.34C132.917 33.5962 132.035 33.0061 131.064 32.6035C130.092 32.2009 129.051 31.9937 128 31.9937C126.949 31.9937 125.908 32.2009 124.936 32.6035C123.965 33.0061 123.083 33.5962 122.34 34.34L42.34 114.34C41.5973 115.084 41.0084 115.966 40.6069 116.937C40.2054 117.908 39.9992 118.949 40 120V216H216L216 192",
                fill: color
              }
            ),
            /* @__PURE__ */ jsx4(
              Path3,
              {
                d: "M67 150L198 150",
                fill: color
              }
            ),
            /* @__PURE__ */ jsx4(
              Path3,
              {
                d: "M166 182L198 149.5L166 117",
                fill: color
              }
            )
          ] }),
          /* @__PURE__ */ jsx4(Defs2, { children: /* @__PURE__ */ jsx4(ClipPath2, { id: "clip0_1_12", children: /* @__PURE__ */ jsx4(Rect2, { width: "256", height: "256", fill: "white" }) }) })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs3(
    Svg3,
    {
      width: size,
      height: size,
      viewBox: "0 0 256 256",
      fill: "none",
      children: [
        /* @__PURE__ */ jsxs3(G2, { clipPath: "url(#clip0_3_35)", children: [
          /* @__PURE__ */ jsx4(
            Path3,
            {
              d: "M213.66 114.34L133.66 34.34C132.917 33.5962 132.035 33.0061 131.064 32.6035C130.092 32.2009 129.051 31.9937 128 31.9937C126.949 31.9937 125.908 32.2009 124.936 32.6035C123.965 33.0061 123.083 33.5962 122.34 34.34L42.34 114.34C41.5973 115.084 41.0084 115.966 40.6069 116.937C40.2054 117.908 39.9992 118.949 40 120V216H216L216 192",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx4(
            Path3,
            {
              d: "M67 150L198 150",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx4(
            Path3,
            {
              d: "M166 182L198 149.5L166 117",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        ] }),
        /* @__PURE__ */ jsx4(Defs2, { children: /* @__PURE__ */ jsx4(ClipPath2, { id: "clip0_3_35", children: /* @__PURE__ */ jsx4(Rect2, { width: "256", height: "256", fill: "white" }) }) })
      ]
    }
  );
};

// src/custom/ZCarpetCleaningIcon.tsx
import Svg4, { Path as Path4, Circle } from "react-native-svg";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var ZCarpetCleaningIcon = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  return /* @__PURE__ */ jsxs4(
    Svg4,
    {
      width: size,
      height: size,
      viewBox: "0 0 256 256",
      fill: "none",
      children: [
        /* @__PURE__ */ jsx5(
          Circle,
          {
            cx: "61.2807",
            cy: "175.843",
            r: "42.7807",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx5(
          Path4,
          {
            d: "M31.105 142V104.422C31.105 103.87 31.5527 103.422 32.105 103.422H121.631C145.677 103.422 193.674 124.978 194.05 211.033C194.053 211.585 193.605 212.053 193.052 212.053H89",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx5(
          Path4,
          {
            d: "M157.842 115.491V33C157.842 31.8954 158.737 31 159.842 31H228.263C229.367 31 230.263 31.8954 230.263 33V212.053M230.263 212.053H218.193M230.263 212.053H242.333",
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

// src/react-native.tsx
var customIcons = {
  MyCustomIcon,
  MoveInIcon,
  MoveOutIcon,
  ZCarpetCleaningIcon
};
var { IconContext, ...phosphorNativeIcons } = PhosphorNative;
var iconPack = {
  ...phosphorNativeIcons,
  ...customIcons
};
var Icon = createIconComponent(iconPack);
export {
  Icon,
  iconPack
};
//# sourceMappingURL=react-native.js.map
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
          /* @__PURE__ */ jsxs2(G, { clipPath: "url(#clip0_1_2)", children: [
            /* @__PURE__ */ jsx3(
              Path2,
              {
                d: "M96 217H216V121.003C216.001 119.952 215.86 118.912 215.586 117.941C215.312 116.969 214.911 116.087 214.405 115.343L159.859 35.3462C159.353 34.6024 158.751 34.0124 158.089 33.6098C157.427 33.2072 156.717 33 156 33C155.283 33 154.573 33.2072 153.911 33.6098C153.249 34.0124 152.647 34.6024 152.141 35.3462L97.5955 115.343C97.0891 116.087 96.6876 116.969 96.4138 117.941C96.14 118.912 95.9994 119.952 96 121.003V217Z",
                fill: color
              }
            ),
            /* @__PURE__ */ jsx3(
              Path2,
              {
                d: "M34 123L68 156L34 189",
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
        /* @__PURE__ */ jsxs2(G, { clipPath: "url(#clip0_1_2)", children: [
          /* @__PURE__ */ jsx3(
            Path2,
            {
              d: "M96 217H216V121.003C216.001 119.952 215.86 118.912 215.586 117.941C215.312 116.969 214.911 116.087 214.405 115.343L159.859 35.3462C159.353 34.6024 158.751 34.0124 158.089 33.6098C157.427 33.2072 156.717 33 156 33C155.283 33 154.573 33.2072 153.911 33.6098C153.249 34.0124 152.647 34.6024 152.141 35.3462L97.5955 115.343C97.0891 116.087 96.6876 116.969 96.4138 117.941C96.14 118.912 95.9994 119.952 96 121.003V217Z",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx3(
            Path2,
            {
              d: "M34 123L68 156L34 189",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        ] }),
        /* @__PURE__ */ jsx3(Defs, { children: /* @__PURE__ */ jsx3(ClipPath, { id: "clip0_1_2", children: /* @__PURE__ */ jsx3(Rect, { width: "256", height: "256", fill: "white" }) }) })
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
          /* @__PURE__ */ jsxs3(G2, { clipPath: "url(#clip0_1_12)", children: [
            /* @__PURE__ */ jsx4(
              Path3,
              {
                d: "M186 128L220 161L186 194",
                fill: color
              }
            ),
            /* @__PURE__ */ jsx4(
              Path3,
              {
                d: "M39 214H159V118.003C159.001 116.952 158.86 115.912 158.586 114.941C158.312 113.969 157.911 113.087 157.405 112.343L102.859 32.3462C102.353 31.6024 101.751 31.0124 101.089 30.6098C100.427 30.2072 99.7168 30 99 30C98.2832 30 97.5734 30.2072 96.9112 30.6098C96.2491 31.0124 95.6475 31.6024 95.1409 32.3462L40.5955 112.343C40.0891 113.087 39.6876 113.969 39.4138 114.941C39.14 115.912 38.9994 116.952 39 118.003V214Z",
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
        /* @__PURE__ */ jsxs3(G2, { clipPath: "url(#clip0_1_12)", children: [
          /* @__PURE__ */ jsx4(
            Path3,
            {
              d: "M186 128L220 161L186 194",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx4(
            Path3,
            {
              d: "M39 214H159V118.003C159.001 116.952 158.86 115.912 158.586 114.941C158.312 113.969 157.911 113.087 157.405 112.343L102.859 32.3462C102.353 31.6024 101.751 31.0124 101.089 30.6098C100.427 30.2072 99.7168 30 99 30C98.2832 30 97.5734 30.2072 96.9112 30.6098C96.2491 31.0124 95.6475 31.6024 95.1409 32.3462L40.5955 112.343C40.0891 113.087 39.6876 113.969 39.4138 114.941C39.14 115.912 38.9994 116.952 39 118.003V214Z",
              stroke: color,
              strokeWidth,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        ] }),
        /* @__PURE__ */ jsx4(Defs2, { children: /* @__PURE__ */ jsx4(ClipPath2, { id: "clip0_1_12", children: /* @__PURE__ */ jsx4(Rect2, { width: "256", height: "256", fill: "white" }) }) })
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
export {
  Icon,
  iconPack
};
//# sourceMappingURL=react-native.js.map
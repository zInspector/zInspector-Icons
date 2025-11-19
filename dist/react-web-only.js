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
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx2(
          "path",
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
var customIcons = {
  MyCustomIcon: MyCustomIconWeb
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
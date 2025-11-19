"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/svg-enhanced.ts
var svg_enhanced_exports = {};
__export(svg_enhanced_exports, {
  getAllAvailableIcons: () => getAllAvailableIcons,
  getIconSvg: () => getIconSvg,
  getIconSvgWithPhosphor: () => getIconSvgWithPhosphor,
  listCustomIconNames: () => listCustomIconNames
});
module.exports = __toCommonJS(svg_enhanced_exports);
var CUSTOM_SVGS = {
  MyCustomIcon: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M128 24L56 152H200L128 24Z" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M128 152V224" stroke="currentColor" stroke-width="16" stroke-linecap="round"/>
  </svg>`,
  // Puedes agregar más iconos custom aquí
  ZInspectorLogo: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="128" cy="128" r="96" stroke="currentColor" stroke-width="16"/>
    <path d="M104 104h48v48h-48z" stroke="currentColor" stroke-width="16" fill="currentColor" opacity="0.2"/>
    <text x="128" y="140" text-anchor="middle" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="currentColor">Z</text>
  </svg>`
};
function getIconSvg(name) {
  if (CUSTOM_SVGS[name]) {
    return CUSTOM_SVGS[name];
  }
  console.warn(`
    \u{1F50D} Icon "${name}" not found in custom icons.
    
    For Phosphor icons in vanilla JS, use @phosphor-icons/web:
    
    1. Install: npm install @phosphor-icons/web
    2. Import: import { ${name} } from "@phosphor-icons/web";
    3. Use: ${name}({ size: 32, color: "#000" })
    
    Or use the combined approach with getPhosphorIcon() function.
  `);
  return null;
}
function listCustomIconNames() {
  return Object.keys(CUSTOM_SVGS);
}
function getAllAvailableIcons() {
  return {
    custom: listCustomIconNames(),
    phosphorInstructions: `
      To use Phosphor icons in vanilla JS:
      
      1. npm install @phosphor-icons/web
      2. import * as PhosphorIcons from "@phosphor-icons/web"
      3. PhosphorIcons.House({ size: 24, color: "#000" })
      
      Popular Phosphor icons: House, Heart, Star, User, Settings, Search, Plus, X, Check, etc.
    `
  };
}
function getIconSvgWithPhosphor(name) {
  if (CUSTOM_SVGS[name]) {
    return CUSTOM_SVGS[name];
  }
  console.info(`
    To integrate with Phosphor Web icons, create this function in your project:
    
    import * as PhosphorIcons from "@phosphor-icons/web";
    import { getIconSvg } from "@zinspector/icons/svg";
    
    function getAnyIcon(name) {
      // Try custom first
      const customSvg = getIconSvg(name);
      if (customSvg) return customSvg;
      
      // Try Phosphor
      const phosphorIcon = PhosphorIcons[name];
      if (phosphorIcon) {
        const div = document.createElement('div');
        div.innerHTML = phosphorIcon({ size: 24 });
        return div.innerHTML;
      }
      
      return null;
    }
  `);
  return null;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getAllAvailableIcons,
  getIconSvg,
  getIconSvgWithPhosphor,
  listCustomIconNames
});
//# sourceMappingURL=svg-enhanced.cjs.map
// src/svg-enhanced.ts
var CUSTOM_SVGS = {
  MyCustomIcon: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M128 24L56 152H200L128 24Z" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M128 152V224" stroke="currentColor" stroke-width="16" stroke-linecap="round"/>
  </svg>`,
  ZCarpetCleaningIcon: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="56" cy="184" r="32" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M86.3,172.9A32.1,32.1,0,0,0,56,120H40V104a32,32,0,0,1,32-32h80" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M86.3,172.9H184V216" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="216" y1="216" x2="232" y2="216" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M200,24H152V176" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M200,24H232V176" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="184" y1="216" x2="248" y2="216" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`
  // Puedes agregar más iconos custom aquí
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
export {
  getAllAvailableIcons,
  getIconSvg,
  getIconSvgWithPhosphor,
  listCustomIconNames
};
//# sourceMappingURL=svg-enhanced.js.map
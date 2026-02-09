// src/svg-enhanced.ts
var CUSTOM_SVGS = {
  MyCustomIcon: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M128 24L56 152H200L128 24Z" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M128 152V224" stroke="currentColor" stroke-width="16" stroke-linecap="round"/>
  </svg>`,
  ZCarpetCleaningIcon: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="61.2807" cy="175.843" r="42.7807" stroke="currentColor" stroke-width="16"/>
    <path d="M31.105 142V104.422C31.105 103.87 31.5527 103.422 32.105 103.422H121.631C145.677 103.422 193.674 124.978 194.05 211.033C194.053 211.585 193.605 212.053 193.052 212.053H89" stroke="currentColor" stroke-width="16"/>
    <path d="M157.842 115.491V33C157.842 31.8954 158.737 31 159.842 31H228.263C229.367 31 230.263 31.8954 230.263 33V212.053M230.263 212.053H218.193M230.263 212.053H242.333" stroke="currentColor" stroke-width="16" stroke-linecap="round"/>
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
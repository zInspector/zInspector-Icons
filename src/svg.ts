/**
 * En un escenario real, este archivo probablemente se genera automáticamente
 * a partir de tus fuentes SVG usando algún script (SVGR, etc.).
 *
 * Acá lo dejamos ejemplificado con unos pocos nombres.
 */

// � Colección expandida de iconos más populares de Phosphor + Custom
const RAW_SVGS: Record<string, string> = {
  // 🏠 ICONOS BÁSICOS
  House: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 128L128 32L224 128V224H160V160H96V224H32Z" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  Heart: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32Z" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  Star: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M128,17.8,148.2,78.9a8.1,8.1,0,0,0,6.9,5.9l61.1,5.3a8.1,8.1,0,0,1,4.6,14.1L175.5,149a8.1,8.1,0,0,0-2.5,7.6l12.9,60.4a8.1,8.1,0,0,1-12,8.7l-55.7-32.2a8.1,8.1,0,0,0-8.4,0L53.1,225.7a8.1,8.1,0,0,1-12-8.7L54,156.6a8.1,8.1,0,0,0-2.5-7.6L6.2,104.2a8.1,8.1,0,0,1,4.6-14.1l61.1-5.3a8.1,8.1,0,0,0,6.9-5.9L98.8,17.8A8.1,8.1,0,0,1,128,17.8Z" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  User: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="128" cy="96" r="64" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // ⚙️ ICONOS DE INTERFAZ
  Gear: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="128" cy="128" r="48" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M183.7,65.9l-8.2,14.2a71.8,71.8,0,0,1,0,48l8.2,14.2a87.8,87.8,0,0,1-21.2,36.8l-16.3-4.5a71.8,71.8,0,0,1-41.6,24l-4.5,16.3a87.8,87.8,0,0,1-36.8-21.2l14.2-8.2a71.8,71.8,0,0,1-24-41.6l-16.3-4.5a87.8,87.8,0,0,1,21.2-36.8l8.2,14.2a71.8,71.8,0,0,1,48,0l14.2-8.2a87.8,87.8,0,0,1,36.8,21.2Z" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  Plus: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="40" y1="128" x2="216" y2="128" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="128" y1="40" x2="128" y2="216" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  X: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="200" y1="56" x2="56" y2="200" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="56" y1="56" x2="200" y2="200" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  Check: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="216,72 104,184 48,128" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // 🔍 ICONOS DE NAVEGACIÓN
  MagnifyingGlass: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="116" cy="116" r="84" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M175.4,175.4,224,224" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  ArrowLeft: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="216" y1="128" x2="40" y2="128" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="112,56 40,128 112,200" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  ArrowRight: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="40" y1="128" x2="216" y2="128" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="144,56 216,128 144,200" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  CaretDown: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="208,96 128,176 48,96" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // 📱 ICONOS SOCIALES Y COMUNICACIÓN
  Phone: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M92.5,124.8a83.6,83.6,0,0,0,38.7,38.7,8,8,0,0,0,7.4-.6l25-16.7a7.9,7.9,0,0,1,7.8-.8l46.8,20.2a7.9,7.9,0,0,1,4.8,7.4v32.8a8,8,0,0,1-8.3,8,120,120,0,0,1-120-120,8,8,0,0,1,8-8.3h32.8a7.9,7.9,0,0,1,7.4,4.8l20.2,46.8a7.9,7.9,0,0,1-.8,7.8Z" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  Envelope: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="224,56 128,144 32,56" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  ChatCircle: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="128" cy="128" r="96" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M79.9,168,48,224l56-31.9A95.9,95.9,0,0,0,128,224h0A96,96,0,1,0,79.9,168Z" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // 🗂️ ICONOS DE ARCHIVOS Y DATOS
  File: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="148,32 148,92 208,92" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M48,108V40a8,8,0,0,1,8-8h96l56,56V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V164" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  Folder: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32,208V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H40A8,8,0,0,1,32,208Z" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  Download: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="128" y1="152" x2="128" y2="40" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="176,104 128,152 80,104" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  Upload: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="128" y1="40" x2="128" y2="152" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="80,88 128,40 176,88" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // 🎨 ICONOS MULTIMEDIA
  Image: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="32" y="48" width="192" height="160" rx="8" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M32,168,88,112a8,8,0,0,1,11.3,0L224,224" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M172,120,200,92a8,8,0,0,1,11.3,0L224,148" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="156" cy="100" r="12" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  Play: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M80,32V224l144-96Z" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  Pause: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="156" y="40" width="40" height="176" rx="8" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="60" y="40" width="40" height="176" rx="8" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // 🔒 ICONOS DE SEGURIDAD
  Lock: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="88" width="176" height="128" rx="8" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M92,88V52a36,36,0,0,1,72,0V88" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="128" cy="152" r="12"/>
  </svg>`,

  Key: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="180" cy="76" r="44" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M149.7,106.3,32,224l24,24,32-32,24,24,32-32L106.3,170.3" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // 🚗 ICONOS DIVERSOS
  Car: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="24" y1="184" x2="40" y2="184" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="216" y1="184" x2="232" y2="184" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="68" cy="184" r="24" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="188" cy="184" r="24" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M92,184H164" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M44,184V152a8,8,0,0,1,8-8H76L92,96H164l16,48h24a8,8,0,0,1,8,8v32" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  Globe: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="128" cy="128" r="96" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <ellipse cx="128" cy="128" rx="40" ry="96" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="37.5" y1="96" x2="218.5" y2="96" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="37.5" y1="160" x2="218.5" y2="160" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // 🌲 ICONOS CUSTOM
  MyCustomIcon: `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M128 24L56 152h144L128 24z" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M128 152v80" stroke="currentColor" stroke-width="16" stroke-linecap="round"/>
  </svg>`
};

/**
 * Devuelve el SVG como string según el nombre único.
 * Ej: getIconSvg("House") → "<svg ...>..."
 */
export function getIconSvg(name: string): string | null {
  return RAW_SVGS[name] ?? null;
}

/**
 * Devuelve todos los nombres disponibles (útil para debug o pickers simples en JS).
 */
export function listIconNames(): string[] {
  return Object.keys(RAW_SVGS);
}

/**
 * Devuelve el número total de iconos disponibles
 */
export function getIconCount(): number {
  return Object.keys(RAW_SVGS).length;
}

/**
 * Busca iconos por categoría o nombre parcial
 */
export function searchIcons(query: string): string[] {
  const lowerQuery = query.toLowerCase();
  return Object.keys(RAW_SVGS).filter(name => 
    name.toLowerCase().includes(lowerQuery)
  );
}

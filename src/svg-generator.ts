/**
 * Generador automático de SVGs desde componentes React
 * Este script convierte todos los componentes de iconos a SVG strings
 */

import * as Phosphor from "phosphor-react";
import { MyCustomIcon } from "./custom/MyCustomIcon";
import { ZCarpetCleaningIcon } from "./custom/ZCarpetCleaningIcon";
import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';

// Filtrar solo los componentes de iconos, excluyendo IconContext
const { IconContext, ...phosphorIcons } = Phosphor;

const customIcons = {
  MyCustomIcon,
  ZCarpetCleaningIcon
};

// Combinar todos los iconos
const allIcons = {
  ...phosphorIcons,
  ...customIcons
};

/**
 * Convierte un componente React a SVG string
 */
function componentToSvg(Component: React.ComponentType<any>, name: string): string | null {
  try {
    // Para iconos custom que usan react-native-svg, necesitamos una versión web
    if (name === 'MyCustomIcon') {
      // Generar SVG para el custom icon
      return `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M128 24L56 152h144L128 24z" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M128 152v80" stroke="currentColor" stroke-width="16" stroke-linecap="round"/>
      </svg>`;
    }

    if (name === 'ZCarpetCleaningIcon') {
      return `<svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="61.2807" cy="175.843" r="42.7807" stroke="#212121" stroke-width="11"/>
<path d="M31.105 142V104.422C31.105 103.87 31.5527 103.422 32.105 103.422H121.631C145.677 103.422 193.674 124.978 194.05 211.033C194.053 211.585 193.605 212.053 193.052 212.053H89" stroke="#212121" stroke-width="11"/>
<path d="M157.842 115.491V33C157.842 31.8954 158.737 31 159.842 31H228.263C229.367 31 230.263 31.8954 230.263 33V212.053M230.263 212.053H218.193M230.263 212.053H242.333" stroke="#212121" stroke-width="11" stroke-linecap="round"/>
</svg>`;
    }

    // Para iconos de Phosphor, renderizar el componente
    const element = React.createElement(Component, {
      size: 24,
      color: 'currentColor',
      weight: 'regular'
    });

    return renderToStaticMarkup(element);
  } catch (error) {
    console.warn(`Error converting ${name} to SVG:`, error);
    return null;
  }
}

/**
 * Genera el objeto completo de SVGs
 */
export function generateAllSvgs(): Record<string, string> {
  const svgs: Record<string, string> = {};

  Object.entries(allIcons).forEach(([name, Component]) => {
    const svg = componentToSvg(Component, name);
    if (svg) {
      svgs[name] = svg;
    }
  });

  return svgs;
}

/**
 * Genera el código del archivo svg.ts completo
 */
export function generateSvgFileContent(): string {
  const svgs = generateAllSvgs();
  const svgEntries = Object.entries(svgs)
    .map(([name, svg]) => `  ${name}: \`${svg}\``)
    .join(',\n');

  return `/**
 * Archivo generado automáticamente - NO EDITAR MANUALMENTE
 * Generado desde componentes React el ${new Date().toISOString()}
 */

const RAW_SVGS: Record<string, string> = {
${svgEntries}
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
`;
}

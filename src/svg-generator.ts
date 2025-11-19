/**
 * Generador automático de SVGs desde componentes React
 * Este script convierte todos los componentes de iconos a SVG strings
 */

import * as Phosphor from "phosphor-react";
import { MyCustomIcon } from "./custom/MyCustomIcon";
import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';

// Filtrar solo los componentes de iconos, excluyendo IconContext
const { IconContext, ...phosphorIcons } = Phosphor;

const customIcons = {
  MyCustomIcon
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

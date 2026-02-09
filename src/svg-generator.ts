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
      return `<svg viewBox="0 0 256 256" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="56" cy="184" r="32" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M86.3,172.9A32.1,32.1,0,0,0,56,120H40V104a32,32,0,0,1,32-32h80" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M86.3,172.9H184V216" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="216" y1="216" x2="232" y2="216" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M200,24H152V176" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M200,24H232V176" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="184" y1="216" x2="248" y2="216" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
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

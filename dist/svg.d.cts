/**
 * En un escenario real, este archivo probablemente se genera automáticamente
 * a partir de tus fuentes SVG usando algún script (SVGR, etc.).
 *
 * Acá lo dejamos ejemplificado con unos pocos nombres.
 */
/**
 * Devuelve el SVG como string según el nombre único.
 * Ej: getIconSvg("House") → "<svg ...>..."
 */
declare function getIconSvg(name: string): string | null;
/**
 * Devuelve todos los nombres disponibles (útil para debug o pickers simples en JS).
 */
declare function listIconNames(): string[];
/**
 * Devuelve el número total de iconos disponibles
 */
declare function getIconCount(): number;
/**
 * Busca iconos por categoría o nombre parcial
 */
declare function searchIcons(query: string): string[];

export { getIconCount, getIconSvg, listIconNames, searchIcons };

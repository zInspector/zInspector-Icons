/**
 * Enhanced SVG module that combines Phosphor Icons Web with custom icons
 * Uses @phosphor-icons/web for vanilla JS compatibility
 */
/**
 * Gets an icon SVG string by name
 * First checks custom icons, then falls back to instructions for using Phosphor Web
 */
declare function getIconSvg(name: string): string | null;
/**
 * Lists all available custom icon names
 */
declare function listCustomIconNames(): string[];
/**
 * Enhanced function that combines custom + Phosphor icons
 * Requires @phosphor-icons/web to be installed in the consumer project
 */
declare function getAllAvailableIcons(): {
    custom: string[];
    phosphorInstructions: string;
};
/**
 * Helper function for projects that have @phosphor-icons/web installed
 * This is pseudocode - the actual implementation would be in the consumer project
 */
declare function getIconSvgWithPhosphor(name: string): string | null;

export { getAllAvailableIcons, getIconSvg, getIconSvgWithPhosphor, listCustomIconNames };

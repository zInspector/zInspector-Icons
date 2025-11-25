import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    "react-web-only": "src/react-web-only.tsx",
    "react-web": "src/react-web.tsx", 
    "react-native": "src/react-native.tsx",
    "svg-enhanced": "src/svg-enhanced.ts",
    "svg-generator": "src/svg-generator.ts"
  },
  format: ["cjs", "esm"], // Both CommonJS and ES modules
  dts: true, // Generate TypeScript declarations
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: false, // Keep readable for debugging
  external: [
    "react",
    "react-dom", 
    "react-native",
    "react-native-svg",
    "phosphor-react",
    "phosphor-react-native"
  ]
});

# zInspector Icons

Private icon library for zInspector React Native apps. Includes Phosphor icons + custom icons.

## Installation

### Install from GitHub
```bash
npm install git+https://github.com/zInspector/zInspector-Icons.git
```

### Required Dependencies for React Native
```bash
npm install phosphor-react-native react-native-svg
```

### iOS Setup
```bash
cd ios && pod install
```

## Usage in React Native

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from "zInspector-Icons/react-native";

export default function MyScreen() {
  return (
    <View style={styles.container}>
      {/* Phosphor icons with different weights */}
      <Icon name="House" size={32} color="#007AFF" />
      <Icon name="Heart" size={28} color="#FF3B30" weight="fill" />
      <Icon name="Star" size={30} color="#FFCC02" weight="bold" />
      <Icon name="User" size={24} color="#8E8E93" weight="light" />
      
      {/* Custom zInspector icons */}
      <Icon name="MyCustomIcon" size={32} color="#34C759" weight="bold" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
});
```

### Simple Usage
```tsx
import { Icon } from "zInspector-Icons/react-native";

// Basic usage
<Icon name="House" size={24} />

// With color and weight
<Icon name="Heart" size={32} color="red" weight="fill" />

// Custom icon
<Icon name="MyCustomIcon" size={28} color="#007AFF" />
```

## Available Icons

### 🎨 Phosphor Icons
All [Phosphor Icons](https://phosphoricons.com/) are available with support for weights:
- `thin` - Thinnest stroke
- `light` - Light stroke  
- `regular` - Default weight
- `bold` - Bold stroke
- `fill` - Filled version

Examples: `House`, `Heart`, `Star`, `User`, `Bell`, `Settings`, `Search`, etc.

### 🔧 Custom zInspector Icons
- `MyCustomIcon` - Custom tree icon (example)
- Add more custom icons in `src/custom/`

## Adding Custom Icons

1. Create a new `.tsx` file in `src/custom/` following the `MyCustomIcon.tsx` pattern
2. Use `react-native-svg` components (`Svg`, `Path`, `Circle`, etc.)
3. Support the `IconProps` interface (size, color, weight)
4. Export from `src/react-native.tsx`
5. Rebuild with `npm run build`

Example custom icon:
```tsx
import React from "react";
import type { IconProps } from "../types";
import Svg, { Path } from "react-native-svg";

export const MyNewIcon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = weight === "bold" ? 3 : weight === "light" ? 1.5 : 2;
  
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" fill="none">
      <Path
        d="M128 32L224 128L128 224L32 128L128 32z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
```

## Development

```bash
# Clone the repository
git clone https://github.com/zInspector/zInspector-Icons.git
cd zInspector-Icons

# Install dependencies
npm install

# Build the library
npm run build
```

## Project Structure

```
src/
├── react-native.tsx    # React Native exports
├── react-web.tsx       # Web React exports  
├── svg.ts             # Raw SVG exports
├── types.ts           # TypeScript interfaces
├── IconFactory.tsx    # Icon component factory
└── custom/            # Custom zInspector icons
    └── MyCustomIcon.tsx
```

## Repository

**GitHub**: [https://github.com/zInspector/zInspector-Icons](https://github.com/zInspector/zInspector-Icons)

---
*Private library for zInspector projects only*

# zInspector Icons

Private icon library for zInspector React Native apps. Includes Phosphor icons + custom icons.

## Installation

### Install from GitHub

#### Using npm
```bash
npm install git+https://github.com/zInspector/zInspector-Icons.git
```

#### Using yarn
```bash
yarn add zinspector-icons@github:zInspector/zInspector-Icons
```

### Required Dependencies

#### For React Native
```bash
# Using npm
npm install phosphor-react-native react-native-svg

# Using yarn
yarn add phosphor-react-native react-native-svg
```

#### For Web Dashboard
```bash
# Using npm
npm install phosphor-react react react-dom

# Using yarn
yarn add phosphor-react react react-dom
```

### iOS Setup (React Native only)
```bash
cd ios && pod install
```

### Important: Installation & Import Differences

#### With npm
```bash
# Installation
npm install git+https://github.com/zInspector/zInspector-Icons.git

# Import (package name from package.json)
import { Icon } from "zInspector-Icons/react-web";      // Dashboard
import { Icon } from "zInspector-Icons/react-native";   // React Native
```

#### With yarn
```bash
# Installation (requires explicit package name)
yarn add zinspector-icons@github:zInspector/zInspector-Icons

# Import (yarn normalizes to lowercase-hyphenated)
import { Icon } from "zinspector-icons/react-web";      // Dashboard
import { Icon } from "zinspector-icons/react-native";   // React Native
```

> **Note**: Yarn requires the `package-name@github:owner/repo` format and normalizes the package name to `zinspector-icons`.

### Quick Setup Examples

#### Dashboard Project with Yarn
```bash
# In your dashboard project directory
yarn add zinspector-icons@github:zInspector/zInspector-Icons
yarn add phosphor-react react react-dom

# Start using immediately
import { Icon } from "@zinspector/icons/src/react-native";
```

#### React Native Project with Yarn
```bash
# In your React Native project directory
yarn add zinspector-icons@github:zInspector/zInspector-Icons
yarn add phosphor-react-native react-native-svg
cd ios && pod install  # iOS only

# Start using immediately
import { Icon } from "zinspector-icons/react-native";
```

## Usage

### React Native App

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
// With npm
import { Icon } from "zInspector-Icons/react-native";
// With yarn
// import { Icon } from "zinspector-icons/react-native";

export default function MyScreen() {
  return (
    <View style={styles.container}>
      {/* Phosphor icons with different weights */}
      <Icon name="House" size={32} color="#007AFF" />
      <Icon name="Heart" size={32} color="#FF3B30" weight="fill" />
      <Icon name="Star" size={32} color="#FFCC02" weight="bold" />
      <Icon name="User" size={32} color="#8E8E93" weight="light" />
      
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

### Web Dashboard

```tsx
import React from 'react';
// With npm
import { Icon } from "zInspector-Icons/react-web";
// With yarn  
// import { Icon } from "zinspector-icons/react-web";

export default function DashboardComponent() {
  return (
    <div className="dashboard-container">
      {/* Navigation icons */}
      <nav className="sidebar">
        <Icon name="House" size={20} color="#6c757d" />
        <Icon name="Users" size={20} color="#6c757d" />
        <Icon name="ChartBar" size={20} color="#6c757d" />
        <Icon name="Settings" size={20} color="#6c757d" />
      </nav>

      {/* Header with notifications */}
      <header className="header">
        <Icon name="Bell" size={24} color="#007bff" />
        <Icon name="User" size={24} color="#28a745" weight="fill" />
      </header>

      {/* Action buttons */}
      <div className="actions">
        <button className="btn btn-primary">
          <Icon name="Plus" size={16} color="white" weight="bold" />
          Add New
        </button>
        
        <button className="btn btn-secondary">
          <Icon name="Download" size={16} color="#6c757d" />
          Export
        </button>
        
        <button className="btn btn-danger">
          <Icon name="Trash" size={16} color="white" weight="bold" />
          Delete
        </button>
      </div>

      {/* Status indicators */}
      <div className="status-cards">
        <div className="card">
          <Icon name="TrendUp" size={32} color="#28a745" weight="bold" />
          <span>Revenue Up</span>
        </div>
        
        <div className="card">
          <Icon name="Users" size={32} color="#007bff" weight="fill" />
          <span>New Users</span>
        </div>
        
        <div className="card">
          <Icon name="ShoppingCart" size={32} color="#ffc107" weight="bold" />
          <span>Orders</span>
        </div>
      </div>

      {/* Custom icons */}
      <div className="custom-section">
        <Icon name="MyCustomIcon" size={48} color="#e74c3c" weight="bold" />
      </div>
    </div>
  );
}
```

#### Dashboard Usage Patterns

```tsx
// Table actions
<td className="actions">
  <Icon name="Eye" size={16} color="#007bff" /> {/* View */}
  <Icon name="PencilSimple" size={16} color="#28a745" /> {/* Edit */}
  <Icon name="Trash" size={16} color="#dc3545" /> {/* Delete */}
</td>

// Form inputs with icons
<div className="input-group">
  <Icon name="MagnifyingGlass" size={18} color="#6c757d" />
  <input type="text" placeholder="Search..." />
</div>

<div className="input-group">
  <Icon name="Envelope" size={18} color="#6c757d" />
  <input type="email" placeholder="Email address" />
</div>

// Loading states
<button disabled={loading}>
  {loading ? (
    <Icon name="CircleNotch" size={16} color="white" className="spinning" />
  ) : (
    <Icon name="FloppyDisk" size={16} color="white" />
  )}
  Save Changes
</button>

// Alerts and notifications
<div className="alert alert-success">
  <Icon name="CheckCircle" size={20} color="#28a745" weight="fill" />
  Operation completed successfully!
</div>

<div className="alert alert-warning">
  <Icon name="Warning" size={20} color="#ffc107" weight="fill" />
  Please review your settings.
</div>

<div className="alert alert-error">
  <Icon name="XCircle" size={20} color="#dc3545" weight="fill" />
  Something went wrong.
</div>
```

#### Common Dashboard Components

```tsx
// Data tables with icons
function DataTable({ data }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <Icon name="User" size={16} color="#6c757d" />
            Name
          </th>
          <th>
            <Icon name="Envelope" size={16} color="#6c757d" />
            Email
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>
              <button className="btn-icon" title="View">
                <Icon name="Eye" size={16} color="#007bff" />
              </button>
              <button className="btn-icon" title="Edit">
                <Icon name="PencilSimple" size={16} color="#28a745" />
              </button>
              <button className="btn-icon" title="Delete">
                <Icon name="Trash" size={16} color="#dc3545" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Sidebar navigation
function Sidebar({ currentPage }) {
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: 'House' },
    { id: 'users', name: 'Users', icon: 'Users' },
    { id: 'analytics', name: 'Analytics', icon: 'ChartBar' },
    { id: 'settings', name: 'Settings', icon: 'Gear' },
  ];

  return (
    <nav className="sidebar">
      {menuItems.map((item) => (
        <a
          key={item.id}
          href={`/${item.id}`}
          className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
        >
          <Icon 
            name={item.icon} 
            size={20} 
            color={currentPage === item.id ? '#007bff' : '#6c757d'} 
          />
          {item.name}
        </a>
      ))}
    </nav>
  );
}

// Status badges
function StatusBadge({ status }) {
  const statusConfig = {
    active: { icon: 'CheckCircle', color: '#28a745' },
    pending: { icon: 'Clock', color: '#ffc107' },
    inactive: { icon: 'XCircle', color: '#dc3545' },
  };

  const config = statusConfig[status];
  
  return (
    <span className={`badge badge-${status}`}>
      <Icon name={config.icon} size={14} color={config.color} weight="fill" />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

// Search and filters
function SearchFilters({ onSearch, onFilter }) {
  return (
    <div className="search-filters">
      <div className="search-box">
        <Icon name="MagnifyingGlass" size={18} color="#6c757d" />
        <input
          type="text"
          placeholder="Search users..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      
      <div className="filters">
        <button className="filter-btn">
          <Icon name="Funnel" size={16} color="#6c757d" />
          Filter
        </button>
        
        <button className="sort-btn">
          <Icon name="ArrowsUpDown" size={16} color="#6c757d" />
          Sort
        </button>
      </div>
    </div>
  );
}
```

### Web Only (Pure SVG)
For web-only components that need maximum performance:

```tsx
import { Icon } from "zInspector-Icons/react-web-only";

<Icon name="MyCustomIcon" size={24} color="#007bff" />
```

### Simple Usage Examples

```tsx
// React Native
import { Icon } from "zinspector-icons/react-native";

// Web Dashboard  
import { Icon } from "zinspector-icons/react-web";

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

### Step-by-Step Guide

#### 1. Create the Icon Component

Create a new `.tsx` file in `src/custom/` directory. Name it descriptively (e.g., `MoveInIcon.tsx`):

```tsx
// src/custom/MoveInIcon.tsx
import React from "react";
import type { IconProps } from "../types";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";

export const MoveInIcon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  // Map weight to stroke width
  const strokeWidth = 
    weight === "thin" ? 8 :
    weight === "light" ? 12 :
    weight === "bold" ? 24 :
    weight === "fill" ? 0 : // No stroke for filled icons
    16; // regular

  // For filled icons, use fill instead of stroke
  const iconProps = weight === "fill" 
    ? { fill: color, stroke: "none" }
    : { stroke: color, strokeWidth, fill: "none" };

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
    >
      {/* Your custom SVG paths here */}
      <Path
        d="M128 32L224 128L128 224L32 128L128 32z"
        {...iconProps}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx="128"
        cy="128"
        r="32"
        {...iconProps}
      />
    </Svg>
  );
};
```

#### 2. Export from React Native Module

Add your icon to `src/react-native.tsx`:

```tsx
// src/react-native.tsx
import React from "react";
import * as PhosphorNative from "phosphor-react-native";
import type { IconProps } from "./types";
import { createIconComponent, IconPack as IconPackType } from "./IconFactory";

import { MyCustomIcon } from "./custom/MyCustomIcon";
import { MoveInIcon } from "./custom/MoveInIcon"; // Add this line
import { MoveOutIcon } from "./custom/MoveOutIcon"; // Add this line

const customIcons: Record<string, React.ComponentType<IconProps>> = {
  MyCustomIcon,
  MoveInIcon, // Add this line
  MoveOutIcon // Add this line
};

// ...rest of the file
```

#### 3. Export from Web Module

Add your icon to `src/react-web.tsx`:

```tsx
// src/react-web.tsx
import React from "react";
import * as Phosphor from "phosphor-react";
import type { IconProps } from "./types";
import { createIconComponent, IconPack as IconPackType } from "./IconFactory";

import { MyCustomIcon } from "./custom/MyCustomIcon";
import { MoveInIcon } from "./custom/MoveInIcon"; // Add this line
import { MoveOutIcon } from "./custom/MoveOutIcon"; // Add this line

const customIcons: Record<string, React.ComponentType<IconProps>> = {
  MyCustomIcon,
  MoveInIcon, // Add this line
  MoveOutIcon // Add this line
};

// ...rest of the file
```

#### 4. Create Web-Only Version (Optional)

If you need a web-only version with pure HTML SVG, add to `src/react-web-only.tsx`:

```tsx
// Add to src/react-web-only.tsx
const MoveInIconWeb: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = 
    weight === "thin" ? 8 :
    weight === "light" ? 12 :
    weight === "bold" ? 24 :
    16; // default regular
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_2)">
        <path
          d="M96 217H216V121.003C216.001 119.952 215.86 118.912 215.586 117.941C215.312 116.969 214.911 116.087 214.405 115.343L159.859 35.3462C159.353 34.6024 158.751 34.0124 158.089 33.6098C157.427 33.2072 156.717 33 156 33C155.283 33 154.573 33.2072 153.911 33.6098C153.249 34.0124 152.647 34.6024 152.141 35.3462L97.5955 115.343C97.0891 116.087 96.6876 116.969 96.4138 117.941C96.14 118.912 95.9994 119.952 96 121.003V217Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34 123L68 156L34 189"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_2">
          <rect width="256" height="256" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

// Add to customIcons object
const customIcons: Record<string, React.ComponentType<IconProps>> = {
  MyCustomIcon: MyCustomIconWeb,
  MoveInIcon: MoveInIconWeb, // Add this line
  MoveOutIcon: MoveOutIconWeb, // Add this line
};
```

#### 5. Add SVG String Export (Optional)

For raw SVG usage, add to `src/svg.ts`:

```tsx
// src/svg.ts
const customIconSvgs: Record<string, string> = {
  MyCustomIcon: `<svg viewBox="0 0 256 256" fill="none">...</svg>`,
  MoveInIcon: `<svg viewBox="0 0 256 256" fill="none">
    <g clip-path="url(#clip0_1_2)">
      <path d="M96 217H216V121.003C216.001 119.952 215.86 118.912 215.586 117.941C215.312 116.969 214.911 116.087 214.405 115.343L159.859 35.3462C159.353 34.6024 158.751 34.0124 158.089 33.6098C157.427 33.2072 156.717 33 156 33C155.283 33 154.573 33.2072 153.911 33.6098C153.249 34.0124 152.647 34.6024 152.141 35.3462L97.5955 115.343C97.0891 116.087 96.6876 116.969 96.4138 117.941C96.14 118.912 95.9994 119.952 96 121.003V217Z" stroke="currentColor" stroke-width="16"/>
      <path d="M34 123L68 156L34 189" stroke="currentColor" stroke-width="16"/>
    </g>
  </svg>`, // Add this line
  MoveOutIcon: `<svg viewBox="0 0 256 256" fill="none">
    <g clip-path="url(#clip0_1_12)">
      <path d="M186 128L220 161L186 194" stroke="currentColor" stroke-width="16"/>
      <path d="M39 214H159V118.003C159.001 116.952 158.86 115.912 158.586 114.941C158.312 113.969 157.911 113.087 157.405 112.343L102.859 32.3462C102.353 31.6024 101.751 31.0124 101.089 30.6098C100.427 30.2072 99.7168 30 99 30C98.2832 30 97.5734 30.2072 96.9112 30.6098C96.2491 31.0124 95.6475 31.6024 95.1409 32.3462L40.5955 112.343C40.0891 113.087 39.6876 113.969 39.4138 114.941C39.14 115.912 38.9994 116.952 39 118.003V214Z" stroke="currentColor" stroke-width="16"/>
    </g>
  </svg>`, // Add this line
};
```

#### 6. Build the Library

```bash
# Using npm
npm run build

# Using yarn
yarn build
```

#### 7. Use Your Custom Icon

```tsx
// React Native (npm)
import { Icon } from "zInspector-Icons/react-native";
<Icon name="MoveInIcon" size={32} color="#007AFF" weight="bold" />
<Icon name="MoveOutIcon" size={32} color="#ff3b30" weight="bold" />

// React Native (yarn)
import { Icon } from "zinspector-icons/react-native";
<Icon name="MoveInIcon" size={32} color="#007AFF" weight="bold" />
<Icon name="MoveOutIcon" size={32} color="#ff3b30" weight="bold" />

// Web Dashboard (npm)
import { Icon } from "zInspector-Icons/react-web";
<Icon name="MoveInIcon" size={24} color="#333" />
<Icon name="MoveOutIcon" size={24} color="#333" />

// Web Dashboard (yarn)
import { Icon } from "zinspector-icons/react-web";
<Icon name="MoveInIcon" size={24} color="#333" />
<Icon name="MoveOutIcon" size={24} color="#333" />
```

### Icon Creation Tips

#### Best Practices
- **Use consistent viewBox**: Always use `viewBox="0 0 256 256"` to match Phosphor icons
- **Support all weights**: Implement `thin`, `light`, `regular`, `bold`, and `fill` weights
- **Use semantic naming**: Choose descriptive names like `MoveInIcon`, `MoveOutIcon`, `CompanyLogo`
- **Optimize paths**: Use simple, clean SVG paths for better performance

#### Weight Implementation
```tsx
// Stroke-based icons
const strokeWidth = 
  weight === "thin" ? 8 :
  weight === "light" ? 12 :
  weight === "bold" ? 24 :
  16; // regular

// Handle fill weight
if (weight === "fill") {
  return <Path d="..." fill={color} stroke="none" />;
}

return <Path d="..." stroke={color} strokeWidth={strokeWidth} fill="none" />;
```

#### SVG Components Available
- `Path` - For complex shapes
- `Circle` - For circular elements  
- `Rect` - For rectangular shapes
- `Line` - For straight lines
- `Polyline` - For connected lines
- `Polygon` - For closed shapes
- `Ellipse` - For oval shapes

### Example: Complete Custom Icon

```tsx
// src/custom/NotificationBell.tsx
import React from "react";
import type { IconProps } from "../types";
import Svg, { Path } from "react-native-svg";

export const NotificationBell: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  weight = "regular"
}) => {
  const strokeWidth = 
    weight === "thin" ? 8 :
    weight === "light" ? 12 :
    weight === "bold" ? 24 :
    16;

  if (weight === "fill") {
    return (
      <Svg width={size} height={size} viewBox="0 0 256 256" fill="none">
        <Path
          d="M221.8 175.94C216.25 166.38 208 139.33 208 104a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06ZM128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216Z"
          fill={color}
        />
      </Svg>
    );
  }

  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" fill="none">
      <Path
        d="M96 192h64a32 32 0 0 1-64 0Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76H41.1c6.6-11.4 14.9-40.18 14.9-76Z"
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

### Setup
```bash
# Clone the repository
git clone https://github.com/zInspector/zInspector-Icons.git
cd zInspector-Icons

# Install dependencies
npm install
# or
yarn install
```

### Building the Library
```bash
# Build all modules (required before publishing/using)
npm run build
# or
yarn build

# Watch mode for development
npm run build:watch
# or  
yarn build:watch

# Clean build output
npm run clean
# or
yarn clean
```

### Build Output
The build process generates:
```
dist/
├── react-native.js         # ES modules
├── react-native.cjs        # CommonJS  
├── react-native.d.ts       # TypeScript declarations
├── react-web.js
├── react-web.cjs
├── react-web.d.ts
├── react-web-only.js
├── react-web-only.cjs
├── react-web-only.d.ts
└── ... (other modules + source maps)
```

### Important Notes

> **📦 Compiled files are included in Git**: Unlike typical applications, this library ships the `dist/` folder in the repository. This ensures users get pre-compiled JavaScript when installing from GitHub, preventing "Unexpected token" errors in Next.js and other frameworks.

> **🔧 Always build after changes**: Run `npm run build` after making changes before testing or publishing. The compiled files in `dist/` must be kept in sync with source code.

### Why We Include dist/ in Git

**For Libraries (this repo)**: ✅ Include `dist/` 
- Users get compiled JS immediately
- No build step required for consumers  
- Works with Next.js, Vite, etc. out of the box

**For Applications**: ❌ Exclude `dist/`
- Build on deployment
- Keeps repo clean
- CI/CD handles building

## Project Structure

```
src/
├── react-native.tsx    # React Native exports (uses react-native-svg)
├── react-web.tsx       # Web Dashboard exports (uses phosphor-react)
├── react-web-only.tsx  # Web-only pure SVG exports
├── svg.ts             # Raw SVG string exports
├── types.ts           # TypeScript interfaces
├── IconFactory.tsx    # Icon component factory
└── custom/            # Custom zInspector icons
    └── MyCustomIcon.tsx
```

## Dashboard Icon Categories

### Navigation & Layout
- `House`, `Buildings`, `SquaresFour` - Home and sections
- `List`, `Rows`, `Columns` - Layout options
- `CaretLeft`, `CaretRight`, `CaretUp`, `CaretDown` - Navigation

### Actions & Operations  
- `Plus`, `Minus`, `X` - Basic actions
- `PencilSimple`, `Trash`, `Copy`, `Download` - CRUD operations
- `FloppyDisk`, `CloudArrowUp`, `Export` - Save/export actions

### Data & Analytics
- `ChartBar`, `ChartLine`, `ChartPie` - Charts
- `TrendUp`, `TrendDown` - Trends
- `Calendar`, `Clock`, `Timer` - Time-related

### User & Social
- `User`, `Users`, `UserCircle` - User management
- `Heart`, `Star`, `ThumbsUp` - Engagement
- `Bell`, `ChatCircle`, `Envelope` - Communication

### Status & Alerts
- `CheckCircle`, `XCircle`, `Warning` - Status indicators
- `Info`, `Question`, `Exclamation` - Information states
- `Eye`, `EyeSlash` - Visibility toggles

### System & Settings
- `Gear`, `Wrench`, `Sliders` - Settings
- `Lock`, `Key`, `Shield` - Security
- `Database`, `Server`, `Globe` - System resources

## Available Exports

### With npm
- `zInspector-Icons/react-native` - For React Native apps
- `zInspector-Icons/react-web` - For web dashboard (default)
- `zInspector-Icons/react-web-only` - For web-only pure SVG
- `zInspector-Icons/svg` - For raw SVG strings

### With yarn
- `zinspector-icons/react-native` - For React Native apps
- `zinspector-icons/react-web` - For web dashboard (default)
- `zinspector-icons/react-web-only` - For web-only pure SVG
- `zinspector-icons/svg` - For raw SVG strings

## Repository

**GitHub**: [https://github.com/zInspector/zInspector-Icons](https://github.com/zInspector/zInspector-Icons)

---
*Private library for zInspector projects only*

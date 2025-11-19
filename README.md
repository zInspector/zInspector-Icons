# @zinspector/icons

Shared icon library (Phosphor + custom) for web, React Native and raw SVG usage.

## Installation

```bash
npm install @zinspector/icons
```

## Usage

### React Web (Dashboard)

```tsx
import { Icon } from "@zinspector/icons/react-web";
// o import { Icon } from "@zinspector/icons";

<Icon name="House" size={24} color="#333" />
<Icon name="MyCustomIcon" size={32} color="green" />
```

### React Native

```tsx
import { Icon } from "@zinspector/icons/react-native";

<Icon name="House" size={24} color="#333" />
<Icon name="MyCustomIcon" size={32} color="green" weight="bold" />
```

### Raw SVG (JS común)

```javascript
import { getIconSvg } from "@zinspector/icons/svg";

const svg = getIconSvg("MyCustomIcon");
if (svg) {
  document.getElementById("icon-slot").innerHTML = svg;
}
```

## Development

```bash
npm install
npm run build
```

## Structure

- `src/react-web.tsx` - Para Dashboard (React)
- `src/react-native.tsx` - Para app mobile
- `src/svg.ts` - Para usar SVG "pelado" en JS común por nombre
- `src/custom/` - Iconos personalizados
- `src/types.ts` - Tipos compartidos
- `src/IconFactory.tsx` - Fábrica de iconos

## License

MIT

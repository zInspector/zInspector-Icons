// Use react-web-only since it doesn't have React Native dependencies
import { iconPack } from './dist/react-web-only.js';

console.log('🧪 Testing React Web Icons...\n');

console.log('📦 Looking for custom icons...');
const customIcons = Object.keys(iconPack).filter(name => 
  ['MyCustomIcon', 'MoveInIcon', 'MoveOutIcon'].includes(name)
);
console.log('Custom icons found:', customIcons);

console.log('\n✅ MyCustomIcon exists:', 'MyCustomIcon' in iconPack);
console.log('✅ MoveInIcon exists:', 'MoveInIcon' in iconPack);
console.log('✅ MoveOutIcon exists:', 'MoveOutIcon' in iconPack);

console.log('\n📊 Icon Statistics:');
console.log('   Total icons in react-web pack:', Object.keys(iconPack).length);
console.log('   Custom icons available:', customIcons.length);

console.log('\n🎉 React Web test completed!');

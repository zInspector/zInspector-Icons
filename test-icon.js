import { Icon, iconPack } from './dist/react-web-only.js';

console.log('🧪 Testing MoveInIcon...\n');

// Test 1: Check if MoveInIcon is in the icon pack
console.log('📦 Looking for custom icons...');
const customIconNames = ['MyCustomIcon', 'MoveInIcon'];
const availableCustoms = customIconNames.filter(name => name in iconPack);
console.log('Custom icons found:', availableCustoms);

// Test 2: Check if MoveInIcon exists
const hasMoveInIcon = 'MoveInIcon' in iconPack;
console.log(`\n✅ MoveInIcon exists: ${hasMoveInIcon}`);

// Test 3: Check icon component
if (hasMoveInIcon) {
  const MoveInIconComponent = iconPack.MoveInIcon;
  console.log(`✅ MoveInIcon is a component: ${typeof MoveInIconComponent === 'function'}`);
  console.log(`✅ Component name: ${MoveInIconComponent.name}`);
}

// Test 4: Count total icons
const totalIcons = Object.keys(iconPack).length;
console.log(`\n📊 Icon Statistics:`);
console.log(`   Total icons in pack: ${totalIcons}`);
console.log(`   Custom icons available: ${availableCustoms.length}`);

console.log('\n🎉 Test completed!');

import { iconPack } from './dist/react-web-only.js';

console.log('🧪 Testing Move Icons...\n');

console.log('📦 Looking for custom icons...');
const customIcons = Object.keys(iconPack).filter(name => 
  ['MyCustomIcon', 'MoveInIcon', 'MoveOutIcon'].includes(name)
);
console.log('Custom icons found:', customIcons);

console.log('\n✅ MoveInIcon exists:', 'MoveInIcon' in iconPack);
console.log('✅ MoveInIcon is a component:', typeof iconPack.MoveInIcon === 'function');
if (iconPack.MoveInIcon) {
  console.log('✅ Component name:', iconPack.MoveInIcon.name || 'Anonymous');
}

console.log('\n✅ MoveOutIcon exists:', 'MoveOutIcon' in iconPack);
console.log('✅ MoveOutIcon is a component:', typeof iconPack.MoveOutIcon === 'function');
if (iconPack.MoveOutIcon) {
  console.log('✅ Component name:', iconPack.MoveOutIcon.name || 'Anonymous');
}

console.log('\n📊 Icon Statistics:');
console.log('   Total icons in pack:', Object.keys(iconPack).length);
console.log('   Custom icons available:', customIcons.length);

console.log('\n🎉 Move Icons test completed!');

const fs = require('fs');
let content = fs.readFileSync('app/components/Chapters.tsx', 'utf8');
content = content.replace(/padding: "8rem 0"/g, 'padding: "8rem var(--pad)"');
content = content.replace(/paddingLeft: '4rem'/g, "paddingLeft: '2.5rem', paddingRight: '1rem'");
content = content.replace(/left: '-4rem'/g, "left: '-2.5rem'");
fs.writeFileSync('app/components/Chapters.tsx', content);
console.log('Fixed Chapters.tsx');

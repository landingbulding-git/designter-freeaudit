const fs = require('fs');
const path = require('path');

const dirs = [
  'src/components/ingyenes-audit',
  'src/components/ingyenes-audit-original'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
  files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('lucide-react')) {
      content = content.replace(/from\s+['"]lucide-react['"]/g, "from '../InlineIcons'");
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${filePath}`);
    }
  });
});

const { renderToStaticMarkup } = require('react-dom/server');
const React = require('react');
const lucide = require('lucide-react');
const fs = require('fs');

const iconsToExtract = [
  'BrainCircuit', 'Zap', 'Smartphone', 'AlertTriangle', 'Star', 'ClipboardCheck', 
  'Video', 'MailOpen', 'Award', 'ShieldCheck', 'Stethoscope', 'PenTool', 'Layout', 
  'LineChart', 'MousePointer2', 'CheckCircle2', 'ChevronDown', 'ChevronUp', 
  'ArrowRight', 'Users', 'ShieldAlert', 'TrendingDown', 'TrendingUp', 'XCircle', 
  'UserCheck', 'CheckCircle', 'Lock', 'AlertCircle', 'ArrowLeft'
];

let output = '';

iconsToExtract.forEach(iconName => {
  const IconComponent = lucide[iconName];
  if (!IconComponent) {
    console.error(`Icon ${iconName} not found!`);
    return;
  }
  
  // Render to static markup
  const svgString = renderToStaticMarkup(React.createElement(IconComponent));
  
  // Convert standard SVG string to a React component string
  let reactSvg = svgString
    .replace('class="', 'className="')
    .replace('stroke-width="', 'strokeWidth="')
    .replace('stroke-linecap="', 'strokeLinecap="')
    .replace('stroke-linejoin="', 'strokeLinejoin="')
    .replace(/<svg([^>]+)>/, '<svg$1 {...props}>');
  
  output += `export const ${iconName} = (props: any) => (\n  ${reactSvg}\n);\n\n`;
});

fs.writeFileSync('src/components/InlineIcons.tsx', `import React from 'react';\n\n${output}`);
console.log('Successfully generated src/components/InlineIcons.tsx');

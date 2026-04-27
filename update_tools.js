import fs from 'fs';

const rawData = fs.readFileSync('new_tools_data.txt', 'utf8');
const lines = rawData.trim().split('\n');

const newTools = [];

for (const line of lines) {
  const parts = line.split('\t');
  if (parts.length < 7) continue;

  let [section, category, name, url, normalizedLink, pricing, description] = parts;
  
  category = category.trim();
  if (category.startsWith('u ')) {
    category = category.substring(2).trim();
  } else if (!category) {
    category = section.trim();
  }

  // Generate an ID
  const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  // Categorize into the appropriate layer
  let layer = 'fullstack';
  const catLower = category.toLowerCase();
  const secLower = section.toLowerCase();
  
  if (secLower.includes('browser') || catLower.includes('terminal') || catLower.includes('editor') || 
      catLower.includes('note') || catLower.includes('time') || catLower.includes('password') || 
      catLower.includes('file') || catLower.includes('calendar') || catLower.includes('task') || 
      catLower.includes('office') || catLower.includes('font') || catLower.includes('video') || 
      catLower.includes('audio') || catLower.includes('image') || catLower.includes('design') ||
      catLower.includes('whiteboard') || catLower.includes('communication') || catLower.includes('messaging')) {
    layer = 'foundation';
  } else if (secLower.includes('cloud') || secLower.includes('devops') || catLower.includes('vpn') || 
             catLower.includes('firewall') || catLower.includes('message') || catLower.includes('caching') ||
             catLower.includes('antivirus') || catLower.includes('encryption') || catLower.includes('penetration')) {
    layer = 'cloud';
    if (secLower.includes('devops')) layer = 'devops';
  } else if (secLower.includes('ai ') || secLower.includes('machine learning') || catLower.includes('ai ') || 
             catLower.includes('llm') || catLower.includes('ai')) {
    layer = 'genai';
  } else if (secLower.includes('data') || secLower.includes('analytics') || catLower.includes('search')) {
    layer = 'analytics';
  }

  newTools.push({
    id,
    name: name.trim(),
    description: description.trim(),
    category: category,
    layer: layer,
    officialUrl: normalizedLink.trim() || `https://${url.trim()}`,
    freeTierDetails: pricing.trim(),
    tags: [category.toLowerCase().replace(/[^a-z0-9]+/g, '-')]
  });
}

// Map them to TypeScript object syntax
let tsObjects = newTools.map(t => {
  return `  {
    id: '${t.id}',
    name: '${t.name.replace(/'/g, "\\'")}',
    description: '${t.description.replace(/'/g, "\\'")}',
    category: '${t.category.replace(/'/g, "\\'")}',
    layer: '${t.layer}',
    officialUrl: '${t.officialUrl}',
    freeTierDetails: '${t.freeTierDetails.replace(/'/g, "\\'")}',
    tags: ['${t.tags[0]}']
  }`;
}).join(',\n');

const targetPath = 'src/data/tools.ts';
let toolsTs = fs.readFileSync(targetPath, 'utf8');

const endOfArrayRegex = /\n\];/;
if (toolsTs.match(endOfArrayRegex)) {
  toolsTs = toolsTs.replace(endOfArrayRegex, `,\n${tsObjects}\n];`);
  fs.writeFileSync(targetPath, toolsTs);
  console.log(`Successfully parsed and appended ${newTools.length} tools to src/data/tools.ts!`);
} else {
  console.error('Could not find the end of the tools array. The script may need updating.');
}

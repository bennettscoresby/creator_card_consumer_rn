const fs = require('fs');

// Read the file
const filePath = 'marqeta-sdk/api.ts';
const content = fs.readFileSync(filePath, 'utf8');

// Find all occurrences of the duplicate enum declaration
const enumPattern = /export const ResendWebhookEventEventTypeEnum = \{[^}]+\} as const;\nexport type ResendWebhookEventEventTypeEnum = typeof ResendWebhookEventEventTypeEnum\[keyof typeof ResendWebhookEventEventTypeEnum\];/g;

let matches = [];
let match;
while ((match = enumPattern.exec(content)) !== null) {
  matches.push({
    start: match.index,
    end: match.index + match[0].length,
    text: match[0]
  });
}

console.log(`Found ${matches.length} duplicate enum declarations`);

if (matches.length > 1) {
  // Keep the first one, remove the rest
  let newContent = content;
  
  // Remove duplicates from the end to avoid index shifting
  for (let i = matches.length - 1; i >= 1; i--) {
    const before = newContent.substring(0, matches[i].start);
    const after = newContent.substring(matches[i].end);
    newContent = before + after;
    console.log(`Removed duplicate ${i + 1} at position ${matches[i].start}`);
  }
  
  // Write the fixed content back
  fs.writeFileSync(filePath, newContent);
  console.log('✅ Fixed duplicate enum declarations');
} else {
  console.log('No duplicates found to fix');
}

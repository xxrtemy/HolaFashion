/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable-next-line no-undef*/
const fs = require('fs');

// Получаем путь к файлу сообщения коммита из первого аргумента
const commitMessagePath = process.argv[2];

if (!commitMessagePath) {
    console.error('❌ Commit message file path is not provided.');
    process.exit(1);
}

const commitMessage = fs.readFileSync(commitMessagePath, 'utf8');

const tag = '[ESLint Passed]';
if (!commitMessage.includes(tag)) {
    console.log('✅ Adding ESLint success tag to the commit message...');
    fs.writeFileSync(commitMessagePath, `${commitMessage.trim()} ${tag}\n`);
    console.log('✅ Tag added successfully!');
} else {
    console.log('ℹ️ Tag already present in the commit message.');
}
mkdir .setup build data models data src srv &&
cd src/ &&
mkdir html css scss js json svg md drawio &&
cd ../ &&
node groq-fs.js &&
npm run start

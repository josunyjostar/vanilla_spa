import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

console.log(__dirname);
app.use(express.static(path.join(__dirname, '/src')));

//새로고침시 index.html 파일 전송
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(port, () => {
  console.log(`server is listening on port :${port}`);
});

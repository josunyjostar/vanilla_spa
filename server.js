import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

console.log(__dirname);
app.use(express.static(path.join(__dirname, '/src')));

app.listen(port, () => {
  console.log(`server is listening on port :${port}`);
});

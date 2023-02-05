import express from 'express';
const app = express();
app.set('trust proxy', true);

app.get('/', async (req, res) => {
  const ip = req.ip;
  res.send(ip);
});

app.listen(3000, () => {
  console.log('Server listening on 3000');
});

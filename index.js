const express = require('express');
const app = express();

app.use(express.json());

app.get('/frame', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send({
    frames: [
      {
        version: 'vNext',
        image: 'https://placekitten.com/600/400',
        postUrl: '/action',
        buttons: [{ label: 'Нажми кота 🐱' }]
      }
    ]
  });
});

app.post('/action', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send({
    frames: [
      {
        version: 'vNext',
        image: 'https://placekitten.com/600/401',
        postUrl: '/action',
        buttons: [{ label: 'Ещё раз 🔁' }]
      }
    ]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
});
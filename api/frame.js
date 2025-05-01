export default function handler(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
      frames: [
        {
          version: 'vNext',
          image: 'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg',
          postUrl: 'https://warpcast-mini-app-three.vercel.app/api/action',
          buttons: [{ label: 'Нажми кота 🐱' }]
        }
      ]
    });
  }
  
export default function handler(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
      frames: [
        {
          version: 'vNext',
          image: 'https://placekitten.com/600/401',
          postUrl: 'https://warpcast-mini-app-three.vercel.app/api/action',
          buttons: [{ label: 'Ещё раз 🔁' }]
        }
      ]
    });
  }
  
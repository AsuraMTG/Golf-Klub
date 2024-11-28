import express from 'express';

const router = express.Router();

export const routes = express.Router();

router.get('/', (req, res) => {
  res.send('Ugyfel útvonal');
});

router.get('/:uazon', (req, res) => {
    let uazon = req.params.uazon;
    res.send(uaozn + 'Ugyfel útvonal');
  });

export default router;
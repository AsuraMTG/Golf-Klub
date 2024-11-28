import express from 'express';

const router = express.Router();

export const routes = express.Router();

router.get('/', (req, res) => {
  res.send('Jelenlet útvonal');
});

export default router;
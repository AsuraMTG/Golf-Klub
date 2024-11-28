import express from 'express';

const router = express.Router();

export const routes = express.Router();

router.get('/', (req, res) => {
  res.send('Befizetes útvonal');
});

export default router;
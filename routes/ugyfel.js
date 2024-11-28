import express from 'express';

const router = express.Router();

export const routes = express.Router();

router.get('/', (req, res) => {
  res.send('Ugyfel útvonal');
});

router.put('/:uazon', (req, res) => {
    const { uazon } = req.params;
    res.send(`Ugyfel adatainak lekérése, azonosító: ${uazon}`);
});

router.delete('/:uazon', (req, res) => {
    const { uazon } = req.params;
    res.send(`Ugyfel adatainak lekérése, azonosító: ${uazon}`);
});

router.post('/register', (req, res) => {
    res.send('Regisztrációs útvonal');
});

router.post('/login', (req, res) => {
    res.send('Bejelentkezési útvonal');
});

export default router;
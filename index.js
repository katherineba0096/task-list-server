const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const app = express();
const PORT = 3000;


dotenv.config();


app.use(express.json());


const users = [
    { username: 'usuario1', password: 'contraseña1' },
    { username: 'usuario2', password: 'contraseña2' },
];


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ username }, process.env.SECRET_KEY, { expiresIn: '1h' });

    res.json({ token });
});


const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({ error: 'Token no proporcionado' });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Token inválido' });
        }

        req.user = decoded;
        next();
    });
};


app.get('/ruta-protegida', verifyToken, (req, res) => {
    res.json({ message: 'Ruta protegida alcanzada', user: req.user });
});


app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});


app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});

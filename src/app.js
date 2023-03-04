import express from "express"

const app = express();

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

app.listen(PORT, () => console.log('server running on port 3001'));
const express = require('express');
/* const { createUsers } = require('./models') */
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3001

app.get('/registration', async (req, res) => {
    const { 
      email,
      password
    } = req
/* 
    await createUsers.create(req.body) */

    return res.status(200).json({ message: "cadastrado com sucesso!" });
});

app.listen(PORT, () => console.log('server running on port 3001'));
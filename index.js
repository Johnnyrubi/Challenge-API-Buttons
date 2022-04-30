const express = require('express');
const { Button } = require('./models');
const controller = require('./controllers');

const app = express();
app.use(express.json());
const PORT = 3000;


app.get('/', (controller.getAll));

/* app.get('/:id', ());

app.post('/', ());

app.put('/:id', ());

app.delete('/:id', ()); */

app.use((erro, _req, res, _next) => {
    if(erro.statusCode) {
        const { status, message } = erro.statusCode
        return res.status(status).json({ message })
    } 
    return res.status(500).json({ message: "erro no servidor" });
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

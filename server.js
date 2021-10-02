const express = require('express');
const app = express();

const appName = 'frontend'

const outputPath = `${__dirname}/dist/${appName}`;

const PORT = process.env.PORT || 8080;

app.use(express.static(outputPath));

app.get('/*', (req, res)=>{
    res.sendFile(`${outputPath}/index.html`);
})

app.listen(PORT, ()=> {
    console.log('Servidor iniciado na porta ' + PORT);
})
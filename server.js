const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3005;
const HOST = '0.0.0.0'; // Definindo o endereço IP

app.use(bodyParser.json());
app.use(cors());

let recipes = [];

// Carregar receitas do arquivo JSON ao iniciar o servidor
async function loadRecipes() {
    try {
        const data = await fs.readFile('recipes.json');
        recipes = JSON.parse(data);
    } catch (error) {
        console.error('Erro ao carregar as receitas:', error);
    }
}

// Salvar receitas no arquivo JSON
async function saveRecipes() {
    try {
        await fs.writeFile('recipes.json', JSON.stringify(recipes, null, 2));
    } catch (error) {
        console.error('Erro ao salvar as receitas:', error);
    }
}

// Rota para listar todas as receitas
app.get('/recipes', (req, res) => {
    res.json(recipes);
});

// Rota para adicionar uma nova receita
app.post('/recipes', async (req, res) => {
    const newRecipe = req.body;
    newRecipe.userName = req.body.userName; // Adicionando o nome do usuário
    recipes.push(newRecipe);
    await saveRecipes();
    res.status(201).send('Receita adicionada com sucesso!');
});

// Iniciar o servidor
app.listen(PORT, HOST, () => {
    console.log(`Servidor rodando em http://${HOST}:${PORT}`);
    loadRecipes();
});

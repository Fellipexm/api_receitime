
A API de Receitas é um serviço RESTful desenvolvido para gerenciar receitas de culinária. Ela permite que os usuários criem, visualizem, atualizem e excluam receitas por meio de chamadas HTTP.

Recursos Principais
Listar Receitas: Endpoint para recuperar todas as receitas cadastradas.

Método HTTP: GET
Rota: /recipes
Resposta: Retorna um array de objetos JSON, cada um representando uma receita.
Adicionar Receita: Endpoint para adicionar uma nova receita.

Método HTTP: POST
Rota: /recipes
Corpo da Requisição: Um objeto JSON contendo os detalhes da nova receita, incluindo nome, ingredientes, instruções e o nome do usuário que adicionou a receita.
Resposta: Retorna uma mensagem indicando o sucesso da operação.
Estrutura dos Dados
Cada receita é representada por um objeto JSON com os seguintes campos:

userName: Nome do usuário que adicionou a receita.
recipeName: Nome da receita.
ingredients: Lista de ingredientes necessários para a receita.
instructions: Instruções passo a passo para preparar a receita.

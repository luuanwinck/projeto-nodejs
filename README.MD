Projeto CRUD em Node.js
Este é um projeto de exemplo de um CRUD (Create, Read, Update, Delete) em Node.js. O projeto utiliza um banco de dados SQLite, que pode ser encontrado no arquivo node_exe.db.

Instalação
Todas as dependências estão instaladas nesta pasta. Utilize o Xampp e importe o banco de dados contido no arquivo "node_exe.db".
utilize o http://localhost:5000/ para acessar o BD.

Endpoints
A seguir, estão listados os endpoints disponíveis no projeto:

GET 5000/
Retorna uma lista de todos os usuários cadastrados.

GET 5000/:id
Retorna os dados de um usuário específico, com base no parâmetro id.

POST 5000/
Cria um novo usuário. É necessário enviar um objeto JSON no corpo da requisição, contendo os campos nome e email.

PUT 5000/
Atualiza os dados de um usuário específico, com base no parâmetro id. É necessário enviar um objeto JSON no corpo da requisição, contendo os campos nome e email.

DELETE 5000/:id
Remove um usuário específico, com base no parâmetro id.

Testando com o Postman
Para testar os endpoints do projeto utilizando o Postman, é necessário importar a coleção de requisições que está armazenada em um arquivo com extensão .json. O arquivo chama-se node_projeto_postman.

Após importar a coleção, você poderá visualizar e testar os endpoints do seu projeto CRUD diretamente no Postman.

Conclusão
Este projeto é apenas um exemplo básico de um CRUD em Node.js utilizando um banco de dados SQLite. Ele pode ser utilizado como ponto de partida para o desenvolvimento de projetos mais complexos.
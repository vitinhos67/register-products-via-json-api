# Registrar Produtos via JSON


## Sobre
A API possibilita ao vendedor cadastrar seus produtos através de uma lista em um arquivo JSON ou através do corpo da requisição, basta mandar todos dados corretamentes.


O objetivo e colocar em pratica os metodos estudados por mim. Eles são,  async, child_process, multer e também a implementação de testes (Jest).

## Feito com

- [Node.js](https://nodejs.org/pt-br/) - JavaScript runtime
- [Express](https://expressjs.com/pt-br/) - O framework web utilizado
- [MySQL](https://www.mysql.com/) - Base de dados Relacional
- [NPM](https://www.npmjs.com/) - Gerenciador de pacotes e dependências

<hr>

Para rodar o projeto e necessario ter o Docker ou algum servidor local do mysql e adiciona-lo no arquivo .env

```
host: <hospedeiro>
user: <usuario>
password: <senha>
database: <nome_database>
port: <porta>
```

Caso optar pelo docker, utilize o docker compose com o comando abaixo para subir o servidor

```
// Como usuario root
docker compose --env-file .env up -d

//como usuario sem privilegios
sudo docker compose --env-file .env up -d
```

Com o servidor MySQL de pé, basta instalar os modulos e logo após inicializar a API.

```
// baixa os modulos necessarios
npm install
// iniciar o servidor
npm start
```

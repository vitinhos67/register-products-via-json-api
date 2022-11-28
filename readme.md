# Registrar Produtos via Json-File

A API consiste em mandar um arquivo JSON para a rota /file e cadastrar produtos fictícios via um arquivo JSON. O objetivo e colocar em pratica os metodos nativos do Node, "Async, Process" e também utilizar o Multer para trabalhar com o upload de arquivos,

<hr>


Para rodar o projeto e necessario ter o Docker ou algum servidor local do mysql

Caso obte pelo docker, utilize o docker compose com o comando abaixo para subir o servidor 

```
docker compose --env-file .env up -d
```


Com o servidor MySQL de pé, basta instalar os modulos e logo após inicializar a API.
```
npm install // baixa os modulos necessarios

npm start   // inicia o servidor
```

# Registrar Produtos via Json-File

A API consiste em mandar um arquivo JSON para a rota /file e cadastrar produtos fictícios via um arquivo JSON. O objetivo e colocar em pratica os metodos nativos do Node, "Async, Process" e também utilizar o Multer para trabalhar com o upload de arquivos,

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

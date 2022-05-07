<h1 align='center'>Widget - Server</h1>
<h3 align='center'>
  <a href="#tecnologias">Tecnologias</a> |
  <a href="#sobre">Sobre</a> |
  <a href="#pre-requisitos">Ver o projeto</a>
</h3>

# Tecnologias
Para a construção do projeto utilizei as seguintes tecnologias:
  <ul> 
    <li>NodeJS</li>
    <li>JavaScript</li>
    <li>TypeScript</li>
    <li>Prisma</li>
  </ul>

# Sobre
<p>
  O projeto é a criação de um widget onde possa ser enviado feedbacks de uma aplicação.
</p>
<p> Criado para o NLW Return  da <a target="_blank" href="https://www.rocketseat.com.br/">Rocketseat.</a></p>

## Funcionalidades

  - [X]Salvamento no banco de dados
  - [X]Envio de email

# Pre-requisitos

Para testar o projeto na sua maquina você irá precisar das seguintes ferramentas:
[Git](https://git-scm.com/), [Node](https://nodejs.org/en/). Além disso é ideal usar um bom editor para trabalhar com código como o [VSCode](https://code.visualstudio.com/). 

```bash
#Clone este repositorio

$ git clone <https://github.com/viteydev/nlw-return-impulse-server>

#Lembre-se de acessar a pasta do projeto

$ cd nlw-return-impulse-server

#Assim que estiver na pasta, adicione o seguinte comando
#Dessa forma as dependencias da aplicação serão baixadas e o projeto podera funcionar corretamente.

$ npm install

#Agora basta iniciar o projeto

$ npm run dev

#O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```

Por se tratar de um servidor é recomendado usar apps que façam requisições http por você como por exemplo o [insomnia](https://insomnia.rest/download).

```bash
#Abaixo o modelo de JSON que deve ser enviado.

{
	"type": "BUG" ou "IDEA" ou "OTHER",
	"comment": ""
}

```


#### Feito por Vitor para o NLW return 👍 | Veja meu [Linkedin](https://www.linkedin.com/in/vitor-lemos-1a61b3238/)

## CURSO DE NODE

Professor valdair elaborata

Os arquivos:

> 1. package.json
> 2. package-lock.json

Serão versionados. 

O node_modules vai para o .gitignore  

npm init crio o projeto node

npm install alguma coisa, ele cria a pasta noder_modules

Posso apagar a pasta node_modules, por exemplo para versionar e depois consigo remontar o projeto com o comando "npm install" (sem nada depois do install). 

sudo npm install express

##### swagger  ########

sudo npm install swagger-autogen
sudo npm i swagger-ui-express
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger_output.json')
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument))

#### disponibilizando um mongo

Mongoose comunica com o banco

atlas - 
https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjdx6KOqsL5AhU2Q0gAHWx7BQQYABABGgJjZQ&ohost=www.google.com&cid=CAESWOD2vznRlvUFJlgDXh82yNNpvgPIo16cCiKtWsnjC0W7Ezkwdm-CuWuOU39mmt4cwRxtn2I_kt5aC9aZbdeTAG3CrotQGpoIz9LuLSj5a57ErPS9QwlLAbc&sig=AOD64_06ziAhEDCizAXrJUNiHJsd-ubudw&q&adurl&ved=2ahUKEwixpJyOqsL5AhVPJrkGHd_VD6oQ0Qx6BAgDEAE

https://mongoosejs.com/

[19:39] valdairelaborata (Convidado)
    
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

<https://teams.microsoft.com/l/message/19:Tjq-XqrsJhpQe7PxhboHT9j2LeJVzhoy3WAXTRo4YjI1@thread.tacv2/1660343996682?tenantId=f138c62b-ba24-43bc-acda-1e759859d452&amp;groupId=c288cabe-f020-4040-87e1-b4c631dd6a4d&amp;parentMessageId=1660340810190&amp;teamName=Back-End com NodeJs, Npm, Yarn e MongoDB - 12797&amp;channelName=Geral&amp;createdTime=1660343996682>

Meddlewares

express-validator

jsonwebtoken

Build bancoMongoose a65f3471

git flow
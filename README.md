# mbaFiap-adrianoAndersonGustavoLuisPaulo-cadastro
Projeto de conclusão da disciplina de DESENVOLVIMENTO DE MICROSSERVIÇOS E APIS - MBA FIAP

<br><br>
# Lista dos participantes da equipe
  -  Adriano Bastos e Silva (rm344764)
  - Anderson Andre dos Santos (rm344968)
  - Gustavo Souza Rodrigues (rm344770)
  - Luis Fernando de Sena Carita (rm344775)
  - Paulo Roberto Petrillo (rm344779)

<br>
<br>

## O Projeto foi realizado como treinamento da aula de desenvolvimento microserviços e apis

- Ele consiste numa aplicação para realizar as seguintes funções:
  - Cadastrar um usuário;
  - Criptografar a senha do usuário cadastrado;
  - Autenticar usuário;
  - Gerar token JWT;
  - Alterar senha;

<br><br>

## Requisitos:
- node versão 14.19.1 ou superior;
- instalar nodemon, com o comando abaixo: 
  ```
  npm install nodemon
  ```

## Rodando o projeto:
  - Para rodar o projeto é necessário rodar o comando:
    ```
    npm install && npm start
    ```

# Rotas:
## - Cadastro:
  - **POST:**
    - http://localhost:3000/api/usuarios/cadastro
    - body:
      ~~~JSON
      {
        "nomeusuario": "SEU_NOME_DE_USUARIO",
        "email": "SEU_EMAIL@EMAIL.COM.BR",
        "senha": "SUA_SENHA",
        "nomecompleto": "SEU_NOME_COMPLETO",
        "telefone": "SEU_TELEFONE"
      }
      ~~~
    
    <br>

  - **RETORNOS ESPERADOS:**
      <br>
      - **status (200)**
        ~~~JSON
        {
          "output": "Cadastro realizado",
          "payload": {
            "output": "Cadastro realizado",
            "payload": {
              "nomeusuario": "SEU_NOME_DE_USUARIO",
              "email": "SEU_EMAIL@EMAIL.COM.BR",
              "senha": "$2b$10$9O.C2jMEde3SILNuoFxlsuhiwYRJvbux3YM.5NYBIp.c9fimgVKdW",
              "nomecompleto": "SEU_NOME_COMPLETO",
              "telefone": "SEU_TELEFONE",
              "_id": "636970691e1c2477af688cdd",
              "datacriacao": "2022-11-07T20:54:01.999Z",
              "__v": 0
            }
          }
        }
        ~~~

      - **status (500)**
        ~~~JSON
        {
          "output": "Erra ao tentar gerar a senha -> Error: data and salt arguments required"
        }
        ~~~
  
  <br><br><br>
  
  ## - LOGIN:
  - **POST:**
    - http://localhost:3000/api/usuarios/login
    - body:
      ~~~JSON
      {
	      "nomeusuario": "SEU_NOME_DE_USUARIO",
    	  "senha": "SUA_SENHA"
      }
      ~~~
    
    <br>

  - **RETORNOS ESPERADOS:**
    - **status (200):**
      ~~~JSON
      {
        "output": "Autenticado",
        "idusuario": "6369663be4632a23fa085650",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjk2NjNiZTQ2MzJhMjNmYTA4NTY1MCIsImVtYWlsIjoidGVzdGVAdGVzdGUuY29tLmJyIiwiaWF0IjoxNjY3ODUyNzY0LCJleHAiOjE2Njc4NTk5NjR9.uKCWZTo17wCTLAvEBUZL3W0MFiwXvUG2QyYt_zHFB28"
      };
      ~~~

    - **status (400):**
      ~~~JSON
      {
        "output": "Usuário não localizado"
      }
      ~~~

<br><br><br>

 ## - ATUALIZAR:
  - **PUT:**
    - http://localhost:3000/api/usuarios/atualizar/6369772b95871b244b24cec9
    - body:
      ~~~JSON
      {
	      "nomeusuario": "SEU_NOME_DE_USUARIO",
    	  "senha": "SUA_SENHA"
      }
      ~~~
    - header: 
      ```
      token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjk2NjNiZTQ2MzJhMjNmYTA4NTY1MCIsImVtYWlsIjoidGVzdGVAdGVzdGUuY29tLmJyIiwiaWF0IjoxNjY3ODUyNzY0LCJleHAiOjE2Njc4NTk5NjR9.uKCWZTo17wCTLAvEBUZL3W0MFiwXvUG2QyYt_zHFB28
      ```
    
    <br>

  - **RETORNOS ESPERADOS:**
    - **status (202):**
      ~~~JSON
      {
        "output":"Atualizado",
        "payload":{"_id":"6369772b95871b244b24cec9",
        "nomeusuario":"SEU_NOME_DE_USUARIO_1",
        "email":"SEU_EMAIL_1@EMAIL.COM.BR",
        "senha":"$2b$10$UAq9vcH0XrwT73XaNUOhOudN6GWtxb8fnzLIgD8IFWih/GtDBMKp6",
        "nomecompleto":"SEU_NOME_COMPLETO_1",
        "telefone":"SEU_TELEFONE",
        "datacriacao":"2022-11-07T21:22:51.579Z",
        "__v":0}
      };
      ~~~

    - **status (400):**
      ~~~JSON
      {
        "output": "Não foi possível atualizar -> null"
      };
      ~~~
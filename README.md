🎲 Utilizando projeto
---------------------

### ▪️ Baixando projeto e instalando dependências

Para utilizar o projeto basta fazer o fork do repositório em computador e ao baixar realizar o download das dependências do site com o comando: `yarn`

### ▪️ Iniciando visualização do projeto

Ao finalizar o download das dependências, inicie a visualização do projeto em ambiente de desenvolvimento com o comando: `yarn dev`

  
  

* * *

🗂 Estrutura de pastas
----------------------

Todas as pastas são comuns de um projeto React, porém queremos chamar atenção para alguns arquivos que são fundamentais para a customização das informações no site

Segue as informações sobre cada um:

*   #### 🗂 Pasta utils
    
    _Nessa pasta você encontrará dois arquivos que ficarão responsáveis pelas informações exibidas no portfólio_
    
    *   **📄 userData.ts**
        
        _Nesse arquivo você pode fazer a troca das informações do objeto **UserData** para que reflita nas informações do portfólio_
        
        *   **nameUser:** _Nome que aparecerá como logotipo da página, bem como em outras seções onde existe alguma apresentação pessoal_
            
        *   **githubUser:** _Essa informação é bastante importante para que os repositórios sejam exibidos, bem como o link do seu github e a imagem de perfil que ficará disponível na página_
            
        *   **linkedinUser:** _Inserindo o usuário do seu linkedin será gerado um link para que os usuários acessem seu LinkedIn_
            
        *   **whatsappNumber:** _Nessa propriedade você precisará inserir seu DDD junto com o seu número do whatsapp, assim quem clicar no link "whatsapp" irá ser enviado para o seu contato já com uma mensagem pré-definida_

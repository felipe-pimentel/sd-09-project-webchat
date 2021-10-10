# Webchat

## Considerações Iniciais

Este é um fork de um projeto individual que foi desenvolvido durante o curso de Desenvolvimento Web Full Stack na [Trybe](https://www.betrybe.com/).

Todo o código de minha autoria pode ser visto nos arquivos:
- [models/messagesModel.js](https://github.com/felipe-pimentel/sd-09-project-webchat/blob/master/models/messagesModel.js)
- [public/script.js](https://github.com/felipe-pimentel/sd-09-project-webchat/blob/master/public/script.js)
- [public/style.css](https://github.com/felipe-pimentel/sd-09-project-webchat/blob/master/public/style.css)
- [server.js](https://github.com/felipe-pimentel/sd-09-project-webchat/blob/master/server.js)
- [sockets/webchat.js](https://github.com/felipe-pimentel/sd-09-project-webchat/blob/master/sockets/webchat.js)
- [views/webchat.ejs](https://github.com/felipe-pimentel/sd-09-project-webchat/blob/master/views/webchat.ejs)

**Todo código além dos encontrados nesses arquivos citados são de autoria do time de instrução da Trybe.**

### Enunciado original

>Neste projeto você vai desenvolver um _chat_ online e ao utilizar essa aplicação um usuário deverá ser capaz de:
>
> - Usar um front-end para enviar mensagens a clientes conectados;
> - Visualizar o histórico de mensagens da conversa;
> - Visualizar os usuários online no momento;
> - Alterar o nome de usuário no chat em tempo real;
>
>O desenho abaixo demonstra como o projeto pode ser estruturado ao decorrer do desenvolvimento, use a sua criatividade para surpreender! 🧑‍🎨
>
>![image](./exemplo.png)
>
>
>Para entregar o seu projeto você deverá criar um Pull Request neste repositório.
>
>Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!
>
>**Desenvolvimento**
>
>Deverá ser desenvolvida uma aplicação `Node.js` de _chat_, usando `socket.io` para emitir eventos e atualizar estado no servidor e cliente.
>
>Através do cliente será possível enviar e receber mensagens, trocar seu nome, ver usuários online.
>
>O MVC será usado para renderizar as mensagens do histórico e usuários online, com ambos vindo direto do servidor.

### Habilidades avaliadas

>- Conseguir desenvolver um server socket usando o socket.io;
>- Emitir eventos personalizados usando o socket.io;
>- Usar o pacote `socket.io` do Node.js para criar aplicações que trafeguem mensagens através de sockets.

## Desempenho

Requisitos | Desempenho
---------- | -----------
Totais | 100%

- [x] 1 - Crie um back-end para conexão simultaneamente de clientes e troca de mensagens em chat público
- [x] 2 - Crie um frontend para que as pessoas interajam com o chat
- [x] 3 - Elabore o histórico do chat para que as mensagens persistam
- [x] 4 - Informe a todos os clientes quem está online no momento

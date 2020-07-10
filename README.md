

##### [Link do layout](https://www.figma.com/file/BOZqx8uK9NQ9IxbhVhyung96/Profit-e---Teste-de-Layout?node-id=0%3A1)




# Considerações Desenvolvedor

Olá Arthur eu sou Rafael Costa e estou participando de um processo seletivo com vocês. 

Aqui deixarei considerações de como foi desenvolver o layout proposto.

Para rodar esse projeto basta fazer um clone para sua maquina e dentro da pasta /frontend rodar o comando `npm start`

### 1 - Tecnologias
##### HTML5 CSS3
Utilizei ReactJs para construir os elementos com a biblioteca Styled-Components para estilizar. 

##### Não usar Framework :(
Essa parte eu até perguntei pra Mauren e ela disse q seria nao usar frameworks como bootstrap, materialize, etc.
Eu já gosto de fazer meu propio css mesmo rs.

##### Interação com JSON para renderizar os produtos
Eu deixei um arquivo modelo do Json q eu carrego dos produtos, porem o json esta hospedado como exemplo de requisição http para carregar os dados. Fiz a requisição utilizando o Axios e resgatando a url do ambiente.

##### Javascript sem plugins e modular
Essa parte confesso nao ter entendido oque vc quiz dizer com "sem plugins e modular". Interpretei que seria sem utilizar plugins para criar os components como um plugin para prateleira ou um plugin separado para construir e controlar o banner. Assim eu criei esse components utilizando somente os recursos do React do CSS e do JavaScript. Só acabei utilizando de um plugin para trabalhar a responsividade da prateleira, mas explico melhor abaixo.

##### Grunt, Gulp ou similar
Hj em dia eu quase nao me preocupo muito com esses cara, porque com o auxilio do create-react-app vc consegue simplesmente ter todo ambiente de Uglify, Minify, rotinas de teste todos ja preconfigurados, oque é uma mao na roda em relação a gente configurar tudo isso manualmente antigamente. Mesmo assim eu posso dar um npm `run eject` e posso remodelar essas configurações, mas deixo claro q tenho o conhecimento de configurar esses caras sem a utilização do `create-react-app`.

##### Responsividade
Aqui eu fui usando `@media` "media query do css" em cada componente adaptando ao breakpoint, isso direto com Styled-Components. 
A unica ressalva aqui é que a responsividade da prateleira alterava a quantidade de produtos com o meu component de paginação eu precisaria redenrizar o component denovo e pra recuperar esse evento de responsividade eu utilizei um hook do "react-media". 

### Considerações Gerais
Eu comcei executar esse layout segunda-feira dia 6/7 e encerrei para entrega agora sexta-feira dia 10/7

Nesse tempo eu nao comecei implementar as funcionalidades do layout como a troca de idioma, uma simulação de usuario para logar e descologar e carregar produtos do storage para ver quantos tem no carrinho a parte da pesquisa e as funcionalidades dos botoes do rodapé.

No mais o layout eu considero pronto para homologação e refatoraçao.



##### redes sociais
GitHub: https://github.com/Stramp
linkedin: https://linkedin.com/rafaelcostart2
### Obrigado
Rafael Costa (Stramp)
11 9 3286-0501 
rafaelcostart2@gmail.com
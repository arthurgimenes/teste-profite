

##### [Link do layout](https://www.figma.com/file/BOZqx8uK9NQ9IxbhVhyung96/Profit-e---Teste-de-Layout?node-id=0%3A1)




# Considerações Desenvolvedor

Olá Arthur, me chamo Rafael e estou participando do processo seletivo da Profite para a cargo de Desenvolvedor FrontEnd.
Para rodar esse projeto basta fazer um clone para sua maquina e dentro da pasta /frontend rodar o comando `npm start`

Segue abaixo considerações de como foi desenvolver o layout proposto.


### 1 - Tecnologias
##### HTML5 CSS3
Para a construção dos elementos foi utilizado ReactJs/JSX que constroi minha DOM com base em uma Virtual DOM onde ele trabalha as alterações antes de renderiza-las como html no navegador. 

##### Não usar Framework :(
Conforme informado pela Sra. Mauren anteriormente, para não utilizar frameworks como Bootstrap, Materialize, dentro outros, particularmente tenho preferência por desenvolver meu próprio código CSS.

##### Interação com JSON para renderizar os produtos
Foi deixado um arquivo modelo do Json onde os produtos são carregados, embora o Json esteja hospedado como exemplo de requisição http para carregar os dados, e já na requisição, foi utilizado o Axios para resgatar a url que foi setada como variavel de ambiente. 

##### Javascript sem plugins e modular
Eu interpretei que seria sem utilizar plug-ins para criar os componentes como por exemplo um plug-in para prateleira ou um outro separado para construir e controlar o banner. Desta forma criei os componentes utilizando somente recursos do React, do CSS e JavaScript. Somente para trabalhar a responsividade da prateleira que foi utilizado um plug-in, conforme esclarecido melhor abaixo.

##### Grunt, Gulp ou similar
Com o auxílio do `create-react-app` é possível ter todo ambiente de configuração de Uglify, Minify, rotinas de teste todos já pré-configurados, o que simplifica bastante o processo de configuração levando em conta todo o processo manual e trabalhoso que era feito antigamente mas, mesmo assim posso fazer um `npm run eject` e remodelar as configurações conforme desejado. Contudo deixo claro que posso fazer a configuração sem utilizar do create-react-app normalmente. 

##### Responsividade
Nesta parte segui utilizando `@media` (media query do css) em cada componente adaptando-o ao breakpoint diretamente com Styled-Components. A única ressalva aqui é que a responsividade da prateleira, que alterava a quantidade de produtos a serem exibidos, com o meu componente de paginação foi preciso resgatar o evento de mudança de viewrport para rendenrizar o componente com a quantidade certa de produtos a serem exibidos. E para recuperar esse evento de responsividade utilizei o hook do "react-media".

### Considerações Gerais
Eu comcei executar esse layout segunda-feira dia 6/7 e encerrei para entrega agora sexta-feira dia 10/7

Nesse tempo eu nao comecei implementar as funcionalidades do layout como a troca de idioma, uma simulação de usuario para logar e descologar e carregar produtos do storage para ver quantos tem no carrinho a parte da pesquisa e as funcionalidades dos botoes do rodapé.

No mais o layout eu considero pronto para homologação e refatoraçao.



#### redes sociais
##### GitHub: https://github.com/Stramp
##### linkedin: https://linkedin.com/rafaelcostart2
### Obrigado
##### Rafael Costa (Stramp)
11 9 3286-0501 
rafaelcostart2@gmail.com
# Comentários

- Só duas media-queries foram feitas, seguindo o design.
- O círculo do carrinho foi aumentado levemente para melhorar a legibilidade.
- A ordem dos botões de carrinho e "Minha Conta" foram trocados, pois não ficou claro o que acontece com o botão "Minha Conta" no viewport Mobile, mas eu assumi que ele vai para o menu offset acionado pelo ícone do canto superior esquerdo. Escolhi fazer uma solução puramente em CSS, e para isso ele precisa ser colocado dentro de um elemento pai cujo estilo mudará de acordo com o tamanho do viewport. Ao ser colocado dentro deste elemento pai, é este pai que passa a responder ao atributo "order" aplicado aos outros elementos da linha, seus "irmãos".
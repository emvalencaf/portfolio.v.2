# Portfólio v.2

## Sobre

Esse projeto foi desenvolvido usando typescript, ReactJS e NextJS, a ideia foi refatorar o projeto desenvolvido neste [repositório](https://github.com/emvalencaf/portfolio).

## Considerações

### Os components MenuLink e LogoLink
Ao invés de usar a props ``hostname`` do objeto [location](https://developer.mozilla.org/en-US/docs/Web/API/Window/location) para determinar o atributo rel do elemento anchor, foi usado a propriedade ``hostname`` do objeto de ``config``.

Isto porque trata-se de um projeto static generation, portanto, ao ser criado os arquivos estáticos ainda não há o objeto window.

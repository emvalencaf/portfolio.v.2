# Portfólio v.2

## Sobre o projeto

O presente projeto foi desenvolvido em JavaScript sendo usado a biblioteca do ReactJS e o framework do NextJS e corresponde ao frontend do seguinte [repositório](https://github.com/emvalencaf/backend-portfolio-2v). O principal objetivo foi refatorar (e trazer novas ideias) para o meu [projeto de portfólio]() desenvolvido em 2022.

Consequentemente, a comparação deste repositório (somado ao [repositório backend](https://github.com/emvalencaf/backend-portfolio-2v)) podem acusar o quão progredir na programação.

### Sobre o design

A ideia foi manter o design minimalista e a paleta de cores do modo escuro da versão anterior do portfólio. A opção por não desenvolver uma funcionalidade de toggle theme - que existia na primeira versão - foi primariamente porque o portfólio em light mode fica significamente menos atraente.

### Sobre o Desenvolvimento

#### ReactJS, Storybook e JEST

O uso do ReactJS foi essencial para desenvolver o projeto em módulos re-utilizáveis e estáveis, bem como mais fáceis de fazer patches de aprimoramento ou para corrigir bugs.

Uma vez que a ideia é tornar com que cada componente funcione e tenha uma sinergia, o storybook foi utilizado principalmente para o desenvolvimento do código CSS. Neste projeto optou-se por usar o Styled-component, por uma questão de maior liberdade, funcionalidade, integração e sinergia.

Por fim, o JEST foi utilizado para checar se os componentes se comportam como deveriam.

##### Componentes e Templates

A regra adotada neste projeto foi determinar que os templates seriam composto por (alguns ou muitos) componentes, portanto, a lógica usada para decidir foi: se o "componente" é significamente maior, não pode ser atomizado e é composto por outros componentes, ele é um template.

Por ter sido feito os testes unitários nos componentes se dispensou o uso dos testes nos templates para evitar redundância.

#### Consumo da API

O frontend consume a API desenvolvida no [repositório backend]() deste projeto, aplicou-se programção orientada ao objeto (POO) neste seção deste projeto, dividindo o consumo da aplicação em controllers e services.

Os controlleres ficaram responsáveis por concentrar as regras do negócio e fazer as validações enquanto os services responsáveis por chamar a FetchAPI.

A divisão dos controllers seguiu a modelagem do banco de dados, havendo um controller para cada collections modelada no [repoistório backend]() - excepto as de usuário. No momento, preferiu-se não deixar aberto ao cliente, no frontend, criar novos usuários, em virtude que a intenção é que seja um site pessoal-profissional.

Os controllers desenvolvidos foram: Section, Settings e Projects; esses ficaram responsáveis, por, respectivamente:
1. Criar o conteúdo das seções e indexar novos links ao menu de navegação;
2. Criar os metadados do portfólio armazenando dados como: logo, array de link do menu de navegação, e o usuário vinculado ao website;
3. Criar os projetos que serão anexados as seção de projetos do portfólio.

##### Sections

As seções básicas são: home, about, skills e projects; sendo essas as principais seções que o cliente poderá desenvolver, há um tipo genérico em que o cliente poderá usar apenas para acrescer textos - entretanto, essa funcionalidade ainda não foi implementada.


##### Validação

Para tornar o banco de dados mais seguro, foi utilizado uma camada de validação de dados no frontend (assim como no backend) tanto nos controllers como nos componentes.

#### NextJS

O NextJS foi utilizado para tornar mais perfomático o frontend ao fazer server-side render dos componentes, salvando assim o consumo da máquina do cliente. Ademais, o framework foi utilizado para melhor integrar o consumo da API no frontend, sendo utilizado algumas de suas bibliotecas para criar o sistema de autenticação e sessões mais seguras e práticas usando o jwt.


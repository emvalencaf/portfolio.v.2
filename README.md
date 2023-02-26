# Portfólio v.2

## Sobre o projeto

Este projeto é a refatoração do meu [primeiro portfólio](https://github.com/emvalencaf/portfolio) (desenvolvido em meados do 2º semestre de 2022) com o objetivo de aplicar novos conhecimentos e ferramentas mais sofisticadas. O projeto foi divido em 2 (dois) repositórios:

1. front-end;
2. [back-end](https://github.com/emvalencaf/backend-portfolio-2v).

Neste projeto foi usado a biblioteca ReactJS e o framework do NextJS para o desenvolvimento do front-end. Por sua vez, no back-end foram foi usado o NodeJS, Mongoose para modelar o banco de dados e o Express para o desenvolvimento da API.

## Sobre o design

A ideia foi manter o design minimalista e a paleta de cores do modo escuro da versão anterior do portfólio. A opção por não desenvolver uma funcionalidade de toggle theme - que existia na primeira versão - foi primariamente porque o portfólio em light mode fica significamente menos atraente.

A maioria das ideias do design foram mantidas nesta versão.

## Sobre o Desenvolvimento

### ReactJS, Storybook e JEST

A biblioteca ReactJS foi essencial para componentizar os módulos do projeto em códigos re-utilizáveis e estáveis, por consequência mais fáceis de fazer manutenções, depurar bugs e aprimorar.

A regra principal (com algumas exceções) é de que cada componente possa ser utilizado separadamente e quando montado encaixe com seu correspondente - tenha uma sinergia. Por essa razão, o storybook foi utilizado durante o desenvolvimento para guiar, no ambiente de desenvolvimento, como cada componente deveria se comportar (em termos gráficos).

Com a ideia de reutilizar e componententizar, nesse projeto foi usado o Styled-Component para componentizar os estilos aplicados em um componente. Desta forma, esses estilos podem ser melhor controlados pelos componentes pai.

Por fim, o JEST foi utilizado para checar se os componentes se comportam como deveriam.

#### Componentes e Templates

Como a regra estabelecida neste projeto foi componentizar ao máximo, torna-se inevitável que alguns componentes utlizem componentes menores. Quando um componente envolve muitos componentes ao invés de ser desenvolvido como um componente normal, ele é desenvovlido como um template.

A principal ideia é que os templates sejam os componentes funcionais a serem renderizados pelo roteamento do NextJS.

Ademais, o JEST só foi usado para checar os componentes, uma vez tornar-se-ia redundante aplicar os mesmos testes aos templates.

#### Consumo da API

Os dados relacionados ao conteúdo do portfólio são buscados na API desenvolvida no [repositório backend](https://github.com/emvalencaf/backend-portfolio-2v). Por uma questão de padronização e organização, optou-se por aplicar POO (programação orientada ao objeto) no consumo da API, tendo cada ``endpoint`` da API um ``controller`` e um ``service`` específico.

Os ``controlleres`` ficaram responsávis por conetrar as regras do negócio e as validações, enquanto que os ``services`` por chamar os métodos da API - por meio da FetchAPI.

Ao todo são 5 (cinco) ``controllers`` e 5 (cinco) ``services``, localizados no diretório ``src/api``, que são:
1. Portfolio (para buscar os dados relativos ao Portfolio na API);
2. Projects (para criar e buscar dados relativo a Collection Projects na API);
3. Sections (para ciar e buscar dados relativos as Sections na API);
4. Settings (para criar e buscar dados relativo aos metadados do portfólio na API);
5. GithubData (para buscar dados sobre o usuário na API do Github);

##### Sobre as collections
###### Portfolio

O Portfolio é uma Collection de um único registro, neste projeto, ele está relacionado a 1 (um) settings e há várias sections.

###### Settings

Settings é a collection, que pode ter vários registros, em que são configurados o nome do site, informações sobre o dono, o menu de links e os dados relacionados as redes sociais do dono do site.

###### Sections

As sections são o conteúdo do pórtfolio, há 5 tipos de sections:

1. home (apresentação breve do dono do site);
2. about (informações sobre suas qualificações educacionais e trabalhos);
3. skills (informações sobre as tecnologias e ferramentas que possui conhecimento);
4. projects (informações sobre os projetos);
5. other (uma seção livre onde pode se escrever).

As sections estão relacionadas a uma única Settings, e cada Settings só admite 1 section por tipo, ou seja: 1 home, 1 about, 1 skills, 1 projects, 1 other.
###### Projects

Apesar de ser possível integrar os dados do repositórios vinculados a conta do usuário no Github por meio da API do Github, optou-se por criar uma collection específica para seleiconar apenas os projetos mais relevantes do usuário.

Cada projeto possui sua página individual.

### Validação

Há várias camadas de validações tanto no back-end quanto no front-end, optou-se por criar validações (sempre que possível) no HTML, nos controllers e no back-end, desta forma garante-se a persistência dos dados ao serem registrados no banco de dados.

### NextJS e NextAuth
#### NextJS
O framework NextJS foi utilizado para tornar mais perfomático o frontend, ao permitir que sejam renderizados no servidor os componentes salvando recursos de memória do cliente.

Por não haver a necessidade uma interação em tempo real entre o banco de dados e o frontend, a página do portfólio foi desenvolvida de forma estática, sendo revalidada (remontada) uma vez a cada 20 horas.

#### NextAuth
O portfólio possui uma área administrativa em que o dono do site pode, ele mesmo, gerir o conteúdo das seções, dos projetos e do settings, para, desta forma atualizar o próprio portfólio.

Para isto, foi necessário usar o NextAuth para autenticar as rotas.


## Como Usar

1. Baixe o repositório do front-end e do [back-end](https://github.com/emvalencaf/backend-portfolio-2v);
3. Crie o arquivo ``.env.local`` na raiz do projeto e o configure do seguinte jeito:
````
NEXT_PUBLIC_SITE_NAME=(nome do seu website)
NEXT_PUBLIC_LOGIN_URI=(o path para o login)
NEXT_PUBLIC_API_URL=(a url da sua API)

NEXTAUTH_URL=(a url da API de autenticação, não estará disponível no browser)
NEXT_AUTH_SECRET=(o segredo para criar os tokens de autenticação, não estará disponível no browser)

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

GITHUB_TOKEN=(o token para acessar o github graphql)
NEXT_PUBLIC_API_GITHUB_USERNAME=(o username do dono do site)
````

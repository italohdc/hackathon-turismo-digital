# Hackathon Turismo Digital (Equipe 4)

**DEMO:** [https://turismo-digital.netlify.com/](https://turismo-digital.netlify.com/)

![Demonstração de três telas presentes na aplicação](banner.png)

## Tecnologias Utilizadas

### Vue

O Vue.js é um framework de desenvolvimento de SPA (single-page application). Apesar de existirem outras opções semelhantes, como o React e o Angular, escolhemos o Vue devido ao tamanho pequeno do projeto inicial, à nossa familiaridade com o framework e à facilidade em dividir a aplicação em componentes reutilizáveis.

### Atomic Design

Neste projeto, organizamos os componentes do Front-End utilizando o Atomic Design.

### Netlify

Existem várias plataformas de hospedagem de sites que poderiam ser utilizadas. No entanto, resolvemos utilizar o Netlify para fazer a hospedagem da aplicação porque, além de fornecer um serviço de hospedagem gratuita, ele permite configurar de forma fácil e rápida o deploy automático da aplicação.

Isso significa que sempre que alguma nova alteração for adicionada ao repositório Git do projeto na branch master, ele irá gerar a build da aplicação automaticamente e subir as mudanças para o ambiente de produção.

### Buefy

O Buefy é uma biblioteca de componentes estilizados para o Vue baseado no Bulma. Semelhante ao Bootstrap, o Bulma é um framework CSS que fornece alguns estilos prontos para agilizar a confecção de uma página web. Uma das grandes vantagens do Buefy, e um dos motivos pelo qual ele foi escolhido, é o tamanho pequeno da biblioteca e um visual mais bem polido.

### Além disso...

Para manter o código mais organizado, foi configurado um **hook** no **git commit**. Este hook é responsável por fazer correções estéticas no código e evitar possíveis erros.


## Como rodar o projeto

```
# Instalar as dependências
npm install

# Rodar aplicação localmente
npm run serve

# Gerar arquivos para produção
npm run build

# Rodar lint
npm run lint
```


## Licença

Este projeto é distribuído sobre a [licença do MIT](LICENSE).

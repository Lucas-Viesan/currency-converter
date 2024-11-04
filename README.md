# Conversor de Moedas

## Introdução

O Conversor de Moedas é uma aplicação web que permite converter valores entre diferentes moedas de forma simples e intuitiva. Utilizando uma API de câmbio, o site oferece conversões em tempo real para diversas moedas populares, exibindo a taxa de câmbio e possibilitando cálculos com precisão.

## Funcionalidades

- Seleção de Moeda Base: Escolha entre diversas moedas, incluindo Euro (EUR), Dólar Americano (USD), Libra Esterlina (GBP), Iene Japonês (JPY), Franco Suíço (CHF), Dólar Canadense (CAD) e Dólar Australiano (AUD).
- Conversão para Real Brasileiro (BRL): Converta o valor da moeda selecionada para Real Brasileiro, com valores de conversão atualizados em tempo real.
- Entrada Personalizada de Valores: Insira o valor que deseja converter, e o sistema retornará o valor convertido em reais (BRL).
- Exibição da Taxa de Câmbio Atualizada: Veja a taxa de câmbio mais recente entre a moeda selecionada e o BRL, junto com a data da última atualização.

## Tecnologias Utilizadas

- React.js: Biblioteca JavaScript para construção da interface de usuário.
- CSS3: Estilização do layout e design responsivo.
- API de Câmbio: Utilizada para obter taxas de câmbio em tempo real e históricos de tendências das moedas: https://exchangeratesapi.io/. A versão utilizada permite fazer apenas 100 requisições por mês.

## Instruções para executar

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:

```
git clone https://github.com/Lucas-Viesan/currency-converter.git

```

2. Navegue até o diretório do projeto:

```
cd conversor-moedas

```

3. Instale as dependências:

```
npm install
```

4. Execute o servidor de desenvolvimento:

```
npm start
```

## Deploy

O projeto está disponível online e pode ser acessado diretamente através deste link: https://currency-convertet-lucas-viesan.netlify.app/

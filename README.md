# Gerador de Gráficos

Projeto front-end feito com **Vite + React + TypeScript** para gerar gráficos a partir de dados JSON.

🚀 **Deploy:** [https://gerador-de-graficos-xi.vercel.app/](https://gerador-de-graficos-xi.vercel.app/)

---

## Funcionalidades

* Editor de JSON integrado com **Monaco Editor**
* Validação automática do JSON (objeto simples de chave/valor numérico)
* Upload de arquivos `.json`
* Gráficos de barra e pizza
* Exportação do gráfico como PNG
* Tema escuro para editor e gráficos

---

## Tecnologias e Dependências Principais

* **React**
* **TypeScript**
* **Vite**
* **React Google Charts**
* **Monaco Editor**
* **Styled Components**

---

## Rodando localmente

```bash
# Clonar o projeto
git clone https://github.com/seu-usuario/gerador-de-graficos.git
cd gerador-de-graficos

# Instalar dependências
yarn install

# Rodar em modo de desenvolvimento
yarn dev
```

Abra no navegador: `http://localhost:5173`

---

## Build e produção

```bash
# Gerar build de produção
yarn build

# Servir o build localmente
yarn preview
```

---

## Docker

```bash
# Build da imagem
docker build -t gerador-de-graficos:v2.0.0 .

# Rodar o container
docker run -p 5173:80 gerador-de-graficos:v2.0.0
```

Abra no navegador: `http://localhost:5173`

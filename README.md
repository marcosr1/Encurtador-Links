# Encurtador-Links
Um encurtador de URLs desenvolvido com Node.js e Sequelize, que transforma links longos em URLs curtas com slugs divertidos, métricas de acesso e preocupações reais de segurança.

## Exemplos reais:
```bash
/confia-847
/link-suspeito-312
/nao-clica-666
```

---

## ✨ Funcionalidades
- 🔗 Encurtamento de URLs com slug personalizado ou automático
- 🎭 Gerador de slugs com personalidade
- 🚀 Redirecionamento rápido via /slug
- 📊 Contador de cliques
- 🧠 Registro de IP e User-Agent
- ⏰ Expiração de links
- 🚫 Blacklist de URLs suspeitas
- 🛡 Rate limit contra abuso
- 📈 Dashboard simples via API

---

## 🛠️ Stack utilizada
- Node.js
- Express
- Sequelize
- PostgreSQL
- ES Modules (import/export)
- express-rate-limit
- dotenv

---

## 🧱 Arquitetura do projeto
```bash
src/
 ├─ config/
 │   ├─ databases.js
 ├─ models/
 │   ├─ Link.js
 │   └─ index.js
 ├─ controllers/
 │   ├─ linkController.js
 │   ├─ redirectController.js
 ├─ routes/
 │   ├─ linkRoutes.js
 │   ├─ redirectRoutes.js
 ├─ utils/
 │   ├─ isValidUrl.js
 │   ├─ slugGenerator.js
app.js
server.js
```
Separação clara de responsabilidades seguindo boas práticas de backend.

---

## 🧠 Modelagem de dados
Link
- id
- originalUrl
- slug
- clicks
- expiresAt
- createdAt

---

## 🚀 Como rodar o projeto
### Pré-requisitos
- Node.js >= 18 
- PostgreSQL


### 1️⃣ Clone o repositório
```bash
git clone https://github.com/seu-usuario/encurtador-com-personalidade.git
cd encurtador-com-personalidade
```
### 2️⃣ Instale as dependências
```bash
npm install
```
### 3️⃣ Configure o ambiente
Crie um arquivo .env:
```bash
DB_NAME=links_db
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
```
### 4️⃣ Inicie o servidor
```bash
npm run dev
```
Servidor disponível em:
```bash
http://localhost:3333
```
## 🔗 Criando um link
```bash
POST /links
```
```json
{
  "originalUrl": "https://google.com",
  "slug": "confia"
}
```

- Ou sem slug (gerado automaticamente):
```bash
POST /links
```
```json
{
  "originalUrl": "https://google.com"
}
```

## 🔁 Usando o encurtador

### Se o slug gerado for:
```bash
confia-847
```
### Acesse no navegador:
```bash
http://localhost:3333/confia-847
```
### O sistema:
- registra o clique
- incrementa métricas
- redireciona para a URL original

---

## 📊 Dashboard (API)

### Endpoint:
```bash
GET /dashboard
```
### Retorna:
- links ordenados por número de cliques
- lista de acessos (IP, user-agent, data)
- Pronto para ser consumido por qualquer frontend.

--- 

## 🔒 Segurança aplicada
- Validação de URLs
- Blacklist básica de termos suspeitos
- Rate limit global
- Expiração automática de links
- Tratamento de slugs duplicados

---

## 📌 Possíveis melhorias futuras
- Autenticação de usuários
- Links privados
- Dashboard com gráficos
- Testes automatizados
- Deploy com domínio curto
- Cache com Redis

---
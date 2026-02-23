import app from "./app.js";
import { initDb } from "./src/models/index.js";

const PORT = process.env.PORT || 3000;

await initDb();

app.listen(PORT, () => {
    console.log("Servidor rodando na porta", PORT);
});

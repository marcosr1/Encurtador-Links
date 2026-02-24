import app from "./app.js";
import { initDb } from "./src/models/index.js";
import { cleanExpiredLinks } from "./src/jobs/cleanExpiredLinks.js";

const PORT = process.env.PORT || 3000;

await initDb();
cleanExpiredLinks();

app.listen(PORT, () => {
    console.log("Servidor rodando na porta", PORT);
});

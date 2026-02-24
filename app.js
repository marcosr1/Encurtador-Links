import express from "express";
import linkRoutes from "./src/routes/linkRoutes.js";
import redirectRoutes from "./src/routes/redirectRoutes.js";
import dashboardRoutes from "./src/routes/dashboardRoutes.js";

const app = express();

app.use(express.json());
app.use(linkRoutes); 
app.use(dashboardRoutes);
app.use(redirectRoutes);


export default app;
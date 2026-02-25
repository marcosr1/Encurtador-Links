import express from "express";
import cors from "cors";
import linkRoutes from "./src/routes/linkRoutes.js";
import redirectRoutes from "./src/routes/redirectRoutes.js";
import dashboardRoutes from "./src/routes/dashboardRoutes.js";
import qrcodeRoutes from "./src/routes/qrcodeRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(linkRoutes); 
app.use(dashboardRoutes);
app.use(qrcodeRoutes);
app.use(redirectRoutes);


export default app;
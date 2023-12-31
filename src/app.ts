import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.listen(PORT, () => console.log(`Corriendo en el Puerto: ${PORT}`));

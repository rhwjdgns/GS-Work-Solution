import express from "express";
import connect from "./schemas/index.js";
import dotenv from "dotenv";
import CharacterRouter from "./routes/characters.router.js";
import ItemRouter from "./routes/items.router.js";

dotenv.config();

const app = express();
const PORT = 3000;
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = express.Router();
router.get("/", (req, res) => {
  return res.json({ message: "API Index Page" });
});

app.use("/api", [router, CharacterRouter, ItemRouter]);

app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸습니다.");
});

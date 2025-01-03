import express from "express";
import postRoutes from "./routes/post.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import cors from 'cors'
const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/post", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.get("/test", (req, res) => {
  res.json("It works");
});

app.listen(8000, () => {
  console.log("connected");
});

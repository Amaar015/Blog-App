import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("Hello user");
});

export default router;

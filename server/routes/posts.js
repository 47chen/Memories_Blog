import express from "express";

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts.js";

const router = express.Router();

//http://localhost:5001/posts

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;

import express from "express";

import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

//http://localhost:5001/posts

router.get("/", getPosts);
router.post("/", auth, createPost);
router.get("/:id", getPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);

export default router;

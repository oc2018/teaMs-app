import express from "express";
import { createPost, getPosts, getPostsById } from "../controlers/post.js";

const router = express.Router();

router.get('/',getPosts);

router.get('/:id', getPostsById);

router.post('/', createPost);

export default router;
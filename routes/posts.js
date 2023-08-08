import express from "express";
import {getFeedPosts,getUserPosts,likePost} from "../controllers/post.js";
import { verifyToken } from "../middleware/auth.js";
const router=express.Router();
/*Read*/
router.get("/",verifyToken,getFeedposts);
router.get("/;userId/posts",verifyToken,getUserPosts);

/*update*/
router.patch("/:id/like,",verifyToken, likePost);
export default router;


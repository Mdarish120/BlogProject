import express from "express";

import { Create,Get,Update} from "../controllers/post.js";

const router=express.Router();


//localhost:5000/posts
router.get('/get',Get);

router.post('/post',Create);
router.patch('/:id',Update);


export default  router;
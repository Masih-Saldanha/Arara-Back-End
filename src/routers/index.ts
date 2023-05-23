import { Router } from "express";

import authRouter from "./authRouter.js";
import commentRouter from "./commentRouter.js";

const router = Router();

router.use("/auth/", authRouter);
router.use("/comment/", commentRouter);

export default router;
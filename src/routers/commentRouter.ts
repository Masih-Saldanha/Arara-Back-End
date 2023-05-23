import { Router } from "express";

import { validateToken } from "../middlewares/tokenMiddleware.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import commentSchema from "../schemas/commentSchema.js";
import commentController from "../controllers/commentController.js";

const commentRouter = Router();

commentRouter.use(validateToken);
commentRouter.post("/register/", validateSchema(commentSchema.registerCommentData), commentController.registerComment);
commentRouter.put("/edit/", validateSchema(commentSchema.editCommentData), commentController.editComment);
commentRouter.delete("/delete/:commentId", commentController.deleteComment);
commentRouter.get("/get/:page", commentController.getComments);

export default commentRouter;
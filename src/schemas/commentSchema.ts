import Joi from "joi";

import { CommentData, EditCommentData } from "../repositories/commentRepository.js";

const registerCommentData = Joi.object<CommentData>({
    comment: Joi.string().min(1).required(),
    userId: Joi.number().min(1).required(),
});

const editCommentData = Joi.object<EditCommentData>({
    comment: Joi.string().min(1).required(),
    userId: Joi.number().min(1).required(),
    commentId: Joi.number().min(1).required(),
});

const commentSchema = {
    registerCommentData,
    editCommentData,
};

export default commentSchema;
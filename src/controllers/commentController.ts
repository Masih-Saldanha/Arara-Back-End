import { Request, Response } from "express";

import { CommentData } from "../repositories/commentRepository.js";
import commentService from "../services/commentService.js";

async function registerComment(req: Request, res: Response) {
    const commendtData: CommentData = req.body;

    await commentService.registerComment(commendtData);

    res.sendStatus(201);
};

async function editComment(req: Request, res: Response) {
    const { commentId, comment, userId }: { commentId: number, comment: string, userId: number } = req.body;

    const editedComment = await commentService.editComment(commentId, comment, userId);

    res.status(200).send(editedComment);
};

async function deleteComment(req: Request, res: Response) {
    const commentId = +req.params.commentId;

    await commentService.deleteComment(commentId);

    res.sendStatus(200);
};

async function getComments(req: Request, res: Response) {
    const page = +req.params.page;

    const comments = await commentService.getComments(page);

    res.status(200).send(comments);
};

const commentController = {
    registerComment,
    editComment,
    deleteComment,
    getComments,
};

export default commentController;
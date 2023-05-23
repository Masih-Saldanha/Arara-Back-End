import { Comments } from "@prisma/client";

import { prisma } from "../config/database.js";

export type CommentData = Omit<Comments, "id" | "createdAt">;

export type EditCommentData = CommentData & { commentId: number };

async function findCommentByCommentId(commentId: number) {
    return prisma.comments.findUnique({ where: { id: commentId } });
};

async function registerComment(comment: string, userId: number) {
    await prisma.comments.create({ data: { comment, userId } });
};

async function editComment(commentId: number, comment: string) {
    return prisma.comments.update({
        where: { id: commentId },
        data: { comment },
        select: {
            id: true,
            comment: true,
            createdAt: true,
            userId: true,
            users: { select: { username: true } },
        },
    });
};

async function deleteComment(commentId: number) {
    await prisma.comments.delete({ where: { id: commentId } });
};

async function getComments(page: number, pageSize: number) {
    const skip = page * pageSize;
    const take = pageSize;

    return prisma.comments.findMany({
        skip,
        take,
        orderBy: { id: "desc" },
        include: { users: { select: { username: true } } },
    });
};

const commentRepository = {
    findCommentByCommentId,
    registerComment,
    editComment,
    deleteComment,
    getComments,
};

export default commentRepository;
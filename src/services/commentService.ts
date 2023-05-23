import authRepository from "../repositories/authRepository.js";
import commentRepository, { CommentData } from "../repositories/commentRepository.js";
import { throwError } from "../utils/errorTypeUtils.js";

async function registerComment(commentData: CommentData) {
    const userExist = await authRepository.findUserById(commentData.userId);
    throwError(!userExist, "Not Found", `The user with ID: "${commentData.userId}", ins't registered yet`);

    await commentRepository.registerComment(commentData.comment, commentData.userId);
};

async function editComment(commentId: number, comment: string, userId: number) {
    const commentExist = await commentRepository.findCommentByCommentId(commentId);
    throwError(!commentExist, "Not Found", `The comment with the ID: "${commentId}" doens't exist`);

    const userExist = await authRepository.findUserById(userId);
    throwError(!userExist, "Not Found", `The user with ID: "${userId}", ins't registered yet`);
    
    throwError(commentExist.userId !== userId, "Unauthorized", `The comment with the ID: "${commentId}" doens't belong to the user`);

    const editedComment = await commentRepository.editComment(commentId, comment);
    return editedComment;
};

async function deleteComment(commentId: number) {
    const commentExist = await commentRepository.findCommentByCommentId(commentId);
    throwError(!commentExist, "Not Found", `The comment with the ID: "${commentId}", doens't exist`);

    await commentRepository.deleteComment(commentId);
};

async function getComments(page: number = 0, pageSize: number = 10) {
    return await commentRepository.getComments(page, pageSize);
};

const commentService = {
    registerComment,
    editComment,
    deleteComment,
    getComments,
};

export default commentService;
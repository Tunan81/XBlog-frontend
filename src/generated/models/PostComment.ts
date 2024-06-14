/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostCommentUserVO } from './PostCommentUserVO';
import type { Reply } from './Reply';
export type PostComment = {
    id?: number;
    parentId?: number;
    postId?: number;
    uid?: number;
    content?: string;
    address?: string;
    likes?: number;
    createTime?: string;
    user?: PostCommentUserVO;
    reply?: Reply;
};


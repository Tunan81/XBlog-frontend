/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QuestionCommentUserVO } from './QuestionCommentUserVO';
import type { Reply } from './Reply';

export type QuestionComment = {
    address?: string;
    content?: string;
    createTime?: string;
    id?: number;
    likes?: number;
    parentId?: number;
    questionId?: number;
    reply?: Reply;
    uid?: number;
    user?: QuestionCommentUserVO;
};

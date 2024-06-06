/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JudgeConfig } from './JudgeConfig';
import type { UserVO } from './UserVO';

export type QuestionVO = {
    acceptNum: number;
    content?: string;
    createTime?: string;
    difficulty?: number;
    id?: number;
    judgeConfig?: JudgeConfig;
    questionVO?: QuestionVO;
    submitNum?: number;
    tags?: Array<string>;
    title?: string;
    updateTime?: string;
    userId?: number;
    userVO?: UserVO;
};

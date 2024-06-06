/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuestionCommentDTO } from '../models/QuestionCommentDTO';
import type { Result_List_QuestionComment_ } from '../models/Result_List_QuestionComment_';
import type { Result_object_ } from '../models/Result_object_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class QuestionCommentControllerService {

    /**
     * page
     * @param pageNum pageNum
     * @param pageSize pageSize
     * @param questionId questionId
     * @returns Result_List_QuestionComment_ OK
     * @throws ApiError
     */
    public static pageUsingGet(
pageNum: number,
pageSize: number,
questionId?: number,
): CancelablePromise<Result_List_QuestionComment_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/question/comment/page/{pageNum}/{pageSize}',
            path: {
                'pageNum': pageNum,
                'pageSize': pageSize,
            },
            query: {
                'questionId': questionId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * save
     * @param commentDto commentDTO
     * @returns Result_object_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveUsingPost1(
commentDto: QuestionCommentDTO,
): CancelablePromise<Result_object_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/comment/save',
            body: commentDto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}

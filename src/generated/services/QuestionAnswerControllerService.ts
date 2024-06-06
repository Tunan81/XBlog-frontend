/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuestionAnswerBaseRequest } from '../models/QuestionAnswerBaseRequest';
import type { Result_List_QuestionAnswerVO_ } from '../models/Result_List_QuestionAnswerVO_';
import type { Result_long_ } from '../models/Result_long_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class QuestionAnswerControllerService {

    /**
     * save
     * @param questionAnswerBaseRequest questionAnswerBaseRequest
     * @returns Result_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveUsingPost(
questionAnswerBaseRequest: QuestionAnswerBaseRequest,
): CancelablePromise<Result_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/answer/add',
            body: questionAnswerBaseRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listQuestionAnswerById
     * @param questionId questionId
     * @returns Result_List_QuestionAnswerVO_ OK
     * @throws ApiError
     */
    public static listQuestionAnswerByIdUsingGet(
questionId: number,
): CancelablePromise<Result_List_QuestionAnswerVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/question/answer/list',
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

}

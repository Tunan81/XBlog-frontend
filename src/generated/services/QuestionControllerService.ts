/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteRequest } from '../models/DeleteRequest';
import type { QuestionAddRequest } from '../models/QuestionAddRequest';
import type { QuestionEditRequest } from '../models/QuestionEditRequest';
import type { QuestionQueryRequest } from '../models/QuestionQueryRequest';
import type { QuestionSubmitAddRequest } from '../models/QuestionSubmitAddRequest';
import type { QuestionSubmitQueryRequest } from '../models/QuestionSubmitQueryRequest';
import type { QuestionUpdateRequest } from '../models/QuestionUpdateRequest';
import type { Result_boolean_ } from '../models/Result_boolean_';
import type { Result_JudgeVO_ } from '../models/Result_JudgeVO_';
import type { Result_List_UserRankVO_ } from '../models/Result_List_UserRankVO_';
import type { Result_long_ } from '../models/Result_long_';
import type { Result_Page_QuestionManageVO_ } from '../models/Result_Page_QuestionManageVO_';
import type { Result_Page_QuestionSubmitVO_ } from '../models/Result_Page_QuestionSubmitVO_';
import type { Result_Page_QuestionVO_ } from '../models/Result_Page_QuestionVO_';
import type { Result_Question_ } from '../models/Result_Question_';
import type { Result_QuestionVO_ } from '../models/Result_QuestionVO_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class QuestionControllerService {

    /**
     * addQuestion
     * @param questionAddRequest questionAddRequest
     * @returns Result_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addQuestionUsingPost(
questionAddRequest: QuestionAddRequest,
): CancelablePromise<Result_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/add',
            body: questionAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteQuestion
     * @param deleteRequest deleteRequest
     * @returns Result_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteQuestionUsingPost(
deleteRequest: DeleteRequest,
): CancelablePromise<Result_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/delete',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * editQuestion
     * @param questionEditRequest questionEditRequest
     * @returns Result_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static editQuestionUsingPost(
questionEditRequest: QuestionEditRequest,
): CancelablePromise<Result_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/edit',
            body: questionEditRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getQuestionById
     * @param id id
     * @returns Result_Question_ OK
     * @throws ApiError
     */
    public static getQuestionByIdUsingGet(
id?: number,
): CancelablePromise<Result_Question_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/question/get',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getQuestionSubmitStatus
     * @param questionId questionId
     * @returns Result_long_ OK
     * @throws ApiError
     */
    public static getQuestionSubmitStatusUsingGet(
questionId?: number,
): CancelablePromise<Result_long_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/question/get/question_submit/status',
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
     * getQuestionVOById
     * @param id id
     * @returns Result_QuestionVO_ OK
     * @throws ApiError
     */
    public static getQuestionVoByIdUsingGet(
id?: number,
): CancelablePromise<Result_QuestionVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/question/get/vo',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listQuestionByPage
     * @param questionQueryRequest questionQueryRequest
     * @returns Result_Page_QuestionManageVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listQuestionByPageUsingPost(
questionQueryRequest: QuestionQueryRequest,
): CancelablePromise<Result_Page_QuestionManageVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/list/page',
            body: questionQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listQuestionVOByPage
     * @param questionQueryRequest questionQueryRequest
     * @returns Result_Page_QuestionVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listQuestionVoByPageUsingPost(
questionQueryRequest: QuestionQueryRequest,
): CancelablePromise<Result_Page_QuestionVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/list/page/vo',
            body: questionQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getJudgeResult
     * @param questionSubmitId questionSubmitId
     * @returns Result_JudgeVO_ OK
     * @throws ApiError
     */
    public static getJudgeResultUsingGet(
questionSubmitId?: number,
): CancelablePromise<Result_JudgeVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/question/question-submit/get/id',
            query: {
                'questionSubmitId': questionSubmitId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listQuestionSubmitByPage
     * @param questionSubmitQueryRequest questionSubmitQueryRequest
     * @returns Result_Page_QuestionSubmitVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listQuestionSubmitByPageUsingPost(
questionSubmitQueryRequest: QuestionSubmitQueryRequest,
): CancelablePromise<Result_Page_QuestionSubmitVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/question_submit/list/page',
            body: questionSubmitQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * submit
     * @param questionSubmitAddRequest questionSubmitAddRequest
     * @returns Result_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static submitUsingPost(
questionSubmitAddRequest: QuestionSubmitAddRequest,
): CancelablePromise<Result_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/question_submit/submit/do',
            body: questionSubmitAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getUserRank
     * @returns Result_List_UserRankVO_ OK
     * @throws ApiError
     */
    public static getUserRankUsingGet(): CancelablePromise<Result_List_UserRankVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/question/rank',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateQuestion
     * @param questionUpdateRequest questionUpdateRequest
     * @returns Result_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateQuestionUsingPost(
questionUpdateRequest: QuestionUpdateRequest,
): CancelablePromise<Result_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/update',
            body: questionUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}

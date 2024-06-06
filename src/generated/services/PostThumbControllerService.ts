/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostThumbAddRequest } from '../models/PostThumbAddRequest';
import type { Result_int_ } from '../models/Result_int_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PostThumbControllerService {

    /**
     * doThumb
     * @param postThumbAddRequest postThumbAddRequest
     * @returns Result_int_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static doThumbUsingPost(
postThumbAddRequest: PostThumbAddRequest,
): CancelablePromise<Result_int_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post/thumb/',
            body: postThumbAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostThumbAddRequest } from '../models/PostThumbAddRequest';
import type { ResultInteger } from '../models/ResultInteger';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PostThumbControllerService {
    /**
     * @param requestBody
     * @returns ResultInteger OK
     * @throws ApiError
     */
    public static doThumb(
        requestBody: PostThumbAddRequest,
    ): CancelablePromise<ResultInteger> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/thumb/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

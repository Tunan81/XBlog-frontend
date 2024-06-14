/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostFavourAddRequest } from '../models/PostFavourAddRequest';
import type { ResultInteger } from '../models/ResultInteger';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PostFavoriteControllerService {
    /**
     * @param requestBody
     * @returns ResultInteger OK
     * @throws ApiError
     */
    public static doPostFavour(
        requestBody: PostFavourAddRequest,
    ): CancelablePromise<ResultInteger> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/favorite/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

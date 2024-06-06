/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostFavourAddRequest } from '../models/PostFavourAddRequest';
import type { Result_int_ } from '../models/Result_int_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PostFavoriteControllerService {

    /**
     * doPostFavour
     * @param postFavourAddRequest postFavourAddRequest
     * @returns Result_int_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static doPostFavourUsingPost(
postFavourAddRequest: PostFavourAddRequest,
): CancelablePromise<Result_int_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post/favorite/',
            body: postFavourAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}

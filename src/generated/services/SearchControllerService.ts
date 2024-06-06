/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Result_SearchVO_ } from '../models/Result_SearchVO_';
import type { SearchRequest } from '../models/SearchRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SearchControllerService {

    /**
     * searchAll
     * @param searchRequest searchRequest
     * @returns Result_SearchVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static searchAllUsingPost(
searchRequest: SearchRequest,
): CancelablePromise<Result_SearchVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/search/all',
            body: searchRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}

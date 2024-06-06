/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Result_boolean_ } from '../models/Result_boolean_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FileControllerService {

    /**
     * upload
     * @param file file
     * @returns Result_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static uploadUsingPost(
file: Blob,
): CancelablePromise<Result_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/file/upload',
            body: file,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
